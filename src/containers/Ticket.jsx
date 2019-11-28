import React from "react"
import codigoBarras from "../static/codigo-barras.png"
import CódigoQR from "../static/Código-QR.png"
import { connect } from "react-redux"
import "../styles/containers/Ticket.css"
const Ticket = () => {
  return (
    <div className="Ticket-container">
      <div className="Ticket-ticket">
        <div className="Ticket-Cabecera">
          <div>
            <h1>BookMe</h1>
            <p>Cristian Florez - Guisela Mejia</p>
            <p>Bogota-Colombia</p>
            <p>EscuelaJS@platzi.com</p>
            <p>+57 77 777 777</p>
            <img src={codigoBarras}></img>
          </div>
          <div className="Ticket-footer">
            <img src={CódigoQR}></img>
          </div>
        </div>
        <div className="Ticket-Cuerpo">
          <p><b>Ticket num:</b> P.002154657481</p>
          {/* <p><b>Fecha:</b> 21 Noviembre-2019    11:20am</p> */}
          <table class="egt">
            <tr>
              <th>Cinema</th>
              <th>Fecha</th>
              <th>Silla</th>
            </tr>
            <tr>
              <td>Cine Colombia</td>
              <td>Viernes</td>
              <td>Fila F</td>
            </tr>
            <tr>
              <td>Cl. 38A Sur #34D-50</td>
              <td>7:30 PM</td>
              <td>Silla 5</td>
            </tr>
            <tr>
              <td>4042463</td>
              <td></td>
              <td>Normal</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (reducers) => {
  return reducers.usuarios
}
export default connect(mapStateToProps, {/*Actions*/})(Ticket)