

export interface TimeSpan {
    totalMilliseconds?: number;

    days?: number;
    hours: number;
    minutes?: number;
    seconds?: number;
    milliseconds?: number;
}


export function getTimeSpan(_to: Date, _from: Date): TimeSpan {
    const totalMilliseconds = _to.getTime() - _from.getTime();
    let temp: number = Math.abs(totalMilliseconds);

    const ms = temp % 1000;
    temp = (temp - ms) / 1000;

    const s = temp % 60;
    temp = (temp - s) / 60;

    const m = temp % 60;
    temp = (temp - m) / 60;

    const h = temp % 24;
    const d = (temp - h) / 24;

    if (0.0 < totalMilliseconds) {
        return {
            totalMilliseconds: totalMilliseconds,

            milliseconds: ms,
            seconds: s,
            minutes: m,
            hours: h,
            days: d,
        };
    } else {
        return {
            totalMilliseconds: totalMilliseconds,

            milliseconds: -1 * ms,
            seconds: -1 * s,
            minutes: -1 * m,
            hours: -1 * h,
            days: -1 * d,
        };
    }
}


export function getTotalMilliseconds(span: TimeSpan): number {
    return span.totalMilliseconds;
}


export function getTotalSeconds(span: TimeSpan): number {
    return span.totalMilliseconds / 1000;
}


export function getTotalMinutes(span: TimeSpan): number {
    return span.totalMilliseconds / (60 * 1000);
}


export function getTotalHours(span: TimeSpan): number {
    return span.totalMilliseconds / (60 * 60 * 1000);
}


export function getTotalDays(span: TimeSpan): number {
    return span.totalMilliseconds / (24 * 60 * 60 * 1000);
}
