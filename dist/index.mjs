// src/index.ts
var version = "3.2.5";
var TELEMETRY_URL = "https://pro.lightswind.com/api/npm-telemetry";
var RATE_LIMIT_MS = 6048e5;
function isTelemetryAllowed() {
  if (typeof window === "undefined") return false;
  const hostname = window.location.hostname;
  if (!hostname || hostname === "localhost" || hostname === "127.0.0.1" || hostname.endsWith(".local")) {
    return false;
  }
  if (window.LIGHTSWIND_NO_TELEMETRY || navigator.doNotTrack === "1") {
    return false;
  }
  return true;
}
function sendTelemetry(storageKey, component) {
  try {
    if (!isTelemetryAllowed()) return;
    const lastSent = window.localStorage.getItem(storageKey);
    const now = Date.now();
    if (!lastSent || now - parseInt(lastSent, 10) > RATE_LIMIT_MS) {
      const body = JSON.stringify({ c: component, d: window.location.hostname });
      if (navigator.sendBeacon) {
        navigator.sendBeacon(TELEMETRY_URL, new Blob([body], { type: "application/json" }));
      } else {
        fetch(TELEMETRY_URL, {
          method: "POST",
          body,
          mode: "no-cors",
          headers: { "Content-Type": "application/json" }
        }).catch(() => {
        });
      }
      window.localStorage.setItem(storageKey, now.toString());
    }
  } catch (e) {
  }
}
sendTelemetry("lw_telemetry_registered", "package-init");
function trackComponent(name) {
  sendTelemetry(`lw_tel_${name}`, name);
}
export {
  trackComponent,
  version
};
//# sourceMappingURL=index.mjs.map