"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "./(components)/(main)/slider";
import HotDeal from "./(components)/(main)/hot-deals";
import Banner from "./(components)/(main)/banner";
import BannerSaleOff from "./(components)/(main)/banner-sale-off";
import ProductHotMain from "./(components)/(main)/product-hot";
import MainProduct from "./(components)/(main)/product-main";
//helper
import useCheckSize from "./(heper)/reponsive-check-size";
//Api
import { API_PRODUCT_HOT } from "@/api/api-file";
import { useQuery } from '@tanstack/react-query';

export default function home() {
  let isMobile = useCheckSize();

  const { data, error, isLoading } = useQuery({
    queryKey: ["product-hot"],
    queryFn: async () => {
      const response = await fetch(API_PRODUCT_HOT);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    },
  });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const productHotList = data?.productHot || [];

  return (
    <div>
      <div className="main-slider">
        <Slider></Slider>
      </div>
      <div className="main-banner">
        <Banner></Banner>
      </div>
      <div className="container mx-auto max-w-[1300px] ">
        <div className="mt-6 main-hot-deal ">
          <HotDeal isMobile={isMobile} productList={productHotList} />
        </div>
        <div>
          <div className="mt-6 main-banner-sale-off">
            <BannerSaleOff dataBanner="./banner/banner-sale-off.webp"></BannerSaleOff>
          </div>
          <div className="mt-6 main-product-hot bg-[url(/background/bg-hot.png)]  bg-cover">
            <ProductHotMain />
          </div>
        </div>
        {productHotList.map((items, index) => (
          <div key={index}>
            <div className="mt-6 grid grid-cols-2 gap-4 main-banner-product-left-right">
              <BannerSaleOff dataBanner={"banner-mobile-product-left.png"}></BannerSaleOff>
              <BannerSaleOff dataBanner={"banner-mobile-product-right.png"}></BannerSaleOff>
            </div>
            <div className="bg-[#ffffff]" >
              <div className="mt-6 main-product-hot">
                {/* <MainProduct title_category={items.title_category} data_slug={items.slug} data_link={items.link} data_product={items.list_product} /> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
