

export class LeftProjection<L, R> {
    private _e: Either<L, R>;

    constructor(e: Either<L, R>) {
        this._e = e;
    }

    exists(): boolean {
        return this._e.isLeft();
    }

    flatMap<L2>(f: (l: L) => Either<L2, R>): Either<L2, R> {
        if (this._e.isLeft()) {
            return f((<_Left<L, R>>this._e).value);
        } else {
            return new _Right<L2, R>((<_Right<L, R>>this._e).value);
        }
    }

    get(): L {
        if (this._e.isLeft()) {
            return (<_Left<L, R>>this._e).value;
        } else {
            return null;
        }
    }

    getOrElse(or: () => L): L {
        if (this._e.isLeft()) {
            return (<_Left<L, R>>this._e).value;
        } else {
            return or();
        }
    }

    map<L2>(f: (l: L) => L2): Either<L2, R> {
        if (this._e.isLeft()) {
            return new _Left<L2, R>(f((<_Left<L, R>>this._e).value));
        } else {
            return new _Right<L2, R>((<_Right<L, R>>this._e).value);
        }
    }
}



export interface Either<L, R> {
    isLeft(): boolean;
    isRight(): boolean;

    left(): LeftProjection<L, R>;

    map<R2>(f: (r: R) => R2): Either<L, R2>;
    flatMap<R2>(f: (r: R) => Either<L, R2>): Either<L, R2>;

    swap(): Either<R, L>;
}


class _Left<L, R> implements Either<L, R> {
    value: L;


    constructor(l: L) {
        this.value = l;
    }

    isLeft(): boolean {
        return true;
    }

    isRight(): boolean {
        return false;
    }

    left(): LeftProjection<L, R> {
        return new LeftProjection<L, R>(this);
    }


    map<R2>(f: (r: R) => R2): Either<L, R2> {
        return new _Left<L, R2>(this.value);
    }

    flatMap<R2>(f: (r: R) => Either<L, R2>): Either<L, R2> {
        return new _Left<L, R2>(this.value);
    }

    swap(): Either<R, L> {
        return new _Right<R, L>(this.value);
    }
}


class _Right<L, R> implements Either<L, R> {
    value: R;

    constructor(r: R) {
        this.value = r;
    }

    isLeft(): boolean {
        return false;
    }

    isRight(): boolean {
        return true;
    }

    left(): LeftProjection<L, R> {
        return new LeftProjection<L, R>(this);
    }

    map<R2>(f: (r: R) => R2): Either<L, R2> {
        return new _Right<L, R2>(f(this.value));
    }

    flatMap<R2>(f: (r: R) => Either<L, R2>): Either<L, R2> {
        return f(this.value);
    }

    swap(): Either<R, L> {
        return new _Left<R, L>(this.value);
    }
}


export function Left<L, R>(l: L): Either<L, R> {
    return new _Left<L, R>(l);
}

export function Right<L, R>(r: R): Either<L, R> {
    return new _Right<L, R>(r);
}
