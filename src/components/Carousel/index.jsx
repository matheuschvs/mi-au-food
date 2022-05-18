/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

import firstSlide from '../../assets/first-slide.svg';
import secondSlide from '../../assets/second-slide.jpg';
import thirdSlide from '../../assets/third-slide.jpg';

import 'swiper/css';
import 'swiper/css/navigation';

export const Carousel = () => {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={firstSlide} alt="gato e cachorro deitados" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={secondSlide} alt="cão chupando sorvete" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={thirdSlide} alt="gato deitado" />
      </SwiperSlide>
    </Swiper>
  );
};
