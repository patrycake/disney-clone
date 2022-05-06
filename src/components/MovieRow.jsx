import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setMovie } from "../features/movie/movieSlice";
import { useNavigate } from "react-router-dom";
import noneImg from "../images/viewers-disney.png";
import uniqid from "uniqid";

function MovieRow({ title, type }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const url = new URL(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}`
  );
  url.searchParams.append("language", "en-US");
  url.searchParams.append("include_adult", "false");
  url.searchParams.append("include_video", "false");
  url.searchParams.append("with_companies", "2|3");
  url.searchParams.append("sort_by", "revenue.desc");
  switch (type) {
    case "trending":
      url.searchParams.append("sort_by", "popularity.desc");
      break;
    case "originals":
      url.searchParams.delete("with_companies");
      url.searchParams.append("with_companies", "2");
      break;
    case "newDisney":
      url.searchParams.append("sort_by", "release_date.desc");
      url.searchParams.append("release_date.lte", "2022");
      break;
    case "recommends":
      url.searchParams.append("sort_by", "vote_count.desc");
      break;
    default:
      break;
  }

  useEffect(() => {
    console.log("api called", url);
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        setMovies(
          data.results.slice(0, 4).map((movie) => ({
            img: movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : noneImg,
            backdrop: movie.backdrop_path
              ? `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`
              : noneImg,
            title: movie.title,
            overview: movie.overview,
            date: movie.release_date,
          }))
        )
      );
  }, []);
  async function dispatchMovie(movie) {
    dispatch(
      setMovie({
        title: movie.title,
        img: movie.img,
        backdrop: movie.backdrop,
        overview: movie.overview,
        date: movie.date,
      })
    );
  }
  const movieSq = movies.map((movie, index) => {
    return (
      <Wrap key={uniqid()}>
        <div
          onClick={async () => {
            console.log(movie.title);
            dispatchMovie(movie);
            console.log("got to movie");
            navigate("/movie");
          }}
        >
          <img src={movie.img} alt="" />
        </div>
      </Wrap>
    );
  });
  console.log(movies);
  return (
    <Container>
      <h3>{title}</h3>
      <Content>{movieSq}</Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 0 26px;

  h3 {
    margin: 5px;
  }
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
  padding-top: 40%;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0);
  //   border: 3px solid rgba(249, 249, 249, 0.1);
  //   border-radius: 10px;
  img {
    border-radius: 4px;
    border-width: 4px;
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
    // object-position: center bottom;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    transition: transform 1s ease-out 0s;
    outline: 4px solid rgba(249, 249, 249, 0.8);
    outline-style: 4px solid;
  }
`;
export default MovieRow;
