import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "RagaAI Agents",
  description: "AI Agents Hub with optimized performance",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://clinical-trial-agent-chi.vercel.app"
        />
        <link
          rel="preconnect"
          href="https://clinical-coder-agent-six.vercel.app"
        />
        <link rel="preconnect" href="https://caresyncai-flax.vercel.app" />
        <link
          rel="preconnect"
          href="https://patient-discharge-agent-nu.vercel.app"
        />
      </head>
      <body>
        {children}
        <Script
          id="register-sw"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered with scope: ', registration.scope);
                    })
                    .catch(function(error) {
                      console.log('SW registration failed: ', error);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
