import React from "react";
import styled from "styled-components";
import bg from "../images/home-background.png";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Header from "./Header";
import MovieRow from "./MovieRow";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Header />
      <Container>
        <ImageSlider />
        <Viewers />
        <MovieRow title="New to Disney+" type="newDisney" />
        <MovieRow title="Recommended for you" type="recommends" />
        <MovieRow title="Originals" type="originals" />
        <MovieRow title="Trending" type="trending" />
        <Footer />
      </Container>
    </div>
  );
}

export default Home;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 70px);
  overflow-x: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px);
  top: 70px;

  &:after {
    background: url(${bg}) center center / cover no-repeat fixed;
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
