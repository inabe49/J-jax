import * as option from "./monad/option";
import * as _try from "./monad/try";
import * as callback from "./util/callback";
import * as _date from "./util/date";
import * as _url from "./util/url";
import * as type from "./util/type";

export default {
    Option: option.Option,
    Try: _try.Try,
    Callback: callback.Callback,

    date: _date,
    url: _url,

    isString: type.isString,
    isNumber: type.isNumber,
    isArray: type.isArray,
    isFunction: type.isFunction,
    isObject: type.isObject,
    isEmptyObject: type.isEmptyObject,

    isNone: type.isNone,
    isBoolean: type.isBoolean,
    isEqualArray: type.isEqualArray
};
