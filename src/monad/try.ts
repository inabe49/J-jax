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
}
