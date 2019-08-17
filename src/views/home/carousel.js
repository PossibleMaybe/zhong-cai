import React from 'react';
import { Carousel } from 'antd-mobile';
import './carousel.scss';
const img1 = require('src/img/icon/banner_2.svg');
const img2 = require('src/img/icon/img2.jpg');
const img3 = require('src/img/icon/timg.jpeg');

const HomeCarousel = () => {
  return (
    <div className="home-carousel-container">
      <Carousel
        autoplay
        infinite
        dotStyle={{ width: '0.08rem', height: '0.08rem', borderRadius: '50%', opacity: 0.5 }}
        dotActiveStyle={{ width: '0.24rem', height: '0.08rem', borderRadius: '0.04rem', background: '#fff' }}
      >
        <a
          className="carousel-wrapper"
          href=""
        >
          <img className="carousel-img" src={img2} alt="" />
        </a>
        <a
          className="carousel-wrapper"
          href=""
        >
          <img className="carousel-img" src={img3} alt="" />
        </a>
      </Carousel>
    </div>
  )
}

export default HomeCarousel;
