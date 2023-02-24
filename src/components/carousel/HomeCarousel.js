import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


import "./HomeCarousel.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function HomeCarousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> 
        <img src="https://tse1.mm.bing.net/th?id=OIP.4O9DUD-gtMn1a7gVAucTrQHaEx&pid=Api&P=0" alt="" />
        <h1>Reparación de equipos de alta complejidad.</h1></SwiperSlide>
        <SwiperSlide>
        <img src="https://itcomunicacion.com.mx/wp-content/uploads/2020/07/AutomInd.jpg" alt="" />
        <h1> Control de procesos para la industria.</h1>
        </SwiperSlide>
        <SwiperSlide> 
        <img src="https://www.estampacionesjom.com/wp-content/uploads/2016/10/tipos-de-automatizacion-industrial-cual-es-el-mas-indicado.jpg" alt="" />
        <h1>Servicio de mantenimiento en planta.</h1></SwiperSlide>
        <SwiperSlide> 
        <img src="https://tse2.mm.bing.net/th?id=OIP.T9nbIgGIPn01VBtIf5MqpgHaE6&pid=Api&P=0" alt="" />
        <h1>Robotica y aplicaciones especiales con microprocesadores.</h1></SwiperSlide>
      </Swiper>
    </>
  );
}



export default HomeCarousel;