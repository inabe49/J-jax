/// <reference path="../../typings/power-assert/power-assert.d.ts" />
/// <reference path="../../typings/mocha/mocha.d.ts" />

import assert from "power-assert";
import jax from "../../src/jax";


describe("Option", () => {
    it("Retrun", () => {
        assert.ok(jax.Option.Retrun(0).isDefined);
        assert.ok(!jax.Option.Retrun(0).isEmpty);
    });

    it("Fail", () => {
        assert.ok(jax.Option.Fail<number>().isEmpty);
        assert.ok(!jax.Option.Fail<number>().isDefined);
    });

    it("getOrElse", () => {
        assert.ok(jax.Option.Retrun(true).getOrElse(false));
    });
});
