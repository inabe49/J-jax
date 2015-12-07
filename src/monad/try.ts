import * as option from "./option";


export module Try {
    export function Return<A>(value: A): ITry<A> {
        return new Success<A>(value);
    }

    export function Fail<A>(ex: any): ITry<A> {
        return new Failure<A>(ex);
    }

    export function Execute<A>(f: () => A): ITry<A> {
        try {
            return new Success<A>(f());
        } catch (e) {
            return new Failure<A>(e);
        }
    }
}


export interface ITry<A> {
    map<B>(callback: (a: A) => B): ITry<B>;
    flatMap<B>(callback: (a: A) => ITry<B>): ITry<B>;

    getOrElse(def: A): A;

    isSuccess: boolean;
    isFailure: boolean;

    toOption(): option.IOption<A>;
    toException(): option.IOption<any>;
}


export class Success<A> implements ITry<A> {
    constructor(public value: A) {
    }


    public map<B>(callback: (a: A) => B): ITry<B> {
        return new Success<B>(callback(this.value));
    }

    public flatMap<B>(callback: (a: A) => ITry<B>): ITry<B> {
        return callback(this.value);
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

    public toOption(): option.IOption<A> {
        return option.Option.Retrun(this.value);
    }

    public toException(): option.IOption<A> {
        return option.Option.Fail<A>();
    }
}


export class Failure<A> implements ITry<A> {
    constructor(public exception: any) {
    }

    public map<B>(callback: (a: A) => B): ITry<B> {
        return new Failure<B>(this.exception);
    }

    public flatMap<B>(callback: (a: A) => ITry<B>): ITry<B> {
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

    public toOption(): option.IOption<A> {
        return option.Option.Fail<A>();
    }

    public toException(): option.IOption<A> {
        return option.Option.Retrun(this.exception);
    }
}
