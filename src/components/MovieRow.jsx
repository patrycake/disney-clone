import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { key } from "../secret";

function MovieRow({ title, type }) {
  const [movies, setMovies] = useState([]);
  // TO DO: HIDE API KEY!!!!!
  // switch (type) {
  //     case "trending":

  // }
  const trending = "vote_average.desc";
  const originals = "";
  const newDisney = "";
  const recommend = "";

  let url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=2&with_companies=2%7C3`;

  useEffect(() => {
    console.log("api called");
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        setMovies(
          data.results.map((movie) => ({
            img: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            title: movie.title,
            overview: movie.overview,
            date: movie.release_date,
          }))
        )
      )
      .then(console.log(movies));
  }, []);

  const movieSq = movies.map((movie) => {
    return (
      <Wrap>
        <Link to="">
          <img src={movie.img} alt="" />
        </Link>
      </Wrap>
    );
  });

  return (
    <Container>
      <h2>{title}</h2>
      <Content>{movieSq}</Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0);
  //   border: 3px solid rgba(249, 249, 249, 0.1);
  //   border-radius: 10px;
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    position: absolute;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0px;
    // object-position: center -200px;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    transition: transform 0.3s ease-out 0s;
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
export default MovieRow;
