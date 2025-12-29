"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function AdminPage() {
  useEffect(() => {
    // Include the identity widget script
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
      document.head.appendChild(script);
    }
  }, []);

  return (
    <>
      <Script
        src="https://unpkg.com/decap-cms@^3.1.2/dist/decap-cms.js"
        strategy="afterInteractive"
      />
      {/* Decap CMS relies on this ID or style to mount */}
      <div id="nc-root"></div>
    </>
  );
}
