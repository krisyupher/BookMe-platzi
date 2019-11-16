import React from 'react'
import '../styles/components/MoviePlayer.css'


const MoviePlayer = (props) =>{
  const {poster} = props
  return (
    <div className="Container-MoviePlayer">
      <img src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2/"+poster} alt="STRANGER THINGS" />
    </div>
  )
}
export default MoviePlayer