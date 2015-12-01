/// <reference path="../typings/power-assert/power-assert.d.ts" />
/// <reference path="../typings/mocha/mocha.d.ts" />

import assert from "power-assert";
import * as jax from "../src/jax";


describe("isAny", () => {
    it("isString", () => {
        assert.ok(!jax.isString(undefined), "isString");
        assert.ok(!jax.isString([]), "isString");
        assert.ok(!jax.isString({}), "isString");
        assert.ok(!jax.isString(100), "isString");

        assert.ok(jax.isString(""), "isString");
        assert.ok(jax.isString("aaa"), "isString");
        assert.ok(jax.isString("エイラーニャ"), "isString");
    });


    it("isFunction", () => {
        assert.ok(!jax.isFunction(undefined), "isFunction");
        assert.ok(!jax.isFunction([]), "isFunction");
        assert.ok(!jax.isFunction({}), "isFunction");
        assert.ok(!jax.isFunction(100), "isFunction");
        assert.ok(!jax.isFunction("aaa"), "isFunction");

        assert.ok(jax.isFunction(function(){ return; }), "isFunction");
    });


    it("isArray", () => {
        assert.ok(!jax.isArray(undefined), "isArray");
        assert.ok(!jax.isArray({}), "isArray");
        assert.ok(!jax.isArray(null), "isArray");
        assert.ok(!jax.isArray(100), "isArray");
        assert.ok(!jax.isArray(1.0), "isArray");
        assert.ok(!jax.isArray("aaa"), "isArray");

        assert.ok(jax.isArray([]), "isArray");
        assert.ok(jax.isArray([1, 2, 3]), "isArray");
        assert.ok(jax.isArray([1, 2, "aaaa"]), "isArray");
    });




    it("isEqualArray", () => {
        assert.ok(!jax.isEqualArray("", ""), "equalArray");
        assert.ok(!jax.isEqualArray(1, 1), "equalArray");
        assert.ok(!jax.isEqualArray(null, null), "equalArray");
        assert.ok(!jax.isEqualArray([], ""), "equalArray");
        assert.ok(!jax.isEqualArray("", []), "equalArray");

        assert.ok(!jax.isEqualArray([1, 2, 3], [1, 2]), "equalArray");
        assert.ok(!jax.isEqualArray([1, 2, 3], [1, 2, 4]), "equalArray");
        assert.ok(!jax.isEqualArray([], [1]), "equalArray");
        assert.ok(!jax.isEqualArray([1], []), "equalArray");

        assert.ok(jax.isEqualArray([], []), "equalArray");
        assert.ok(jax.isEqualArray([1, 2], [1, 2]), "equalArray");
        assert.ok(jax.isEqualArray([1, 2, 3], [1, 2, 3]), "equalArray");
    });


    it("isNone", () => {
        assert.ok(jax.isNone(undefined));
        assert.ok(jax.isNone(null));

        assert.ok(!jax.isNone(""));
        assert.ok(!jax.isNone(0));
        assert.ok(!jax.isNone({}));
    });

    it("isBoolean", () => {
        assert.ok(jax.isBoolean(true));
        assert.ok(jax.isBoolean(false));

        assert.ok(!jax.isBoolean(undefined));
        assert.ok(!jax.isBoolean(null));
    });


    it("isNumber", () => {
        assert.ok(jax.isNumber(0));
        assert.ok(jax.isNumber(1));

        assert.ok(!jax.isNumber(undefined));
        assert.ok(!jax.isNumber(null));
        assert.ok(!jax.isNumber(""));
        assert.ok(!jax.isNumber({}));
        assert.ok(!jax.isNumber([]));
    });


    it("isObject", () => {
        assert.ok(jax.isObject({}));
    });

});
