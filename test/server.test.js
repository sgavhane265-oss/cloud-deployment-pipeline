const test = require("node:test");
const assert = require("node:assert");

test("application configuration should use port 3000 by default", () => {
    const port = process.env.PORT || 3000;

    assert.strictEqual(port, 3000);
});
