import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { trpc } from "../libs/trpc";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default trpc.withTRPC(MyApp);
