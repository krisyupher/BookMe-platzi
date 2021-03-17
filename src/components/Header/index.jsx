import React, { useState, useEffect } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Header.scss";

const people = [
  "Siri",
  "Alexa",
  "Google",
  "Facebook",
  "Twitter",
  "Linkedin",
  "Sinkedin",
];
const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
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
      <Link to="/movie" style={{ textDecoration: "none" }}>
        <h1>BookMe</h1>
      </Link>
      <div className="buscador">
        <FontAwesomeIcon
          icon={faSearch}
          className="FontAwesomeIcon"
        ></FontAwesomeIcon>
        <input
          type="search"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      {/* {searchResults.map(item => (
        <li>{item}</li>
      ))} */}
    </div>
  );
};
export default Header;
