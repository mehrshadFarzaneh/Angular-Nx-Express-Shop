"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForPortOpen = void 0;
const net = require("net");
function waitForPortOpen(port, options = {}) {
    const allowedErrorCodes = ['ECONNREFUSED', 'ECONNRESET'];
    return new Promise((resolve, reject) => {
        const checkPort = (retries) => {
            var _a, _b;
            if (retries === void 0) { retries = (_a = options.retries) !== null && _a !== void 0 ? _a : 120; }
            const client = new net.Socket();
            const cleanupClient = () => {
                client.removeAllListeners('connect');
                client.removeAllListeners('error');
                client.end();
                client.destroy();
                client.unref();
            };
            client.once('connect', () => {
                cleanupClient();
                resolve();
            });
            client.once('error', (err) => {
                var _a;
                if (retries === 0 || !allowedErrorCodes.includes(err['code'])) {
                    cleanupClient();
                    reject(err);
                }
                else {
                    setTimeout(() => checkPort(retries - 1), (_a = options.retryDelay) !== null && _a !== void 0 ? _a : 1000);
                }
            });
            // Node will use IPv6 if it is available, but this can cause issues if the server is only listening on IPv4.
            // Hard-coding to look on 127.0.0.1 to avoid using the IPv6 loopback address "::1".
            client.connect({ port, host: (_b = options.host) !== null && _b !== void 0 ? _b : '127.0.0.1' });
        };
        checkPort();
    });
}
exports.waitForPortOpen = waitForPortOpen;
