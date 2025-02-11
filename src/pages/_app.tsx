import type { AppProps } from "next/app";
import Navbar from "./components/Navbar";
import { DefaultHomeStyle } from "./styles/homeStyle";
import { Sidebar } from "./components/sidebar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaultHomeStyle>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />  
        <Component {...pageProps} />;
      </div>
    </DefaultHomeStyle>
  )  
}
