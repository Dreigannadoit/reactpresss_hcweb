import React from 'react'
import '../css/Process.css'
import TitleHead from '../parts/TitleHead'
import { mid } from '../assets/img'
import { bookMeeting, steps, testimonials } from '../constants'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Process = () => {
  return (
    <section className="process" >
      <div className="padding_side" id='process'>
        <TitleHead header="Culture-Driven Hiring for Lasting Success"/>
      </div>

      <div className="step_container padding_r_side">
        <img src={mid} alt="" />

        <div className="steps ">
          <div className="pro">
            {steps.map((step) => (
              <div className="block">
                <div className="pr_num">
                  <h1>{step.stepNum}</h1>
                </div>

                <h1>{step.head}</h1>

                <p>{step.text}</p>
              </div>
            ))}
          </div>

          <a href={bookMeeting} target='_blank' className="cta .poppins-regular ">Get Started</a>
        </div>

      </div>

      {/* Uncoment section bellow to activate the testimonial page */}

      {/* <div className="testi padding_side" id='testi'>
        <TitleHead header="Hear from Our Clients"/>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            1000: {
              slidesPerView: 3, // Show only 1 slide when the viewport width is <= 1000px
            },

            
            700: {
              slidesPerView: 2, // Show only 1 slide when the viewport width is <= 1000px
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.name}>
              <a href={testimonial.video} target='_blank'>
                <div className="front_drop">
                  <h1>{testimonial.name}</h1>
                </div>
                <img src={testimonial.thumbnail} alt="" />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

      </div> */}
    </section>
  )
}

export default Process