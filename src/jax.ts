import { isNumber, isBoolean, isString, isFunction, isNone } from "./utils/type";
import { isArray, isEqualArray } from "./utils/type";
import { isObject, isEmptyObject, isEqualObject } from "./utils/type";


import { Option, Some, None } from "./monads/option";
import { Either, Left, LeftProjection, Right } from "./monads/either";

import { Try } from "./monads/try";
import { Future } from "./monads/future";

import { Callback } from "./utils/callback";
import { getModifiedJulianDate, isSameDate } from "./utils/datetime";
import { TimeSpan, getTimeSpan, getTotalMilliseconds, getTotalSeconds, getTotalMinutes, getTotalHours, getTotalDays } from "./utils/timespan";

import { Url, parseUrl, toUrlString } from "./utils/url";


export {
    isNumber, isBoolean, isString, isFunction, isNone,
    isArray, isEqualArray,
    isObject, isEmptyObject, isEqualObject,

    Option, Some, None,
    Either, Left, LeftProjection, Right,
    Try,
    Future,

    Callback,
    getModifiedJulianDate, isSameDate,
    TimeSpan, getTimeSpan, getTotalMilliseconds, getTotalSeconds, getTotalMinutes, getTotalHours, getTotalDays,

    Url, parseUrl, toUrlString,
}
