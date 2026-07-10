import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollReveal from "@/components/layout/ScrollReveal";
import ScrollTop from "@/components/layout/ScrollTop";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "DODÉ Studio Criativo — Resultado sem enrolação.",
  description:
    "Designer, diretor de arte e estrategista com quase 20 anos de mercado. Sites, branding, campanhas e foto/vídeo — direto com você, sem agência no meio.",
  keywords: [
    "designer",
    "diretor de arte",
    "branding",
    "website",
    "campanha",
    "identidade visual",
    "Itu",
    "São Paulo",
  ],
  openGraph: {
    title: "DODÉ Studio Criativo",
    description: "Resultado sem enrolação.",
    url: "https://studiodode.com.br",
    siteName: "DODÉ Studio Criativo",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DODÉ Studio Criativo",
    description: "Resultado sem enrolação.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${instrumentSans.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M4WGKL86"
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
          })(window,document,'script','dataLayer','GTM-M4WGKL86');
        `}</Script>
        <Preloader />
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
        <ScrollTop />
      </body>
    </html>
  );
}
