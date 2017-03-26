import * as assert from "power-assert";
import { TimeSpan, getTimeSpan, getTotalMilliseconds, getTotalSeconds, getTotalMinutes, getTotalHours, getTotalDays } from "../../src/utils/timespan";



describe("TimeSpan", () => {
    it("getTimeSpan", () => {
        const ts1 = getTimeSpan(new Date("2016-01-01T22:16:08.2098312+09:00"), new Date("2015-11-24T22:16:08.2098312+09:00"));
    });
});
