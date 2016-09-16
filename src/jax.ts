import { isNumber, isBoolean, isString, isFunction, isNone } from "./util/type";
import { isArray, isEqualArray } from "./util/type";
import { isObject, isEmptyObject, isEqualObject } from "./util/type";


import { IOption } from "./monad/option";
import { Either, Left, LeftProjection, Right } from "./monad/either";

import { Try } from "./monad/try";
import { Future } from "./monad/future";

import { Callback } from "./util/callback";
import { DateTime } from "./util/datetime";
import { TimeSpan } from "./util/timespan";


export {
    isNumber, isBoolean, isString, isFunction, isNone,
    isArray, isEqualArray,
    isObject, isEmptyObject, isEqualObject,

    IOption,
    Either, Left, LeftProjection, Right,
    Try,
    Future,

    Callback,
    DateTime,
    TimeSpan,
}
