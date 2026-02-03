"use client";

import { Suspense, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

declare global {
  interface Window {
    _paq?: Array<Array<unknown>>;
  }
}

function MatomoPageTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isInitialLoad = useRef(true);

  useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }
    if (!window._paq) return;
    window._paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
    window._paq.push(["setCustomUrl", window.location.href]);
    window._paq.push(["trackPageView"]);
  }, [pathname, searchParams]);

  return null;
}

export default function MatomoAnalytics() {
  return (
    <>
      <Script id="matomo-init" strategy="afterInteractive">
        {`
          var _paq = window._paq = window._paq || [];
          _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
          _paq.push(["disableCampaignParameters"]);
          _paq.push(["setDoNotTrack", true]);
          _paq.push(["disableCookies"]);
          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
            var u="//analytics.saufex.eu/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '4']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
          })();
        `}
      </Script>
      <Suspense fallback={null}>
        <MatomoPageTracker />
      </Suspense>
    </>
  );
}
