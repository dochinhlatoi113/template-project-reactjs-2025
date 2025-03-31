"use client";

import Header from "./header";
import HeaderReponsive from "@/app/(reponsive)/(main)/header";
//helper
import useCheckSize from "@/app/(heper)/reponsive-check-size";
export default function ResponsiveHeader() {
    let isMobile = useCheckSize();
  return (
    <div className="main-header">
      {isMobile ? <HeaderReponsive /> : <Header />}
    </div>
  );
}
