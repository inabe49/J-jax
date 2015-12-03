import * as _try from "./try";


export interface IFutureAwaiter<A> {
    isCompleted: () => boolean;

    onCompleted: (callback: (a: A) => void) => void;
}

export interface IFuture<A> {
    map<B>(f: (a: A) => B): IFuture<B>;
    flatMap<B>(callback: (a: A) => IFuture<B>): IFuture<B>;

    getAwaiter: () => IFutureAwaiter<A>;
}


export class Future<A> {
    private _result: _try.ITry<A>;

    public static fromCallback<A>(): Future<A> {
        // chrome.windows.getAll(callback: (wnds: chrome.windows.Window[]) => void);
        return null;
    }

    public map<B>(callback: (a:A) => B): Future<B> {
        return null;
    }


    public flatMap<B>(callback: (a: A) => Future<B>): Future<B> {
        return null;
    }


    private setResult(result: _try.ITry<A>): void {

    }
}
