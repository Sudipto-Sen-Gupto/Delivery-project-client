import React from 'react';
import amazon from '../../assets/brands/amazon.png'
import casio from '../../assets/brands/casio.png'
import moonstar from '../../assets/brands/moonstar.png'
import randstad from '../../assets/brands/randstad.png'
import star from '../../assets/brands/star.png'
import starPeople from '../../assets/brands/start_people.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
const Brands = () => {
    const logo=[amazon,casio,moonstar,randstad,star,starPeople];
    return (
        <Swiper slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        grabCursor={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        className='my-6 p-4'>

            {
                logo.map((logos,index)=>{
                     return   (<SwiperSlide key={index}><img src={logos} alt="" /></SwiperSlide>)
                })
            }
             
        {/* <SwiperSlide><img src={casio} alt="" /></SwiperSlide>
        <SwiperSlide><img src={moonstar} alt="" /></SwiperSlide>
        <SwiperSlide><img src={randstad} alt="" /></SwiperSlide>
        <SwiperSlide><img src={star} alt="" /></SwiperSlide>
        <SwiperSlide><img src={starPeople} alt="" /></SwiperSlide> */}
        
        </Swiper>
    );
};

export default Brands;