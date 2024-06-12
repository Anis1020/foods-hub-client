import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../SectionTitle";
import { Navigation } from "swiper/modules";

import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setReviews(data);
      });
  }, []);
  return (
    <div>
      <SectionTitle
        heading={"Our Testimonial"}
        subHeading={" Rating"}
      ></SectionTitle>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <div>
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="w-[70%] mx-auto text-center">
                  <div className="flex justify-center">
                    <Rating
                      style={{ maxWidth: 180 }}
                      value={review.rating}
                      readOnly
                    />
                  </div>
                  <span className="flex justify-center text-2xl my-5">
                    <FaQuoteRight />
                  </span>
                  <p>{review.name}</p>
                  <p>{review.details}</p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
