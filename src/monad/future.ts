import _try = require("./try");


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
