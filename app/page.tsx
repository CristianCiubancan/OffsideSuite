"use client";
import ContactForm from "@/components/forms/contact";
import OffsideHero from "@/components/offside-hero";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";

export default function Page() {
  return (
    <div>
      <h1 className="sr-only" aria-hidden="true">
        Offside Music - Creative Media Agency
      </h1>

      <div className="h-screen">
        <Swiper
          className=""
          direction="vertical"
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          mousewheel={true}
          pagination={{ clickable: true }}
          modules={[Mousewheel, Pagination]}
        >
          <SwiperSlide>
            <Swiper
              className=""
              spaceBetween={0}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              mousewheel={false}
              pagination={{ clickable: true }}
              modules={[Pagination]}
            >
              <SwiperSlide>
                <OffsideHero />
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full min-h-screen flex text-left justify-center items-center p-4 bg-red-700 ">
                  <ContactForm />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full min-h-screen flex justify-center items-center p-4 bg-yellow-500"></div>
              </SwiperSlide>
            </Swiper>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full min-h-screen flex text-left justify-center items-center p-4 bg-red-700 ">
              <ContactForm />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full min-h-screen flex justify-center items-center p-4 bg-yellow-500"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
