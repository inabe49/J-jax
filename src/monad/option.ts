

export function some<A>(value: A): Option<A> {
    return new Some<A>(value);
}

export function fail<A>(): Option<A> {
    return new None<A>();
}

export interface Option<A> {
    map<B>(callback: (a: A) => B): Option<B>;
    flatMap<B>(callback: (a: A) => Option<B>): Option<B>;

    getOrElse(def: A): A;

    isEmpty: boolean;
    isDefined: boolean;
}



export class Some<A> implements Option<A> {
    constructor(public value: A) {
    }

    public map<B>(callback: (a: A) => B): Option<B> {
        return new Some<B>(callback(this.value));
    }

    public flatMap<B>(callback: (a: A) => Option<B>): Option<B> {
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


export class None<A> implements Option<A> {
    constructor() {
    }

    public map<B>(callback: (a: A) => B): Option<B> {
        return new None<B>();
    }

    public flatMap<B>(callback: (a: A) => Option<B>): Option<B> {
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
