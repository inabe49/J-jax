

export class DateTime {


    public static isSameDay(d1: Date, d2: Date): boolean {
        return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
    }


    public static getModifiedJulianDate(date: Date): number {
        var y = date.getFullYear();
        var m = date.getMonth();
        var d = date.getDate();

        if (m === 1 || m === 2) {
            y = y - 1;
            m = m + 12;
        }

        return Math.floor(365.25 * y) + Math.floor(y / 400.0) - Math.floor(y / 100.0) + Math.floor(30.59 * (m - 2)) + d - 678912;
    }

}
