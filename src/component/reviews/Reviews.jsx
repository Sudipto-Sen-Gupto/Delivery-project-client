import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const Reviews = () => {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    axios.get('/reviews.json')
      .then(res => {
        setReviewData(res.data);
      });
  }, []);

  return (
    <div className="py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <h2 className="text-center text-4xl font-bold text-white mb-10">
        What Our Customers Say
      </h2>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={50}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 45,
          stretch: 0,
          depth: 150,
          modifier: 1.2,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper max-w-6xl mx-auto"
      >

        {reviewData.map((singleData) => (
          <SwiperSlide
            key={singleData.id}
            className="!w-80 !h-auto"
          >
            <div className="p-5 bg-white/10 backdrop-blur-md border border-gray-700 rounded-xl shadow-xl hover:scale-105 transition-all duration-300">
              <Review singleData={singleData}></Review>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
};

export default Reviews;
