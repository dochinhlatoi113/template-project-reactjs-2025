import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
//web
import "./css/web/header.css";
//reponsive
import "./css/reponsive/header.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
   display: 'swap'
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
   display: 'swap'
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
