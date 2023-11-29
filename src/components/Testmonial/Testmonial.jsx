import React from 'react'
import './Testmonial.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Pagination} from 'swiper'
import 'swiper/css/pagination';
import 'swiper/css'
import { Autoplay } from "swiper";


import boy from '../../img/boy-guitar.png'
export default function Testmonial() {
    const clients=[{
        img : boy,
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda vel error itaque culpa explicabo animi rem molestiae harum sapiente, illo id quis voluptates, molestias nesciunt expedita cupiditate dolores sit ab?"
    },{
        img : boy,
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda vel error itaque culpa explicabo animi rem molestiae harum sapiente, illo id quis voluptates, molestias nesciunt expedita cupiditate dolores sit ab?"
    },{
        img :boy,
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda vel error itaque culpa explicabo animi rem molestiae harum sapiente, illo id quis voluptates, molestias nesciunt expedita cupiditate dolores sit ab?"
    }]
  return (
    <div className="t-wrapper">
   
    <Swiper
    autoplay={{
        delay: 800,
        disableOnInteraction: false,
      }}
      loop={true}
        loopFillGroupWithBlank={true}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 150,
          },
          // when window width is >= 480px
         
          
        }}
        
        className="mySwiper"


    modules={[Pagination,Autoplay]} 
        slidesPerView={1} 
       speed={3234}
        pagination={{clickable: true}}
        
    >
    {clients.map((client,index)=>{
        return(
            <SwiperSlide key={index}>
                <div className="testimonial">
                <img src={client.img} alt=""/>
                <span >{client.review}</span>
                </div>
            </SwiperSlide>
        )
    })}

    


    </Swiper>
    </div>

    
  )
}
