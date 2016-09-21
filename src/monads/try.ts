import { Option, Some, None } from "./option";


export interface Try<A> {
    map<B>(callback: (a: A) => B): Try<B>;
    flatMap<B>(callback: (a: A) => Try<B>): Try<B>;

    getOrElse(def: A): A;

    isSuccess(): boolean;
    isFailure(): boolean;

    toOption(): Option<A>;
    toException(): Option<any>;
}


class _Success<A> implements Try<A> {
    constructor(public value: A) {
    }


    public map<B>(callback: (a: A) => B): Try<B> {
        try {
            const result = callback(this.value);

            return new _Success<B>(result);
        }
        catch (e) {
            return new _Failure<B>(e);
        }
    }

    public flatMap<B>(callback: (a: A) => Try<B>): Try<B> {
        try {
            return callback(this.value);
        }
        catch (e) {
            return new _Failure<B>(e);
        }
    }

    public getOrElse(def: A): A {
        return this.value;
    }

    isSuccess(): boolean {
        return true;
    }

    isFailure(): boolean {
        return false;
    }

    public toOption(): Option<A> {
        return Some(this.value);
    }

    public toException(): Option<A> {
        return None<A>();
    }
}


class _Failure<A> implements Try<A> {
    constructor(public exception: any) {
    }

    public map<B>(callback: (a: A) => B): Try<B> {
        return new _Failure<B>(this.exception);
    }

    public flatMap<B>(callback: (a: A) => Try<B>): Try<B> {
        return new _Failure<B>(this.exception);
    }

    public getOrElse(def: A): A {
        return def;
    }

    isSuccess(): boolean {
        return false;
    }

    isFailure(): boolean {
        return true;
    }

    public toOption(): Option<A> {
        return None<A>();
    }

    public toException(): Option<A> {
        return Some(this.exception);
    }
}


export function Success<A>(value: A): Try<A> {
    return new _Success<A>(value);
}

export function Failure<A>(ex: any): Try<A> {
    return new _Failure<A>(ex);
}

export function Execute<A>(f: () => A): Try<A> {
    try {
        return new _Success<A>(f());
    } catch (e) {
        return new _Failure<A>(e);
    }
}
