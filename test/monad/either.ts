/// <reference path="../../typings/power-assert/power-assert.d.ts" />
/// <reference path="../../typings/mocha/mocha.d.ts" />

import assert from "power-assert";
import { Either, Left, Right } from "../../src/jax";


describe("Either", () => {
    it("Factories", () => {
        const l = Left<string, number>("a");
        const r = Right<string, number>(1);

        assert.ok(l.isLeft);
        assert.ok(!l.isRight);

        assert.ok(!r.isLeft);
        assert.ok(r.isRight);
    });
});
