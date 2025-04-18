"use client";

import { Inter, Roboto } from "next/font/google";
import "./globals.css";

// CSS
import "./css/web/main.css";
import "./css/reponsive/main.css";
// Components
import ResponsiveHeader from "./(components)/(main)/header-main";
import ResponsiveFooter from "./(components)/(main)/footer";
import ReactQueryProvider from "./ReactQueryProvider";
import ReduxToolKitProvider from "./ReduxToolKitProvider";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
      >
        <ReactQueryProvider>
          <ReduxToolKitProvider>
            <ResponsiveHeader />
            <main>{children}</main>
            <ResponsiveFooter />
          </ReduxToolKitProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
