import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";
import { SessionProvider as NextAuthProvider } from "next-auth/react";

// import { Provider as NextAuthProvider } from "next-auth/client";

import { ThemeProvider } from "next-themes";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "tailwindcss/tailwind.css";
config.autoAddCss = false;

//refetchInterval={5 * 60}

function MyApp({ Component, pageProps }) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <ThemeProvider attribute="class">
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <Component {...pageProps} />
      </ThemeProvider>
    </NextAuthProvider>
  );
}

export default MyApp;
