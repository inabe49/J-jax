/// <reference path="../../typings/power-assert/power-assert.d.ts" />
/// <reference path="../../typings/mocha/mocha.d.ts" />

import assert from "power-assert";
import * as jax from "../../src/jax";



describe("DateTime", () => {
    it("isSameDay", () => {
        assert.ok(jax.DateTime.isSameDay(new Date("2015-11-24T22:16:08.2098312+09:00"), new Date("2015-11-24T22:16:08.2098312+09:00")), "isSameDay");


        assert.ok(!jax.DateTime.isSameDay(new Date("2015-11-25T22:16:08.2098312+09:00"), new Date("2015-11-24T22:16:08.2098312+09:00")), "isSameDay");
    });

    it("getModifiedJulianDate", () => {
        assert.equal(1, jax.DateTime.getModifiedJulianDate(new Date(2000, 1, 2)) - jax.DateTime.getModifiedJulianDate(new Date(2000, 1, 1)));
        assert.equal(365, jax.DateTime.getModifiedJulianDate(new Date(2002, 1, 1)) - jax.DateTime.getModifiedJulianDate(new Date(2001, 1, 1)));

        assert.equal(54101, jax.DateTime.getModifiedJulianDate(new Date(2007, 1, 1)));

        assert.equal(51544, jax.DateTime.getModifiedJulianDate(new Date(2000, 1, 1)));

    });
});
