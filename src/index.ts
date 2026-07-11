// Lightswind UI entry point
export const version = "1.2.6";

export function trackComponent(name: string) {
  if (typeof window === "undefined") return;
  
  try {
    const hostname = window.location.hostname;
    // Ignore development/local traffic
    if (!hostname || hostname === "localhost" || hostname === "127.0.0.1" || hostname.endsWith(".local")) {
      return;
    }

    // Check opt-out
    if ((window as any).LIGHTSWIND_NO_TELEMETRY || navigator.doNotTrack === "1") {
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
      } else {
        fetch(url, {
          method: "POST",
          body: body,
          mode: "no-cors",
          headers: { "Content-Type": "application/json" }
        }).catch(() => {});
      }
      window.localStorage.setItem(key, now.toString());
    }
  } catch (e) {}
}
