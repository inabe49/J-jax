import * as assert from "power-assert";
import { Option, Some, None } from "../../src/jax";


describe("Option", () => {
    it("Retrun", () => {
        assert.ok(Some(0).isDefined());
        assert.ok(!Some(0).isEmpty());
    });

    it("Fail", () => {
        assert.ok(None<number>().isEmpty());
        assert.ok(!None<number>().isDefined());
    });

    it("getOrElse", () => {
        assert.ok(Some(true).getOrElse(false));
    });
});
