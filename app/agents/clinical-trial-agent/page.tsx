"use client";

import { useEffect, useRef } from "react";

export default function ClinicalTrialAgentPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Advanced preloading and DNS optimization
    const preconnectLink = document.createElement("link");
    preconnectLink.rel = "preconnect";
    preconnectLink.href = "https://clinical-trial-agent-chi.vercel.app";
    preconnectLink.crossOrigin = "anonymous";
    document.head.appendChild(preconnectLink);

    const prefetchLink = document.createElement("link");
    prefetchLink.rel = "prefetch";
    prefetchLink.href =
      "https://clinical-trial-agent-chi.vercel.app/agents/clinical-trial-agent/";
    document.head.appendChild(prefetchLink);

    // DNS prefetch for faster resolution
    const dnsLink = document.createElement("link");
    dnsLink.rel = "dns-prefetch";
    dnsLink.href = "https://clinical-trial-agent-chi.vercel.app";
    document.head.appendChild(dnsLink);

    // Optimize iframe loading with visibility control
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      iframe.style.visibility = "hidden";
      iframe.style.opacity = "0";
      iframe.style.transition = "opacity 0.3s ease-in-out";

      const handleLoad = () => {
        iframe.style.visibility = "visible";
        iframe.style.opacity = "1";
      };

      const handleError = () => {
        console.warn("Clinical Trial Agent iframe failed to load");
        iframe.style.visibility = "visible";
        iframe.style.opacity = "1";
      };

      iframe.addEventListener("load", handleLoad);
      iframe.addEventListener("error", handleError);

      // Cleanup function
      return () => {
        iframe.removeEventListener("load", handleLoad);
        iframe.removeEventListener("error", handleError);
        document.head.removeChild(preconnectLink);
        document.head.removeChild(prefetchLink);
        document.head.removeChild(dnsLink);
      };
    }
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <iframe
        ref={iframeRef}
        src="https://clinical-trial-agent-chi.vercel.app/agents/clinical-trial-agent/"
        className="w-full h-full border-0"
        title="Clinical Trial Agent"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; microphone; camera; cross-origin-isolated"
        allowFullScreen
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-presentation allow-microphone allow-camera allow-downloads allow-modals allow-storage-access-api allow-top-navigation-by-user-activation"
        referrerPolicy="no-referrer-when-downgrade"
        loading="eager"
        style={{
          border: "none",
          background: "transparent",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
