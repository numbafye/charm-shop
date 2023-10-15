// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Carousel() {
  return (
    <>
      {" "}
      <div className="carousel-container">
        <h1>carousel</h1>
        <Swiper
          className="h-60"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img src="src/assets/charm2.jpg" alt="spider charm" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/charm5.jpg" alt="hellokitty" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/charm6.jpg" alt="infinity" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/charm5.jpg" alt="hellokitty" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Carousel;
