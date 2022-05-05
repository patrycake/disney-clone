import React from "react";
import styled from "styled-components";
import disney from "../images/viewers-disney.png";
import marvel from "../images/viewers-marvel.png";
import national from "../images/viewers-national.png";
import pixar from "../images/viewers-pixar.png";
import starwars from "../images/viewers-starwars.png";
import disneyV from "../videos/1564674844-disney.mp4";
import marvelV from "../videos/1564676115-marvel.mp4";
import nationalV from "../videos/1564676296-national-geographic.mp4";
import starwarsV from "../videos/1608229455-star-wars.mp4";
import pixarV from "../videos/1564676714-pixar.mp4";

function Viewers() {
  return (
    <Container>
      <Viewer img={disney} vid={disneyV} />
      <Viewer img={marvel} vid={marvelV} />
      <Viewer img={national} vid={nationalV} />
      <Viewer img={pixar} vid={pixarV} />
      <Viewer img={starwars} vid={starwarsV} />
    </Container>
  );
}

export default Viewers;

function Viewer({ img, vid }) {
  return (
    <div>
      <img src={img} alt="" />
      <video autoPlay={true} loop={true} playsInline={true} muted={true}>
        <source src={vid} type="video/mp4" />
      </video>
    </div>
  );
}

const Container = styled.div`
  margin-top: 30px;
  padding: 5px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    gap: 5px;
  }

  div {
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    outline: 4px solid rgba(249, 249, 249, 0.1);

    @media (max-width: 768px) {
      outline: 2px solid rgba(249, 249, 249, 0.1);
      width: 80px;
      height: 80px;
    }

    img {
      inset: 0px;
      display: block;
      height: 100%;
      object-fit: cover;
      opacity: 1;
      position: absolute;
      transition: opacity 500ms ease-in-out 0s;
      width: 105%;
      z-index: 1;

      @media (max-width: 768px) {
        object-fit: contain;
      }
    }

    video {
      width: 100%;
      height: 100%;
      position: absolute;
      inset: 0;
      opacity: 0;
      z-index: 0;

      @media (max-width: 768px) {
        // width: 100%;
        // height: auto;
        object-fit: cover;
        display: none;
      }
    }

    &:hover {
      box-shadow: rgb(0 0 0 /80%) 0 40px 58px -16px,
        rgb(0 0 0 / 72%) 0 30px 22px -10px;
      transform: scale(1.05);
      outline-color: rgba(249, 249, 249, 0.8);

      video {
        opacity: 1;
      }
    }
  }
`;
