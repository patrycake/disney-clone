import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider1 from "../images/slider-badag.jpg";
import slider2 from "../images/slider-badging.jpg";
import slider3 from "../images/slider-scale.jpg";
import slider4 from "../images/slider-scales.jpg";

function ImageSlider() {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...setting}>
      <Wrap>
        <a href="">
          <img src={slider1} alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a href="">
          <img src={slider2} alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a href="">
          <img src={slider3} alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src={slider4} alt="" />
        </a>
      </Wrap>
    </Carousel>
  );
}

export default ImageSlider;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    display: block;
    position: relative;
    margin: 10px;
    cursor: pointer;
    border-radius: 4px;

    @media (max-width: 768px) {
      padding: 0px;
    }

    img {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;

      @media (max-width: 768px) {
        height: 200px;
        object-fit: cover;
      }

      &:hover {
        outline: 4px solid rgba(249, 249, 249, 0.8);
        outline-offset: -4px;
        transition: outline 0.3s ease 0s;

        @media (max-width: 768px) {
          padding: 4px;
        }
      }
    }
  }
`;

const Carousel = styled(Slider)`
  margin-top: 10px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    //not active
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;
