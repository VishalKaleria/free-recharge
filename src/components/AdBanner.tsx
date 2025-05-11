// components/AdBanner.tsx
"use client";

import { useEffect, useRef } from "react";

interface AdBannerProps {
  adSlot: string;
  adFormat?: "auto" | "rectangle" | "horizontal" | "vertical";
  style?: React.CSSProperties;
}

export default function AdBanner({
  adSlot,
  adFormat = "auto",
  style = { display: "block" }
}: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if we're in browser environment and adsbygoogle exists
    if (typeof window !== "undefined") {
      try {
        // Push the ad to Google AdSense
        // This is safe to call even if adsbygoogle isn't defined yet
        // as Google's script will process the queue when it loads
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch (error) {
        console.error("AdSense error:", error);
      }
    }
  }, []);

  return (
    <div ref={adRef} style={{ overflow: "hidden", ...style }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Replace with your actual AdSense publisher ID
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
}