import { Html, Head, Main, NextScript } from "next/document";
import { Navbar } from "./components/Navbar";
import { LeftNavbar } from "./components/leftNavbar";
import { HomePageStylesWithLeftBar } from "./styles/homeStyle";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar />
        <HomePageStylesWithLeftBar >
          <LeftNavbar />
          <Main />
        </HomePageStylesWithLeftBar>
        <NextScript />
      </body>
    </Html>
  );
}
