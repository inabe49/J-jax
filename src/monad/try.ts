import * as option from "./option";


export interface Try<A> {
    map<B>(callback: (a: A) => B): Try<B>;
    flatMap<B>(callback: (a: A) => Try<B>): Try<B>;

    getOrElse(def: A): A;

    isSuccess: boolean;
    isFailure: boolean;

    toOption(): option.Option<A>;
    toException(): option.Option<any>;
}


export function success<A>(value: A): Try<A> {
    return new Success<A>(value);
}

export function fail<A>(ex: any): Try<A> {
    return new Failure<A>(ex);
}

export function execute<A>(f: () => A): Try<A> {
    try {
        return new Success<A>(f());
    } catch (e) {
        return new Failure<A>(e);
    }
}


export class Success<A> implements Try<A> {
    constructor(public value: A) {
    }


    public map<B>(callback: (a: A) => B): Try<B> {
        try {
            const result = callback(this.value);

            return new Success<B>(result);
        }
        catch (e) {
            return new Failure<B>(e);
        }
    }

    public flatMap<B>(callback: (a: A) => Try<B>): Try<B> {
        try {
            return callback(this.value);
        }
        catch (e) {
            return new Failure<B>(e);
        }
    }

    public getOrElse(def: A): A {
        return this.value;
    }

    get isSuccess(): boolean {
        return true;
    }

    get isFailure(): boolean {
        return false;
    }

    public toOption(): option.Option<A> {
        return option.some(this.value);
    }

    public toException(): option.Option<A> {
        return option.fail<A>();
    }
}


export class Failure<A> implements Try<A> {
    constructor(public exception: any) {
    }

    public map<B>(callback: (a: A) => B): Try<B> {
        return new Failure<B>(this.exception);
    }

    public flatMap<B>(callback: (a: A) => Try<B>): Try<B> {
        return new Failure<B>(this.exception);
    }

    public getOrElse(def: A): A {
        return def;
    }

    get isSuccess(): boolean {
        return false;
    }

    get isFailure(): boolean {
        return true;
    }

    public toOption(): option.Option<A> {
        return option.fail<A>();
    }

    public toException(): option.Option<A> {
        return option.some(this.exception);
    }
}
