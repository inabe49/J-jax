/// <reference path="../../typings/power-assert/power-assert.d.ts" />
/// <reference path="../../typings/mocha/mocha.d.ts" />

import assert from "power-assert";
import { Option } from "../../src/jax";


describe("Option", () => {
    it("Retrun", () => {
        assert.ok(Option.some(0).isDefined);
        assert.ok(!Option.some(0).isEmpty);
    });

    it("Fail", () => {
        assert.ok(Option.fail<number>().isEmpty);
        assert.ok(!Option.fail<number>().isDefined);
    });

    it("getOrElse", () => {
        assert.ok(Option.some(true).getOrElse(false));
    });
});
