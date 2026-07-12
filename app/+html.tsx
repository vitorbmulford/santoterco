import { type PropsWithChildren } from 'react';
import { ScrollViewStyleReset } from 'expo-router/html';

const LIGHT_BACKGROUND = '#F1E7D3';
const DARK_BACKGROUND = '#0F1B33';

export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
        />
        <meta name="color-scheme" content="light dark" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Rosarium" />
        <meta name="application-name" content="Rosarium" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content={LIGHT_BACKGROUND} />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content={DARK_BACKGROUND} />
        <ScrollViewStyleReset />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --app-background: ${LIGHT_BACKGROUND};
                background-color: var(--app-background);
                color-scheme: light;
              }

              @media (prefers-color-scheme: dark) {
                :root {
                  --app-background: ${DARK_BACKGROUND};
                  color-scheme: dark;
                }
              }

              html {
                height: 100%;
                background-color: var(--app-background);
              }

              body {
                display: flex;
                margin: 0;
                min-height: 100vh;
                min-height: -webkit-fill-available;
                width: 100%;
                background-color: var(--app-background);
              }

              #root {
                display: flex;
                flex: 1;
                min-height: 100vh;
                min-height: -webkit-fill-available;
                width: 100%;
                background-color: var(--app-background);
              }

              @supports (height: 100dvh) {
                body,
                #root {
                  min-height: 100dvh;
                }
              }

              @media (display-mode: standalone) {
                body,
                #root {
                  min-height: 100dvh;
                }
              }
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
