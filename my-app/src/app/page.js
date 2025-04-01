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
import { API_PRODUCT_HOT, API_CATEGORY_PRODUCT_MAIN_PAGE } from "@/api/api-file";
import { useQuery } from '@tanstack/react-query';

export default function home() {
  //ramdom color bg
  const colors = ["#fc7899","#1435c3", "#3D8D7A"];

  let isMobile = useCheckSize();

  //product hot
  const { data: productHotData, error: errorProductHot, isLoading: isLoadingProductHot } = useQuery({
    queryKey: ["product-hot"],
    queryFn: async () => {
      const response = await fetch(API_PRODUCT_HOT);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    },
  });


  //category product main page
  const { data: productCategoryMain, error: errorProductCategoryMain, isLoading: isLoadingProductCategoryMain } = useQuery({
    queryKey: ["product-category-main-page"],
    queryFn: async () => {
      const response = await fetch(API_CATEGORY_PRODUCT_MAIN_PAGE);
      if (!response.ok) throw new Error("Failed to fetch product new");
      return response.json();
    },
  });


  if (isLoadingProductHot || isLoadingProductCategoryMain) return <p>Loading...</p>;
  if (errorProductHot || errorProductCategoryMain) return <p>Error: {error.message}</p>;
  const productHotList = productHotData?.productHot || [];

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
        <div className={`main-product-hot`}>
        {
            productCategoryMain &&
            productCategoryMain.data.map((items,index) => (
              <div key={items.cat_id} >
                <div className={`grid grid-cols-2 gap-4 h-[100%] main-banner-product-left-right`}>
                  <BannerSaleOff dataBanner={"banner/banner-mobile-product-left.png"}></BannerSaleOff>
                  <BannerSaleOff dataBanner={"banner/banner-mobile-product-right.png"}></BannerSaleOff>
                </div>
                <div  style={{ backgroundColor: `${colors[index % colors.length]}`}}> 
                  <MainProduct 
                    title_category={items.category_desc.cat_name}
                     data_slug={items.category_desc.friendly_url}
                  // data_link={items.link}
                    data_product={items.product_child}
                  />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
