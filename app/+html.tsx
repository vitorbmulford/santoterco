import { type PropsWithChildren } from 'react';
import { ScrollViewStyleReset } from 'expo-router/html';

const LIGHT_BACKGROUND = '#F1E7D3';
const DARK_BACKGROUND = '#0F1B33';
const THEME_STORAGE_KEY = 'sacred-theme-mode';

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
        <meta name="theme-color" content={LIGHT_BACKGROUND} />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function () {
              try {
                var stored = window.localStorage.getItem('${THEME_STORAGE_KEY}');
                var mode = stored === 'light' || stored === 'dark'
                  ? stored
                  : window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? 'dark'
                    : 'light';
                var background = mode === 'dark' ? '${DARK_BACKGROUND}' : '${LIGHT_BACKGROUND}';
                var root = document.documentElement;
                root.style.setProperty('--app-background', background);
                root.style.backgroundColor = background;
                root.style.colorScheme = mode;
                document.querySelector('meta[name="theme-color"]')?.setAttribute('content', background);
              } catch (_) {}
            })();`,
          }}
        />
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

              html,
              body,
              #root {
                height: 100%;
                min-height: 0;
                width: 100%;
                background-color: var(--app-background);
              }

              body {
                display: flex;
                margin: 0;
                overflow: hidden;
              }

              #root {
                display: flex;
                flex: 1 1 auto;
                overflow: hidden;
              }
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
