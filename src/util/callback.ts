interface ICallbackData {
    callback: (...args: any[])=>any;
    context?: any;
}


export class Callback {
    private _callbacks: ICallbackData[];
    private _fired: boolean;

    constructor() {
        this._callbacks = [];
        this._fired = false;
    }


    add(callback: (...args: any[])=>any, context?: any): void {
        this._callbacks.push({
            callback: callback,
            context: context
        });
    }


    fire(...args: any[]): void {
        var len: number = this._callbacks.length;
        var i: number;
        var c: ICallbackData;

        for (i = 0; i < len; i++) {
            c = this._callbacks[i];
            if (c.context) {
                c.callback.apply(c.context, args);
            } else {
                c.callback.apply(this, args);
            }
        }

        this._callbacks = [];
        this._fired = true;
    }


    hasFired(): boolean {
        return this._fired;
    }


    remove(callback?: (...args: any[])=>any): void {
        if (!callback) {
            this._callbacks = [];
            return;
        }

        var len: number = this._callbacks.length;
        var i: number;
        for (i = 0; i < len; i++) {
            if (this._callbacks[i].callback === callback) {
                this._callbacks.splice(i, 1);
            }
        }
    }
}
