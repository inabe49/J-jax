

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


class _None<A> implements Option<A> {
    constructor() { }

    getOrElse(def: A): A {
        return def;
    }

    flatMap<B>(f: (a: A) => Option<B>): Option<B> {
        return new _None<B>();
    }

    isDefined(): boolean {
        return false;
    }

    isEmpty(): boolean {
        return true;
    }

    map<B>(f: (a: A) => B): Option<B> {
        return new _None<B>();
    }
}


export function Some<A>(value: A): Option<A> {
    return new _Some<A>(value);
}


export function None<A>(): Option<A> {
    return new _None<A>();
}
