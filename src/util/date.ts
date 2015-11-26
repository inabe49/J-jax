
export function getModifiedJulianDate(date: Date): number {
    var y = date.getFullYear();
    var m = date.getMonth();

    if (m === 1 || m === 2) {
        y = y - 1;
        m = m + 12;
    }

    var d = date.getDate();

    return Math.floor(365.25 * y) + Math.floor(y / 400.0) - Math.floor(y / 100.0) + Math.floor(30.59 * (m - 2)) + d - 678912;

//    var y = date.getFullYear() + Math.floor((date.getMonth() - 3 + 1) / 12.0);
//    var m = (date.getMonth() - 3 + 1) % 12;
//    var d = date.getDate() - 1;
//    var n = d + Math.floor((153 * m + 2) / 5.0) + 365 * y + Math.floor(y / 4.0) - Math.floor(y / 100.0) + Math.floor(y / 400.0);

//    return n - 678881;
}


export function isSameDay(d1: Date, d2: Date): boolean {
    return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
}



export class TimeSpan {

}
