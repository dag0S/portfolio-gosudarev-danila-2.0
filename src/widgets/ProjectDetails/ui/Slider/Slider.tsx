"use client";

import { useState, type FC } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

import { IProject } from "@/src/entities/Project";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface Props {
  project: IProject;
}

export const Slider: FC<Props> = ({ project }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation
        autoHeight
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mb-3"
      >
        {project.imagesURL.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              width={1920}
              height={1000}
              alt={`${project.title} картинка #${index}`}
              className="w-full rounded"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {project.imagesURL.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              width={180}
              height={90}
              alt={`${project.title} картинка #${index}`}
              className="w-full mb-4 rounded cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
