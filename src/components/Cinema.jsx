import React from 'react'
import '../styles/components/Cinema.css'

const Cinema = () => {
  return (
    <div className="Container-Cinema">
      <h3>Escoge tu cine mas cercano</h3>
      <div className="Cinema-Place">
        <div className="Cinema-Tittle">
          <h3>Titan Plaza</h3>
        </div>
        <div className="Cinema-Rooms">
          <div className="Cinema-Rooms-each">
            <h5>2D</h5>
          </div>
          <div className="Cinema-Rooms-each">
            <h5>3D</h5>
          </div>
          <div className="Cinema-Rooms-each">
            <h5>3D</h5>
          </div>
        </div>
        <div className="Cinema-Schedules">
          <div className="Cinema-Schedules-each">
            <h5>5:30 pm</h5>
          </div>
          <div className="Cinema-Schedules-each">
            <h5>7:30 pm</h5>
          </div>
          <div className="Cinema-Schedules-each">
            <h5>8:30 pm</h5>
          </div>
          <div className="Cinema-Schedules-each">
            <h5>9:30 pm</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Cinema