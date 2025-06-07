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
import Setting from "./(reponsive)/(main)/setting";
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
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <ReactQueryProvider>
            <ReduxToolKitProvider>
              <ResponsiveHeader />
              <main className="flex-grow">{children}</main>
              <ResponsiveFooter />
              <div className="setting-mobile-icon" style={{ marginTop: "1%" }}>
                <Setting />
              </div>
            </ReduxToolKitProvider>
          </ReactQueryProvider>
        </div>
      </body>
    </html>
  );
}
