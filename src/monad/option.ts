

export interface Option<A> {
    getOrElse(def: A): A;

    flatMap<B>(f: (a: A) => Option<B>): Option<B>;

    isDefined(): boolean;
    isEmpty(): boolean;

    map<B>(f: (a: A) => B): Option<B>;
}


class _Some<A> implements Option<A> {
    constructor(public value: A) { }

    getOrElse(def: A): A {
        return this.value;
    }

    flatMap<B>(f: (a: A) => Option<B>): Option<B> {
        return f(this.value);
    }

    isDefined(): boolean {
        return true;
    }

    isEmpty(): boolean {
        return false;
    }

    map<B>(f: (a: A) => B): Option<B> {
        return new _Some<B>(f(this.value));
    }
}



export interface IOption<A> {
    map<B>(callback: (a: A) => B): IOption<B>;
    flatMap<B>(callback: (a: A) => IOption<B>): IOption<B>;

    getOrElse(def: A): A;

    isEmpty: boolean;
    isDefined: boolean;
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

    get isDefined(): boolean {
        return true;
    }

    get isEmpty(): boolean {
        return false;
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

    get isDefined(): boolean {
        return false;
    }

    get isEmpty(): boolean {
        return true;
    }
}


export function some<A>(value: A): IOption<A> {
    return new Some<A>(value);
}

export function fail<A>(): IOption<A> {
    return new None<A>();
}
