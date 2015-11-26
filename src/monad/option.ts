export module Option {
    export function Retrun<A>(value: A): IOption<A> {
        return new Some<A>(value);
    }

    export function Fail<A>(): IOption<A> {
        return new None<A>();
    }
}


export interface IOption<A> {
    map<B>(callback: (a: A) => B): IOption<B>;
    flatMap<B>(callback: (a: A) => IOption<B>): IOption<B>;

    getOrElse(def: A): A;
}



export class Some<A> implements IOption<A> {
    constructor(public value: A) {
    }

    public map<B>(callback: (a: A) => B): IOption<B> {
        return new Some<B>(callback(this.value));
    }

    public flatMap<B>(callback: (a: A) => IOption<B>): IOption<B> {
        return callback(this.value);
    }

    public getOrElse(def: A): A {
        return this.value;
    }
}


export class None<A> implements IOption<A> {
    constructor() {
    }

    public map<B>(callback: (a: A) => B): IOption<B> {
        return new None<B>();
    }

    public flatMap<B>(callback: (a: A) => IOption<B>): IOption<B> {
        return new None<B>();
    }

    public getOrElse(def: A): A {
        return def;
    }
}
