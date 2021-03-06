import "tailwindcss/tailwind.css";
import "../styles.css";

import Router from "next/router";
import Head from "next/head";
import Nprogress from "nprogress";
import Loader from "../components/Loader";
import Loader2 from "../components/Loader2";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  // const Router = useRouter();
  Nprogress.configure({ showSpinner: true });

  const [loader, SetLoader] = useState(false);
  const [loadPage, SetLoadPage] = useState(true);

  Router.events.on("routeChangeStart", (url) => {
    console.log("route is changing");
    SetLoader(true);
    Nprogress.start();
  });

  Router.events.on("routeChangeComplete", (url) => {
    // console.log("route is complete");
    SetLoader(false);
    Nprogress.done();
  });
  const setfalse = () => SetLoadPage(false);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      {loader && <Loader />}
      {loadPage ? <Loader2 set={setfalse} /> : <Component {...pageProps} />}
    </>
  );
}

export default MyApp;
