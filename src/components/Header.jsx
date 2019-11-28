import React, { useState } from "react"
import { NavLink } from 'react-router-dom';
import "../styles/components/Header.css"
import LogoLupa from "../static/icons8-google-web-search-200.png"

// const people = [
//   "Siri",
//   "Alexa",
//   "Google",
//   "Facebook",
//   "Twitter",
//   "Linkedin",
//   "Sinkedin"
// ];
const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  // useEffect(() => {
  //   const results = people.filter(person =>
  //     person.toLowerCase().includes(searchTerm)
  //   );
  //   setSearchResults(results);
  // }, [searchTerm]);
  return (
    <div className="Header">
      <NavLink to="/movie" style={{ textDecoration: 'none' }}>
        <h1>BookMe</h1>
      </NavLink>
      <div className="buscador">
        <img src={LogoLupa} alt="Logo Buscar"></img>
        <input
          type="search"
          src={LogoLupa}
          placeholder="Buscar"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      {/* {searchResults.map(item => (
        <li>{item}</li>
      ))} */}
    </div>
  )
}
export default Header