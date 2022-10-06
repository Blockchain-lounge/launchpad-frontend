import React, { memo } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NftMediumCard from "../nft-medium-card";
import NextSliderBtn from "../../atoms/next-slider-btn";

const Sliders = ({ data = [] }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    dots: false,
    nextArrow: <NextSliderBtn />,
    prevArrow: <NextSliderBtn />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative grid grid-cols-1">
      <Slider {...settings}>
        {data.map((value, i) => (
          <NftMediumCard key={value.name + i} {...value} />
        ))}
      </Slider>
    </div>
  );
};

export default memo(Sliders);
