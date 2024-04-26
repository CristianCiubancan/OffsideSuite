import ContactForm from "@/components/forms/contact-form";
import OffsideHero from "@/components/offside-hero";
import React from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Booking from "@/components/booking/booking";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offside Music - Creative Media Agency",
  description:
    "We are a creative media agency based in Bucharest specializing in music, video, lyrics, publicity, website and app development. Let's collaborate!",
  openGraph: {
    title: "Offside Music - Creative Media Agency",
    description:
      "We are a creative media agency based in Bucharest specializing in music, video, lyrics, publicity, website and app development. Let's collaborate!",
    url: "https://www.offsidemusic.ro/",
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/images/og-image.png`,
        alt: "OffsideMusic logo banner",
      },
    ],
    siteName: "Offside Music",
    locale: "en_US",
  },
};
export default function Page() {
  return (
    <div>
      <h1 className="sr-only" aria-hidden="true">
        Offside Music - Creative Media Agency
      </h1>
      <OffsideHero />

      {/* <Swiper
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
      </Swiper> */}
      <div className="w-full min-h-screen flex text-left justify-center items-center p-4 py-8 bg-yellow-500 ">
        <Booking />
      </div>
      <div className="w-full min-h-screen flex text-left justify-center items-center p-4 py-8 bg-red-700 ">
        <ContactForm />
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
