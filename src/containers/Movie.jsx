import React, { useState, useEffect } from 'react';
import Carousel from "../components/Carousel"
import CarouselItem from "../components/CarouselItem"
import "../styles/containers/Movie.css"

const Movie = () => {
	let [DataPage, setDataPage] = useState([]);

	useEffect(() => {
		const CargarPage = async (page) => {
			let respuesta = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=ce322f54257cc9286282b320c5e9b2a0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);
			let respuestaJSON = await respuesta.json();
			setDataPage(DataPage => [...DataPage, respuestaJSON])
		};
		CargarPage(1)
		CargarPage(2)
		CargarPage(3)

	}, []);
	return (
		<div className="Container-Movie">
			{DataPage.map((pelicula) =>
				<Carousel key={pelicula.page} titleCategory="My list">
					{pelicula.results.map((movie) =>
						<CarouselItem title={movie.title} poster={movie.poster_path} id={movie.id} key={movie.id} />)}
				</Carousel>)}
		</div>
	);
}
export default Movie;