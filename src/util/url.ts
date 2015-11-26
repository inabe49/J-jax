export class Url {
    private _url: string;
    private _query: {[key: string]: string};

    private _scheme: string;
    private _user: string;
    private _password: string;
    private _host: string;
    private _port: number;
    private _path: string;


    constructor(url?: string) {
        this._url = url;

        this._parse();
    }


    private _parse(): void {
        this._query = {};

        var query_str: string = (this._url.split("?")[1] || "").split("#")[0];
        if (!query_str)
            return;

        var query_temp = query_str.split("&");
        var key, value;

        for (var i: number = 0; i < query_temp.length; i++) {
            var temps = query_temp[i].split("=");
            if (temps[0]) {
                key = decodeURIComponent(temps[0]);
                value = decodeURIComponent((temps[1] || "").replace(/\+/g, " "));
                this._query[key] = value;
            }
        }
    }


    getQuery(): {[key: string]: string} {
        return this._query;
    }
}



export function getQueryFromUrl(url: string): {[key: string]: string} {
    var query_str: string = (url.split("?")[1] || "").split("#")[0];
    if (!query_str) {
        return {};
    }

    var query_temp = query_str.split("&");
    var query: {[key: string]: string} = {};
    var key = "";
    var value = "";

    for (var i = 0; i < query_temp.length; i++) {
        var temps = query_temp[i].split("=");

        if (temps[0]) {
            key = decodeURIComponent(temps[0]);
            value = decodeURIComponent((temps[1] || "").replace(/\+/g, " "));
            query[key] = value;
        }
    }

    return query;
}


export function get(params) {

}
