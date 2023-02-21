import React from 'react';
import Slider from "react-slick";
import IconBoot from '../icon/IconBoot';
import IconCSS from '../icon/IconCSS';
import IconDB from '../icon/IconDB';
import IconHTML from '../icon/IconHTML';
import IconJS from '../icon/IconJS';
import IconNet from '../icon/IconNet';
import IconReact from '../icon/IConReact';
import IconTail from '../icon/IconTail';




const Carrousel = () => {

    const settings = {
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 10,
        cssEase: "linear",
        arrows: false,
        rtl: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 7,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              },
            },
            {
                breakpoint: 640,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                },
              },
          ],
      };

    return (
    <Slider {...settings}>
        <IconDB/>
        <IconNet/>
        <IconBoot/>
        <IconTail/>
        <IconReact/>
        <IconJS/>
        <IconCSS/>
        <IconHTML/>
    </Slider>
    );
};

export default Carrousel;
