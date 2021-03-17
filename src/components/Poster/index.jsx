import React from "react";
import { Link } from "react-router-dom";
import "./poster.scss";

const poster = (props) => {
  const { title, poster, id } = props;
  return (
    <div className="posterContainer">
      <Link to={"/movie/" + id} className="link">
        <img
          src={"https://image.tmdb.org/t/p/w342/" + poster}
          alt={title}
        />
      </Link>
    </div>
  );
};

export default poster;
