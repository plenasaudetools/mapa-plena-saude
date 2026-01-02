import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

async function hardRefreshIfNewDeployDetected() {
  if (!import.meta.env.PROD) return;

  // Avoid reload loops
  const onceKey = "__plena_hard_refresh_once";
  if (sessionStorage.getItem(onceKey) === "1") return;

  try {
    const currentBundlePath = new URL(import.meta.url).pathname;

    // Bypass caches by varying the query string
    const res = await fetch(`${import.meta.env.BASE_URL}?__v=${Date.now()}`, { cache: "no-store" });
    if (!res.ok) return;

    const html = await res.text();

    // Prefer the actual entry script (more reliable than matching any asset link)
    const scriptSrcMatch = html.match(/<script[^>]*type="module"[^>]*src="([^"]+)"/i);
    const latestBundlePath = scriptSrcMatch?.[1] ?? null;

    if (latestBundlePath && !currentBundlePath.includes(latestBundlePath)) {
      sessionStorage.setItem(onceKey, "1");
      const url = new URL(window.location.href);
      url.searchParams.set("__updated", String(Date.now()));
      window.location.replace(url.toString());
    }
  } catch {
    // If anything fails, do nothing (better UX than an error loop)
  }
}

hardRefreshIfNewDeployDetected().finally(() => {
  createRoot(document.getElementById("root")!).render(<App />);
});

