import * as callback from "./util/callback";
import * as _url from "./util/url";
import * as _type from "./util/type";

import * as _timespan from "./util/timespan";
import * as _datetime from "./util/datetime";


import * as _option from "./monad/option";
import * as _try from "./monad/try";
import * as _either from "./monad/either";
import * as _future from "./monad/future";



export const isString =  _type.isString;
export const isNumber = _type.isNumber;
export const isArray = _type.isArray;
export const isFunction = _type.isFunction;
export const isObject = _type.isObject;
export const isEmptyObject = _type.isEmptyObject;

export const isNone = _type.isNone;
export const isBoolean = _type.isBoolean;
export const isEqualArray = _type.isEqualArray;


export const Callback = callback.Callback;

export const url = _url;

export const TimeSpan = _timespan.TimeSpan;
export const DateTime = _datetime.DateTime;


export const Option = _option;
export const Try = _try;
export const Either = _either;
