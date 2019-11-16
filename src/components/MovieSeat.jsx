import React from "react"
import "../styles/components/MovieSeat.css"
const MovieSeat = () => {
  return (
    <div className="MovieSeat-Container">
      <h2>Escoge tu(s) asiento(s)</h2>
      <div>Asientos</div>
      <div>
        <p>asientos disponibles </p>
        <p>asientos ocupados </p>
      </div>
    </div>
  )
}

export default MovieSeat