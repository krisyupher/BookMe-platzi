import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/CarouselItem.css';

const CarouselItem = (props) => {
  const { title, poster, id } = props;
  return (
    <div className="CarouselItem-Poster">
      <Link to={"/movie/"+id} className="link"><img
        className="carousel-item__details--img"
        src={'https://image.tmdb.org/t/p/w342/' + poster}
        alt={title}
      /></Link>

    </div>
  );
}

export default CarouselItem;