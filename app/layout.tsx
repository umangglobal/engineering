import type { Metadata } from 'next'
import './globals.css'
import Providers from './providers'
import CookieConsent from '../components/UI/CookieConsent'
import Script from 'next/script'
import Header from '@/components/UI/Header'
import { Footer } from '@/components/UI/Footer'
import { ChatBotMain } from '@/components/ChatBotMain'
import { LingoProvider } from "@lingo.dev/compiler/react";
import GoogleTranslate from "@/components/UI/Translator/GoogleTranslate";

const gtReactFix = `
  if (typeof Node === 'function' && Node.prototype) {
    var r = Node.prototype.removeChild;
    Node.prototype.removeChild = function (c) {
      if (c.parentNode !== this) return c;
      return r.apply(this, arguments);
    };
    var i = Node.prototype.insertBefore;
    Node.prototype.insertBefore = function (n, ref) {
      if (ref && ref.parentNode !== this) return n;
      return i.apply(this, arguments);
    };
  }
`;

export const metadata: Metadata = {
  title: 'Engineering',
  description: '',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LingoProvider>
    <html translate="no" className="notranslate">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WW5VWCMR');`}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){         c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};         t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;         y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);     })(window, document, "clarity", "script", "tkduwenas2");`}
        </Script>

        {/* Preload hero image */}
        <link
          rel="preload"
          as="image"
          href="/assets/images/home/pattern.webp"
          fetchPriority="high"
        />

        <script dangerouslySetInnerHTML={{ __html: gtReactFix }} />
      </head>
      <body suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WW5VWCMR"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Providers>
          <Header />
          {children}
          <GoogleTranslate />
          <CookieConsent />
          <ChatBotMain />
          <Footer />
        </Providers>
      </body>
    </html>
    </LingoProvider>
  )
}