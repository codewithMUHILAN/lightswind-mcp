"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.version = void 0;
exports.trackComponent = trackComponent;
// Lightswind UI entry point
exports.version = "1.2.6";
function trackComponent(name) {
    if (typeof window === "undefined")
        return;
    try {
        const hostname = window.location.hostname;
        // Ignore development/local traffic
        if (!hostname || hostname === "localhost" || hostname === "127.0.0.1" || hostname.endsWith(".local")) {
            return;
        }
        // Check opt-out
        if (window.LIGHTSWIND_NO_TELEMETRY || navigator.doNotTrack === "1") {
            return;
        }
        const key = `lw_tel_${name}`;
        const lastSent = window.localStorage.getItem(key);
        const now = Date.now();
        // 7 days rate limit per component
        if (!lastSent || now - parseInt(lastSent, 10) > 604800000) {
            const url = "https://pro.lightswind.com/api/npm-telemetry";
            const body = JSON.stringify({ c: name, d: hostname });
            if (navigator.sendBeacon) {
                navigator.sendBeacon(url, new Blob([body], { type: "application/json" }));
            }
            else {
                fetch(url, {
                    method: "POST",
                    body: body,
                    mode: "no-cors",
                    headers: { "Content-Type": "application/json" }
                }).catch(() => { });
            }
            window.localStorage.setItem(key, now.toString());
        }
    }
    catch (e) { }
}
//# sourceMappingURL=index.js.map