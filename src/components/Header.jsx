import React, { useState, useEffect } from "react"
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logoutRequest from "../../src/actions";
import userIcon from '../static/user-icon.png';
import gravatar from '../utils/gravatar';
import "../styles/components/Header.css"
import LogoLupa from "../static/icons8-google-web-search-200.png"

const people = [
  "Siri",
  "Alexa",
  "Google",
  "Facebook",
  "Twitter",
  "Linkedin",
  "Sinkedin"
];
const Header = props => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({})
  }
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
    <header className="Header">
      <Link to="/movie" style={{ textDecoration: 'none' }}>
        <h1>BookMe</h1>
      </Link>
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
      <div className="header__menu">
        <div className="header__menu--profile">
            <Link to="/register">
             <p>Registrate</p>
            </Link>          
          <p>Usuario</p>
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={userIcon} alt="" />
          }
        </div>
        <ul>
          {hasUser ?
            <li><a href="/">{user.name}</a></li>
            : null
          }
          {hasUser ?
            <li><a href="#logout" onClick={handleLogout}>Cerrar Sesión</a></li>
            :
            <li>
              <Link to="/login">
                Iniciar Sesión
            </Link>
            </li>
          }
        </ul>
      </div>
      {/* {searchResults.map(item => (
        <li>{item}</li>
      ))} */}
    </header>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);