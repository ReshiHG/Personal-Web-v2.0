// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import CarouselSwiperSlide from "./CarouselSwiperSlide";

import defaultImg from "/src/assets/default.png";

interface CarouselProps {
  projects: Projects[];
}

interface Projects {
  imgSlide: string;
  title: string;
  content: string;
  URL: string;
}

export function CarouselSwiper({
  projects = [
    {
      imgSlide: defaultImg,
      title: "Proyecto 1",
      content: "Descripción del proyecto 1",
      URL: "#",
    },
    {
      imgSlide: defaultImg,
      title: "Proyecto 2",
      content: "Descripción del proyecto 2",
      URL: "#",
    },
  ],
}: CarouselProps) {
  return (
    <div className="bg-jr-negro-a-700 pb-14">
      <Swiper
        navigation={true}
        slidesPerView={1.5}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          768: {
            slidesPerView: 2.5,
            spaceBetween: 45, // Opcional: más espacio en pantallas grandes
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 60, // Opcional: más espacio en pantallas grandes
          },
        }}
        className="mySwiper container max-w-7xl"
      >
        {projects.map(({ imgSlide, title, content, URL }) => {
          return (
            <SwiperSlide>
              <CarouselSwiperSlide
                img={imgSlide}
                title={title}
                content={content}
                projectURL={URL}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
