
export function getQueryFromUrl(url: string): {[key: string]: string} {
    const query_str: string = (url.split("?")[1] || "").split("#")[0];
    if (!query_str) {
        return {};
    }

    let query_temp = query_str.split("&");
    let query: {[key: string]: string} = {};
    let key = "";
    let value = "";

    for (let i = 0; i < query_temp.length; i++) {
        const temps = query_temp[i].split("=");

        if (temps[0]) {
            key = decodeURIComponent(temps[0]);
            value = decodeURIComponent((temps[1] || "").replace(/\+/g, " "));
            query[key] = value;
        }
    }

    return query;
}





export interface Url {
    query?: {[key: string]: string};

    scheme?: string;
    user?: string;
    password?: string;
    host?: string;
    port?: number;
    path?: string;
}


export function parseUrl(url: string): Url {
    return null;
}


export function toUrlString(url: Url): string {
    return null;
}
