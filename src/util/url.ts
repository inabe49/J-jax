export interface Url {
    url?: string;
    private _query: {[key: string]: string};

    private _scheme: string;
    private _user: string;
    private _password: string;
    private _host: string;
    private _port: number;
    private _path: string;
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


export class Url {
    private _url: string;
    private _query: {[key: string]: string};

    private _scheme: string;
    private _user: string;
    private _password: string;
    private _host: string;
    private _port: number;
    private _path: string;


    constructor(url: string) {
        this._url = url;

        this._query = getQueryFromUrl(url);
    }


    get url(): string {
        return this._url;
    }


    get query(): {[key: string]: string} {
        return this._query;
    }

    get scheme(): string {
        return this._scheme;
    }

    get user(): string {
        return this._user;
    }

    get password(): string {
        return this._password;
    }

    get host(): string {
        return this._host;
    }

    get port(): number {
        return this._port;
    }

    get path(): string {
        return this._path;
    }
}
