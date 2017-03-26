import * as assert from "power-assert";
import { Url, parseUrl, toUrlString } from "../../src/jax";
import { getQueryFromUrl } from "../../src/utils/url";

describe("url", () => {
    it("getQueryFromUrl", () => {
        assert.deepEqual({v : "ooMQdcTh3Y8"}, getQueryFromUrl("https://www.youtube.com/watch?v=ooMQdcTh3Y8"));
    });
});
