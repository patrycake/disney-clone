import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import { titleState } from "../features/movie/movieSlice";
import styled from "styled-components";
import play from "../images/play-icon-black.png";
import group from "../images/group-icon.png";
import plus from "../images/watchlist-icon.svg";
import Footer from "./Footer";

function MovieDetails() {
  const title = useSelector(titleState);
  const backdrop = useSelector((state) => state.movie.backdrop);
  const overview = useSelector((state) => state.movie.overview);

  const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 70px);
    overflow-x: hidden;
    display: block;
    padding: 0 calc(3.5vw + 5px);
    top: 70px;

    &:after {
      background: url(${backdrop}) center center / cover no-repeat fixed;
      content: "";
      inset: 0px;
      opacity: 1;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
    }
  `;
  return (
    <div>
      <Header />
      <Container />
      <Wrap>
        <Content>
          <Title>{title}</Title>
          <ButtonGroup>
            <Watch>
              <img src={play} alt="" />
              Play
            </Watch>
            <Trailer>Trailer</Trailer>

            <CircleButt>
              <img src={plus} alt="" />
            </CircleButt>
            <CircleButt>
              <img src={group} alt="" />
            </CircleButt>
          </ButtonGroup>
          <Overview>{overview}</Overview>
        </Content>
        <Footer />
      </Wrap>
    </div>
  );
}

export default MovieDetails;

const CircleButt = styled.div`
  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    border: 2px solid rgb(249, 249, 249);
    object-fit: contain;
    object-position: center center;

    &:hover {
      border-color: rgba(249, 249, 249, 0.5);
      background-color: rgba(249, 249, 249, 0.5);
      border-radius: 50%;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`;
const Watch = styled.button`
  padding: 15px 30px;
  text-transform: uppercase;
  border-radius: 4px;
  border: none;
  background-color: rgba(249, 249, 249);
  margin: 5px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: rgba(249, 249, 249, 0.5);
    transition: background-color 0.3s ease-out 0s;
  }
`;
const Trailer = styled.button`
  padding: 15px 30px;
  width: 130px;
  height: 65px;
  text-transform: uppercase;
  border-radius: 4px;
  border: 2px solid rgb(249, 249, 249);
  background-color: rgba(0, 0, 0, 0.1);
  margin: 5px;
  color: rgb(249, 249, 249);

  &:hover {
    background-color: rgba(249, 249, 249, 0.5);
    transition: all 0.3s ease-out 0s;
    color: rgba(0, 0, 0, 0.8);
    border-color: transparent;
  }
`;

const Title = styled.h2`
  font-size: 50px;
  width: 40%;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;
const Overview = styled.p`
  width: 70%;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
const Wrap = styled.div`
  position: absolute;
  padding: 100px;
  inset: 0;
  background-color: rgba(4, 7, 20, 0.4);
  box-shadow: rgba(4, 7, 20, 0.6) 0px -46px 90px 100px inset,
    rgba(4, 7, 20, 0.5) 100px -72px 160px 0px inset,
    rgba(4, 7, 20, 0.5) 200px -108px 150px 0px inset,
    rgba(4, 7, 20, 0.6) 350px 40px 200px, rgba(4, 7, 20, 0.4) 400px 4px 250px,
    rgba(4, 7, 20, 0.9) 750px 16px 80px, rgba(4, 7, 20, 0.4) 900px 16px 80px,
    rgba(4, 7, 20, 0.9) 350px 64px 32px;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  -webkit-justify-content: flex-end;
`;
