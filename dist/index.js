var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  trackComponent: () => trackComponent,
  version: () => version
});
module.exports = __toCommonJS(src_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  trackComponent,
  version
});
//# sourceMappingURL=index.js.map