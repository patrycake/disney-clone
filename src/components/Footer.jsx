import React from "react";
import styled from "styled-components";
import moviedb from "../images/moviedb.svg";

function Footer() {
  return (
    <Content>
      <p>
        Website developed by Patricia Bird - No commercial purporses intended,
        made only for showing web development techniques and to be included as a
        project for my{" "}
        <a href="https://patrycake.github.io/" target="_blank">
          portfolio
        </a>
        . All copyrights are owned by Disney. This product uses the{" "}
        <a href="https://www.themoviedb.org/documentation/api" target="_blank">
          <img src={moviedb} alt="" />
        </a>{" "}
        but is not endorsed or certified by TMDb.
      </p>
    </Content>
  );
}

export default Footer;

const Content = styled.div`
  text-align: center;
  color: rgba(249, 249, 249, 0.5);
  padding-top: 50px;

  a {
    text-decoration: underline 0.15em rgba(249, 249, 249, 0.2);
    text-underline-offset: 0.2em;

    &:hover {
      text-decoration-color: rgba(249, 249, 249, 1);
      transition: text-decoration-color 0.4s;
    }

    img {
      display: inline;
      width: 90px;
      &:hover {
        transform: scale(1.03);
        transition: transform 0.3s;
      }
    }
  }
`;
