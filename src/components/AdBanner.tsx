// components/AdBanner.tsx
"use client";
import { useEffect, useRef } from "react";

interface AdBannerProps {
  adSlot?: string;
  adFormat?: "auto" | "rectangle" | "horizontal" | "vertical";
  style?: React.CSSProperties;
}

export default function AdBanner({
  adSlot = "9030046270", // Using your actual ad slot from the provided code
  adFormat = "auto",
  style = { display: "block" }
}: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if we're in browser environment
    if (typeof window !== "undefined") {
      try {
        // Ensure the AdSense script is loaded
        const existingScript = document.querySelector('script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]');
        
        if (!existingScript) {
          const script = document.createElement('script');
          script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6617838414961747";
          script.async = true;
          script.crossOrigin = "anonymous";
          document.head.appendChild(script);
        }

        // Push the ad to Google AdSense queue
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch (error) {
        console.error("AdSense error:", error);
      }
    }
  }, []);

  return (
    <div ref={adRef} style={{ overflow: "hidden", margin: "0 auto", ...style }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-6617838414961747"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
}