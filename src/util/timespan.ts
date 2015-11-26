export class TimeSpan {
    private totalMsec: number;

    private days: number;
    private hours: number;
    private minutes: number;
    private seconds: number;
    private milliseconds: number;


    constructor(totalMsec: number) {
        this.totalMsec = totalMsec;

        var temp = totalMsec;
        this.milliseconds = temp % 1000;
        temp = (temp - this.milliseconds) / 1000;

        this.seconds = temp % 60;
        temp = (temp - this.seconds) / 60;

        this.minutes = temp % 60;
        temp = (temp - this.minutes) / 60;

        this.hours = temp % 24;
        temp = (temp - this.hours) / 24;

        this.days = temp;
    }


    public Days(): number {
        return this.days;
    }

    public Hours(): number {
        return this.hours;
    }

    public Minutes(): number {
        return this.minutes;
    }

    public Seconds(): number {
        return this.seconds;
    }

    public Milliseconds(): number {
        return this.milliseconds;
    }




    public TotalDays(): number {
        return this.totalMsec / (24 * 60 * 60 * 1000);
    }

    public TotalHours(): number {
        return this.totalMsec / (60 * 60 * 1000);
    }

    public TotalMinutes(): number {
        return this.totalMsec / (60 * 1000);
    }

    public TotalSeconds(): number {
        return this.totalMsec / 1000;
    }

    public TotalMilliseconds(): number {
        return this.totalMsec;
    }

}
