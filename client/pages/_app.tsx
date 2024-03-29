import "../styles/globals.css";
import Header from "../components/Header";
import type {AppProps} from "next/app";
import {ClerkLoaded, ClerkProvider, SignedIn, SignedOut} from "@clerk/nextjs";
import {useRouter} from "next/router";
import BottomCredit from "../components/bottomcredit/BottomCredit";


/**
 * List pages you want to be publicly accessible, or leave empty if
 * every page requires authentication. Use this naming strategy:
 *  "/"              for pages/index.js
 *  "/foo"           for pages/foo/index.js
 *  "/foo/bar"       for pages/foo/bar.js
 *  "/foo/[...bar]"  for pages/foo/[...bar].js
 */
const publicPages = ["/", "/privacy"];

export const metadata = {
  title: 'Clerk-Organizations',
  description: 'Clerk Role-Based Authentication Using Organizations',
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ClerkProvider {...pageProps}>
      <ClerkLoaded>
        <Header />
        
        {publicPages.includes(router.pathname) ? (
          <main>
            <Component {...pageProps} />
          </main>
        ) : (
          <>
            <SignedIn>
              <Component {...pageProps} />
            </SignedIn>
            <SignedOut>
              <div className="protected">
                <p>You need to be signed in to access this page.</p>
              </div>
            </SignedOut>
          </>
        )}



        {/* footer */}
        <footer>
          <BottomCredit
            label="© 2023 Kaskara Group, LLC. All Rights Reserved."
            privacyLink="/privacy"
          />
        </footer>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
export default MyApp;
