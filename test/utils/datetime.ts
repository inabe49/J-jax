import * as assert from "power-assert";
import { getModifiedJulianDate, isSameDate } from "../../src/jax";



describe("DateTime", () => {
    it("isSameDate", () => {
        assert.ok(isSameDate(new Date("2015-11-24T22:16:08.2098312+09:00"), new Date("2015-11-24T22:16:08.2098312+09:00")));


        assert.ok(!isSameDate(new Date("2015-11-25T22:16:08.2098312+09:00"), new Date("2015-11-24T22:16:08.2098312+09:00")));
    });

    it("getModifiedJulianDate", () => {
        assert.equal(1, getModifiedJulianDate(new Date(2000, 1, 2)) - getModifiedJulianDate(new Date(2000, 1, 1)));
        assert.equal(365, getModifiedJulianDate(new Date(2002, 1, 1)) - getModifiedJulianDate(new Date(2001, 1, 1)));

        assert.equal(54101, getModifiedJulianDate(new Date(2007, 1, 1)));

        assert.equal(51544, getModifiedJulianDate(new Date(2000, 1, 1)));

    });
});
