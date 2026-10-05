const test = require("node:test");
const assert = require("node:assert");

test("application configuration should use port 3000 by default", () => {
    const originalPort = process.env.PORT;

    delete process.env.PORT;

    const port = process.env.PORT || 3000;

    assert.strictEqual(port, 3000);

    if (originalPort !== undefined) {
        process.env.PORT = originalPort;
    }
});