interface CallbackItem<T> {
    context: any;
    callback: (arg: T) => void;
}


export class Callback<T> {
    private _items: CallbackItem<T>[];

    constructor() {
        this._items = [];
    }

    public fire(arg: T): void {
        for (let i = 0; i < this._items.length; i++) {
            this._items[i].callback.apply(this._items[i].context, [arg]);
        }
    }

    public add(context: any, callback: (arg: T) => void): () => void {
        const that: Callback<T> = this;
        const item: CallbackItem<T> = {
            context: context,
            callback: callback,
        };

        this._items.push(item);

        return () => {
            for (let i = 0; i < that._items.length; i++) {
                if (that._items[i] === item) {
                    that._items.splice(i, 1);
                }
            }
        };
    }
}
