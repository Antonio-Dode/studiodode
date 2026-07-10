"use client";
import { useState, useEffect } from "react";
import Script from "next/script";
import Link from "next/link";

const GTM_ID = "GTM-M4WGKL86";

export default function CookieBanner() {
  const [consent, setConsent] = useState<"accepted" | "rejected" | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("lgpd_consent") as "accepted" | "rejected" | null;
    if (stored) {
      setConsent(stored);
    } else {
      const t = setTimeout(() => setVisible(true), 900);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("lgpd_consent", "accepted");
    setConsent("accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("lgpd_consent", "rejected");
    setConsent("rejected");
    setVisible(false);
  };

  return (
    <>
      {consent === "accepted" && (
        <>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          <Script id="gtm" strategy="afterInteractive">{`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}</Script>
        </>
      )}

      {visible && (
        <div className="cookie-banner" role="dialog" aria-label="Aviso de cookies e privacidade">
          <div className="cookie-banner-inner">
            <div className="cookie-banner-text">
              <p className="cookie-title">Privacidade e cookies</p>
              <p className="cookie-desc">
                Usamos cookies para analisar o tráfego e melhorar sua experiência.
                Seus dados são tratados conforme a{" "}
                <strong>LGPD (Lei 13.709/2018)</strong>. Leia nossa{" "}
                <Link href="/politica-de-privacidade">Política de Privacidade</Link>{" "}
                para entender como e por que coletamos seus dados.
              </p>
            </div>
            <div className="cookie-banner-actions">
              <button onClick={reject} className="btn btn-ghost cookie-btn">
                Recusar
              </button>
              <button onClick={accept} className="btn btn-aurora cookie-btn">
                Aceitar cookies
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
