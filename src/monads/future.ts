import { Try, Success, Failure, Execute } from "./try";
import { Callback } from "../util/callback";

export class FutureAwaiter<A> {
    private _hasCompleted: boolean;
    private _result: Try<A>;
    private _callbacks: { (a: Try<A>): void; }[];


    constructor() {
        this._hasCompleted = false;
        this._callbacks = [];
    }

    isCompleted(): boolean {
        return this._hasCompleted;
    }

    onCompleted(callback: (a: Try<A>) => void): void {
        if (this._hasCompleted) {
            callback(this._result);
        } else {
            this._callbacks.push(callback);
        }
    }

    setResult(result: Try<A>): void {
        if (this._hasCompleted) {
            // 既に答えがある場合は何もしない
            return;
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


export class Future<A> {
    private _awaiter: FutureAwaiter<A>;

    constructor(awaiter: FutureAwaiter<A>) {
        this._awaiter = awaiter;
    }


    public static fromCallback<A>(f: (trigger: (result: Try<A>) => void) => void): Future<A> {
        const awaiter = new FutureAwaiter<A>();

        f((result: Try<A>) => {
            awaiter.setResult(result);
        });

        return new Future<A>(awaiter);
    }


    public map<B>(f: (a: A) => B): Future<B> {
        let result_awaiter = new FutureAwaiter<B>();

        this._awaiter.onCompleted((reseult: Try<A>) => {
            result_awaiter.setResult(reseult.map(f));
        });

        return new Future<B>(result_awaiter);
    }


    public flatMap<B>(f: (a: A) => Future<B>): Future<B> {
        let a = new FutureAwaiter<B>();

        this._awaiter.onCompleted((result: Try<A>) => {
            if (result.isSuccess) {

                f(result.toOption().getOrElse(null))._awaiter.onCompleted((r: Try<B>) => {
                    a.setResult(r);
                });
            } else {
                a.setResult(Failure<B>(result.toException().getOrElse(null)));
            }
        });

        return new Future<B>(a);
    }
}
