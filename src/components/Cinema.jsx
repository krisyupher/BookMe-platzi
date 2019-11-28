import React, { useState } from 'react'
import '../styles/components/Cinema.css'

const Cinema = (props) => {
  const { ListaCinemas } = props
  const [calidad, setCalidad] = useState(["2D", "3D", "1080K"])
  const [Horario, setHorario] = useState(["5:30pm", "6:30pm", "7:30pm", "9:30pm"])

  return (
    <div className="Container-Cinema">
      <h3>Escoge tu cine mas cercano</h3>
      <div className="Cinema-Place">
        <div className="Cinema-Tittle">
          <select name="OS">
            {ListaCinemas.map((cinema, i) =>
              <option value={i} key={i}>{cinema}</option>
            )}
          </select>
        </div>
        <div className="Cinema-Rooms">
          {calidad.map((calidad) =>
            <button className="Cinema-Rooms-each">
              <h5>{calidad}</h5>
            </button>
          )}
        </div>
        <div className="Cinema-Schedules">
          {Horario.map((horario) =>
            <button className="Cinema-Schedules-each">
              <h5>{horario}</h5>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
export default Cinema