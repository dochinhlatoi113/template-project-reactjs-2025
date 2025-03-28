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
import useCheckSize from "./helper";

export default function home() {
  let isMobile = useCheckSize();

  const productList = [
   
    {
      "title_category": "Điện Thoại Mới Nhất",
      "id_category" : "0",
      "slug": "smartphones",
      "banner_left": "./banner/banner-mobile-product-right.png",
      "banner_right": "./banner/banner-mobile-product-left.png",
      "total_product": 7,
      "list_product": [
        {
          "title_product": "iPhone 16",
          "price": "20.000.000",
          "image": "https://shopdunk.com/images/thumbs/0030771_iphone-16-128gb.png"
        },
        {
          "title_product": "iPhone 16",
          "price": "20.000.000",
          "image": "https://shopdunk.com/images/thumbs/0030771_iphone-16-128gb.png"
        },
        {
          "title_product": "iPhone 16",
          "price": "20.000.000",
          "image": "https://shopdunk.com/images/thumbs/0030771_iphone-16-128gb.png"
        },
        {
          "title_product": "iPhone 16",
          "price": "20.000.000",
          "image": "https://shopdunk.com/images/thumbs/0030771_iphone-16-128gb.png"
        },
        {
          "title_product": "iPhone 16 promax",
          "price": "50.000.000",
          "image": "https://shopdunk.com/images/thumbs/0030771_iphone-16-128gb.png"
        },
        {
          "title_product": "iPhone 16 Pro",
          "price": "25.000.000",
          "image": "https://shopdunk.com/images/thumbs/0030771_iphone-16-128gb.png"
        },
        {
          "title_product": "iPhone 16 ",
          "price": "15.000.000",
          "image": "https://shopdunk.com/images/thumbs/0030771_iphone-16-128gb.png"
        },
        {
          "title_product": "iPhone 15 Pro",
          "price": "25.000.000",
          "image": "https://shopdunk.com/images/thumbs/0030771_iphone-16-128gb.png"
        }
      ]
    },
    {
      "title_category": "Beauty",
      "id_category" : "1",
      "slug": "beauty",
      "banner_left": "./banner/banner-mobile-product-right.png",
      "banner_right": "./banner/banner-mobile-product-left.png",
      "total_product": 8,
      "list_product": [
        {
          "title_product": "Son dưỡng",
          "price": "10.000.000",
          "image": "https://topwhite.vn/wp-content/uploads/2019/09/top-white-sexy-lips-balm-min.jpg"
        },
        {
          "title_product": "Phấn",
          "price": "2.000.000",
          "image": "https://topwhite.vn/wp-content/uploads/2019/09/top-white-sexy-lips-balm-min.jpg"
        }
      ]
    },
    {
      "title_category": "Phụ Kiện Hot",
      "id_category" : "2",
      "slug": "phu-kien-hot",
      "banner_left": "./banner/banner-mobile-product-right.png",
      "banner_right": "./banner/banner-mobile-product-left.png",
      "total_product": 0,
      "list_product": [
      ]
    },
    {
      "title_category": "Tablet Giá Tốt",
      "id_category" : "3",
      "slug": "tablet",
      "banner_left": "./banner/banner-mobile-product-right.png",
      "banner_right": "./banner/banner-mobile-product-left.png",
      "total_product": 0,
      "list_product": [
      ]
    },
    {
      "title_category": "Màn Hình & Thiết Bị Văn Phòng",
      "id_category" : "4",
      "slug": "man-hinh-thiet-bi",
      "banner_left": "./banner/banner-mobile-product-right.png",
      "banner_right": "./banner/banner-mobile-product-left.png",
      "total_product": 0,
      "list_product": [
      ]
    }
  ];

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
           <HotDeal isMobile={isMobile} productList = {productList}/>
        </div>
        <div>
          <div className="mt-6 main-banner-sale-off">
            <BannerSaleOff dataBanner="./banner/banner-sale-off.webp"></BannerSaleOff>
          </div>
          <div className="mt-6 main-product-hot bg-[url(/background/bg-hot.png)]  bg-cover">
            <ProductHotMain />
          </div>
        </div>
        {productList.map((items, index) => (
          items.total_product != 0 && (
            <div key={index}>
              <div className="mt-6 grid grid-cols-2 gap-4 main-banner-product-left-right">
                <BannerSaleOff dataBanner={items.banner_left}></BannerSaleOff>
                <BannerSaleOff dataBanner={items.banner_right}></BannerSaleOff>
              </div>
              <div className="bg-[#ffffff]" >
                <div className="mt-6 main-product-hot">
                     <MainProduct title_category={items.title_category} data_slug={items.slug} data_link={items.link} data_product={items.list_product} />
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}
