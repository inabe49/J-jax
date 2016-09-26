/// <reference path="../../typings/power-assert/power-assert.d.ts" />
/// <reference path="../../typings/mocha/mocha.d.ts" />

import assert from "power-assert";
import { isNumber, isString, isBoolean, isFunction, isDate, isNone } from "../../src/jax";
import { isArray, isEqualArray, isObject, isEmptyObject, isEqualObject } from "../../src/jax";

describe("isAny", () => {
    it("isString", () => {
        assert.ok(!isString(undefined), "isString");
        assert.ok(!isString([]), "isString");
        assert.ok(!isString({}), "isString");
        assert.ok(!isString(100), "isString");

        assert.ok(isString(""), "isString");
        assert.ok(isString("aaa"), "isString");
        assert.ok(isString("エイラーニャ"), "isString");
    });


    it("isFunction", () => {
        assert.ok(!isFunction(undefined), "isFunction");
        assert.ok(!isFunction([]), "isFunction");
        assert.ok(!isFunction({}), "isFunction");
        assert.ok(!isFunction(100), "isFunction");
        assert.ok(!isFunction("aaa"), "isFunction");

        assert.ok(isFunction(function(){ return; }), "isFunction");
    });


    it("isArray", () => {
        assert.ok(!isArray(undefined), "isArray");
        assert.ok(!isArray({}), "isArray");
        assert.ok(!isArray(null), "isArray");
        assert.ok(!isArray(100), "isArray");
        assert.ok(!isArray(1.0), "isArray");
        assert.ok(!isArray("aaa"), "isArray");

        assert.ok(isArray([]), "isArray");
        assert.ok(isArray([1, 2, 3]), "isArray");
        assert.ok(isArray([1, 2, "aaaa"]), "isArray");
    });


    it("isDate", () => {
        assert.ok(!isDate(undefined));
        assert.ok(!isDate(null));
        assert.ok(!isDate(0));
        assert.ok(!isDate(1));
        assert.ok(!isDate(1.0));
        assert.ok(!isDate({}));
        assert.ok(!isDate("string"));

        assert.ok(isDate(new Date()));
    });




    it("isEqualArray", () => {
        assert.ok(!isEqualArray("", ""), "equalArray");
        assert.ok(!isEqualArray(1, 1), "equalArray");
        assert.ok(!isEqualArray(null, null), "equalArray");
        assert.ok(!isEqualArray([], ""), "equalArray");
        assert.ok(!isEqualArray("", []), "equalArray");

        assert.ok(!isEqualArray([1, 2, 3], [1, 2]), "equalArray");
        assert.ok(!isEqualArray([1, 2, 3], [1, 2, 4]), "equalArray");
        assert.ok(!isEqualArray([], [1]), "equalArray");
        assert.ok(!isEqualArray([1], []), "equalArray");

        assert.ok(isEqualArray([], []), "equalArray");
        assert.ok(isEqualArray([1, 2], [1, 2]), "equalArray");
        assert.ok(isEqualArray([1, 2, 3], [1, 2, 3]), "equalArray");
    });


    it("isNone", () => {
        assert.ok(isNone(undefined));
        assert.ok(isNone(null));

        assert.ok(!isNone(""));
        assert.ok(!isNone(0));
        assert.ok(!isNone({}));
    });

    it("isBoolean", () => {
        assert.ok(isBoolean(true));
        assert.ok(isBoolean(false));

        assert.ok(!isBoolean(undefined));
        assert.ok(!isBoolean(null));
    });


    it("isNumber", () => {
        assert.ok(isNumber(0));
        assert.ok(isNumber(1));

        assert.ok(!isNumber(undefined));
        assert.ok(!isNumber(null));
        assert.ok(!isNumber(""));
        assert.ok(!isNumber({}));
        assert.ok(!isNumber([]));
    });


    it("isObject", () => {
        assert.ok(isObject({}));
    });

});
