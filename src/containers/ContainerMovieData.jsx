import React, { useState, useEffect } from "react"
import MovieDate from "../components/MovieDate"
import MovieInfo from "../components/MovieInfo"
import MoviePlayer from "../components/MoviePlayer"
import Cinema from "../components/Cinema"
import MovieSeat from "../components/MovieSeat"
import "../styles/containers/ContainerMovieData.css"
const ContainerMovieData = (props) => {
  const [page, setPage] = useState(1);
  const { match: { params } } = props;
  const [DataMovieById, setDataMovieById] = useState();

  useEffect(() => {
    const Cargar = async () => {
      let respuesta = await fetch(`https://api.themoviedb.org/3/movie/${params.MovieId}?api_key=ce322f54257cc9286282b320c5e9b2a0`);
      let respuestaJSON = await respuesta.json();
      setDataMovieById(respuestaJSON);
    };
    Cargar();
  }, []);

  if (!DataMovieById) {
    return <div> Loading... </div>
  }
  return (
    <div className="ContainerMovieData">
      <MovieDate />
      <div className="Container_Movie">
        {page === 1 &&
          <MovieInfo
            description={DataMovieById.overview}
            release_date={DataMovieById.release_date}
            original_title={DataMovieById.original_title}
            production_companies={DataMovieById.production_companies[0] ? DataMovieById.production_companies[0].name : DataMovieById.production_countries[0].name}
            origin_country={DataMovieById.production_companies[0] ? DataMovieById.production_companies[0].origin_country : DataMovieById.status}
          />
        }
        {page === 2 &&
          <Cinema />
        }
        {page === 3 &&
          <MovieSeat />
        }
        <MoviePlayer
          poster={DataMovieById.belongs_to_collection ? DataMovieById.belongs_to_collection.poster_path : DataMovieById.poster_path}
        />
        <div className="Container_Movie-Buttons">
          <button onClick={() => {
            setPage(1)
          }}>1</button>
          <button onClick={() => {
            setPage(2)
          }}>2</button>
          <button onClick={() => {
            setPage(3)
          }}>3</button>
        </div>
      </div>
    </div>
  )
}

export default ContainerMovieData