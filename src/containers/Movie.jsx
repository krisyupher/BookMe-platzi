import React, { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import Poster from "../components/Poster";
import "../styles/containers/Movie.css";

const Movie = () => {
  const [DataPageOne, setDataPageOne] = useState();
  const [DataPageTwo, setDataPageTwo] = useState();
  const [DataPageThree, setDataPageThree] = useState();

  useEffect(() => {
    const CargarPageOne = async () => {
      let respuesta = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=ce322f54257cc9286282b320c5e9b2a0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
      );
      let respuestaJSON = await respuesta.json();
      setDataPageOne(respuestaJSON);
    };
    CargarPageOne();
    const CargarPageTwo = async () => {
      let respuesta = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=ce322f54257cc9286282b320c5e9b2a0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2"
      );
      let respuestaJSON = await respuesta.json();
      setDataPageTwo(respuestaJSON);
    };
    CargarPageTwo();
    const CargarPageThree = async () => {
      let respuesta = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=ce322f54257cc9286282b320c5e9b2a0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3"
      );
      let respuestaJSON = await respuesta.json();
      setDataPageThree(respuestaJSON);
    };
    CargarPageThree();
  }, []);

  if (!DataPageOne) {
    return <div> Loading... </div>;
  }
  if (!DataPageTwo) {
    return <div> Loading... </div>;
  }
  if (!DataPageThree) {
    return <div> Loading... </div>;
  }

  return (
    <div className="Container-Movie">
      <Carousel titleCategory="My list">
        {typeof DataPageOne.results !== "undefined" &&
          DataPageOne.results.map((movie, index) => {
            return (
              <Poster
                title={movie.title}
                poster={movie.poster_path}
                id={movie.id}
                key={movie.id}
              />
            );
          })}
      </Carousel>
      <Carousel titleCategory="Ahora">
        {typeof DataPageTwo.results !== "undefined" &&
          DataPageTwo.results.map((movie, index) => {
            return (
              <Poster
                title={movie.title}
                poster={movie.poster_path}
                id={movie.id}
                key={movie.id}
              />
            );
          })}
      </Carousel>
      <Carousel titleCategory="Tendencias">
        {typeof DataPageThree.results !== "undefined" &&
          DataPageThree.results.map((movie, index) => {
            return (
              <Poster
                title={movie.title}
                poster={movie.poster_path}
                id={movie.id}
                key={movie.id}
              />
            );
          })}
      </Carousel>
    </div>
  );
};
export default Movie;
