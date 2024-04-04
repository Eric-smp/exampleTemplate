import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/globals";
import { GlobalProvider } from "@/provider/Global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalProvider>
        <GlobalStyles />
        <title>Documento</title>
        <Component {...pageProps} />
      </GlobalProvider>
    </>
  );
}
