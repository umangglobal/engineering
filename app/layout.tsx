import type { Metadata } from 'next'
import './globals.css'
import Providers from './providers'
import CookieConsent from '../components/UI/CookieConsent'
import Script from 'next/script'
import Header from '@/components/UI/Header'
import { Footer } from '@/components/UI/Footer'
import { ChatBotMain } from '@/components/ChatBotMain'

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
    <html lang="en">
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
      </head>
      <body>
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
          <CookieConsent />
          <ChatBotMain />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}