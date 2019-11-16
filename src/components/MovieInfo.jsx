import React from 'react'
import '../styles/components/MovieInfo.css'

const MovieInfo = (props) => {
  const { description, release_date, original_title, production_companies, origin_country } = props
  return (
    <React.Fragment>
      <div className="Container-MovieInfo">
        <div>
          <p><strong>{production_companies}</strong> {origin_country}</p>
          <h2>{original_title}</h2>
        </div>
        <div className="MovieInfo-Referencias">
          <h4>⭐⭐⭐⭐</h4>
          <h4>{release_date}</h4>
          <h4>4K Ultra HD</h4>
        </div>
        <div className="MovieInfo-texto">
          <p>
            {description}
          </p>
          <p>
            <em>
              Will Smith, Johnny Depp, Adam Sandler, Vin Diesel, Jackie Chan
                </em>
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default MovieInfo 