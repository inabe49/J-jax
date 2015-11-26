
export function getModifiedJulianDate(date: Date): number {
    var y = date.getFullYear();
    var m = date.getMonth();
    var d = date.getDate();

    if (m === 1 || m === 2) {
        y = y - 1;
        m = m + 12;
    }

    return Math.floor(365.25 * y) + Math.floor(y / 400.0) - Math.floor(y / 100.0) + Math.floor(30.59 * (m - 2)) + d - 678912;
}


export function isSameDay(d1: Date, d2: Date): boolean {
    return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
}


export class TimeSpan {
    private _totalMilliseconds: number;

    private _days: number;
    private _hours: number;
    private _minutes: number;
    private _seconds: number;
    private _milliseconds: number;

    private _setTotalMilliseconds(totalMsec: number) {
        this._totalMilliseconds = totalMsec < 0.0 ? -1 * totalMsec : totalMsec;

        var temp = totalMsec;
        this._milliseconds = temp % 1000;
        temp = (temp - this._milliseconds) / 1000;

        this._seconds = temp % 60;
        temp = (temp - this._seconds) / 60;

        this._minutes = temp % 60;
        temp = (temp - this._minutes) / 60;

        this._hours = temp % 24;
        temp = (temp - this._hours) / 24;

        this._days = temp;

        if (totalMsec < 0.0) {
            this._days = -1 * this._days;
            this._hours = -1 * this._hours;
            this._minutes = -1 * this._minutes;
            this._seconds = -1 * this._seconds;
            this._milliseconds = -1 * this._milliseconds;
        }
    }


    constructor(totalMsec: number) {
        this._setTotalMilliseconds(totalMsec);
    }

    public static fromDates(d1: Date, d2: Date): TimeSpan {
        return new TimeSpan(d1.getTime() - d2.getTime());
    }


    get days(): number {
        return this._days;
    }

    set days(value: number) {
        var dms = (value - this._days) * 24 * 60 * 60 * 1000;

        this._setTotalMilliseconds(this._totalMilliseconds + dms);
    }

    get hours(): number {
        return this._hours;
    }

    set hours(value: number) {
        var dms = (value - this._hours) * 60 * 60 * 1000;

        this._setTotalMilliseconds(this._totalMilliseconds + dms);
    }

    get minutes(): number {
        return this._minutes;
    }

    set minutes(value: number) {
        var dms = (value - this._minutes) * 60 * 1000;

        this._setTotalMilliseconds(this._totalMilliseconds + dms);
    }

    get seconds(): number {
        return this._seconds;
    }

    set seconds(value: number) {
        var dms = (value - this._seconds) * 1000;

        this._setTotalMilliseconds(this._totalMilliseconds + dms);
    }

    get milliseconds(): number {
        return this._milliseconds;
    }

    set milliseconds(value: number) {
        var dms = (value - this._milliseconds);

        this._setTotalMilliseconds(this._totalMilliseconds + dms);
    }



    get totalDays(): number {
        return this._totalMilliseconds / (24 * 60 * 60 * 1000);
    }

    set totalDays(days: number) {
        this._setTotalMilliseconds(days * 24 * 60 * 60 * 1000);
    }

    get totalHours(): number {
        return this._totalMilliseconds / (60 * 60 * 1000);
    }

    set totalHours(hs: number) {
        this._setTotalMilliseconds(hs * 60 * 60 * 1000);
    }

    get totalMinutes(): number {
        return this._totalMilliseconds / (60 * 1000);
    }

    set totalMinutes(mins: number) {
        this._setTotalMilliseconds(mins * 60 * 1000);
    }

    get totalSeconds(): number {
        return this._totalMilliseconds / 1000;
    }

    set totalSeconds(secs: number) {
        this._setTotalMilliseconds(secs * 1000);
    }

    get totalMilliseconds(): number {
        return this._totalMilliseconds;
    }

    set totalMilliseconds(msec: number) {
        this._setTotalMilliseconds(msec);
    }
}
