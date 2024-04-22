"use client";
import ContactForm from "@/components/forms/contact";
import OffsideHero from "@/components/offside-hero";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import Booking from "@/components/booking";

export default function Page() {
  return (
    <div>
      <h1 className="sr-only" aria-hidden="true">
        Offside Music - Creative Media Agency
      </h1>
      <Swiper
        className=""
        spaceBetween={0}
        slidesPerView={1}
        // autoplay={{ delay: 15000 }}
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
        mousewheel={false}
        pagination={{ clickable: true }}
        // modules={[Pagination, Autoplay]}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <OffsideHero />
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full min-h-dvh flex text-left justify-center items-center p-4 bg-red-700 "></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full min-h-dvh flex justify-center items-center p-4 bg-yellow-500"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full min-h-dvh flex justify-center items-center p-4 bg-red-500"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full min-h-dvh flex justify-center items-center p-4 bg-gray-500"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full min-h-dvh flex justify-center items-center p-4 bg-stone-500"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full min-h-dvh flex justify-center items-center p-4 bg-blue-500"></div>
        </SwiperSlide>
      </Swiper>
      <div className="w-full min-h-screen flex text-left justify-center items-center p-4 bg-red-700 ">
        <ContactForm />
      </div>
      <div className="w-full min-h-screen flex text-left justify-center items-center p-4 bg-yellow-500 ">
        <Booking />
      </div>
      {/* <div className="h-screen">
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
              // autoplay={{ delay: 15000 }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              mousewheel={false}
              pagination={{ clickable: true }}
              // modules={[Pagination, Autoplay]}
              modules={[Pagination]}
            >
              <SwiperSlide>
                <OffsideHero />
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full min-h-screen flex text-left justify-center items-center p-4 bg-red-700 "></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full min-h-screen flex justify-center items-center p-4 bg-yellow-500"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full min-h-screen flex justify-center items-center p-4 bg-red-500"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full min-h-screen flex justify-center items-center p-4 bg-gray-500"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full min-h-screen flex justify-center items-center p-4 bg-stone-500"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full min-h-screen flex justify-center items-center p-4 bg-blue-500"></div>
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
      </div> */}
    </div>
  );
}
