import * as _try from "./try";


export interface IFutureAwaiter<A> {
    isCompleted(): boolean;

    onCompleted(callback: (a: _try.ITry<A>) => void): void;

    setResult(result: _try.ITry<A>): void;
}

export class FutureAwaiter<A> implements IFutureAwaiter<A> {
    private _hasCompleted: boolean;
    private _result: _try.ITry<A>;
    private _callbacks: { (a: _try.ITry<A>): void; }[];


    constructor() {
        this._hasCompleted = false;
        this._callbacks = [];
    }

    public isCompleted(): boolean {
        return this._hasCompleted;
    }

    public onCompleted(callback: (a: _try.ITry<A>)=> void): void {
        if (this._hasCompleted) {
            callback(this._result);
        } else {
            this._callbacks.push(callback);
        }
    }

    public setResult(result: _try.ITry<A>): void {
        if (this._hasCompleted) {
        } else {
            this._hasCompleted = true;
            this._result = result;

            let len = this._callbacks.length;
            for (let i = 0; i < len; i++) {
                this._callbacks[i](this._result);
            }
        }
    }
}



export interface IFuture<A> {
    map<B>(f: (a: A) => B): IFuture<B>;
    flatMap<B>(callback: (a: A) => IFuture<B>): IFuture<B>;

    getAwaiter(): IFutureAwaiter<A>;
}



export class Future<A> implements IFuture<A> {
    private _awaiter: IFutureAwaiter<A>;

    constructor(awaiter: IFutureAwaiter<A>) {
        this._awaiter = awaiter;
    }


    public static fromCallback<A>(): Future<A> {
        // chrome.windows.getAll(callback: (wnds: chrome.windows.Window[]) => void);
        return null;
    }

    public map<B>(f: (a:A) => B): Future<B> {
        let result_awaiter = new FutureAwaiter<B>();
        this._awaiter.onCompleted((reseult: _try.ITry<A>) => {
            result_awaiter.setResult(reseult.map(f));
        });

        return new Future<B>(result_awaiter);
    }


    public flatMap<B>(f: (a: A) => Future<B>): Future<B> {
        let a = new FutureAwaiter<B>();

        this._awaiter.onCompleted((result: _try.ITry<A>) => {
        });


        return new Future<B>(a);
    }


    private setResult(result: _try.ITry<A>): void {

    }

    public getAwaiter(): IFutureAwaiter<A> {
        return null;
    }
}
