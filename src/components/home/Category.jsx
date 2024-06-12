import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../../assets/menu/pizza-bg.jpg";
import img2 from "../../assets/menu/salad-bg.jpg";
import img3 from "../../assets/menu/soup-bg.jpg";
import img4 from "../../assets/menu/dessert-bg.jpeg";
const Category = () => {
  return (
    <section className="w-[80%] mx-auto">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
          <img
            src={img1}
            className="h-96 w-96 object-cover rounded-xl"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img2}
            className="h-96 w-96 object-cover rounded-xl"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img3}
            className="h-96 w-96 object-cover rounded-xl"
            alt=""
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            src={img3}
            className="h-96 w-96 object-cover rounded-xl"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img4}
            className="h-96 w-96 object-cover rounded-xl"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
