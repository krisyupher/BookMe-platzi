import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginRequest } from '../../src/actions';
import '../../src/styles/containers/Login.css';
import googleIcon from '../static/google-icon.png';
import twitterIcon from '../static/twitter-icon.png';

const Login = props => {
const [form, setValues] = useState({
  email:'',
});

const handleInput = event => {
  setValues({
    ...form,
    [event.target.name]: event.target.value
  })
}

const handleSubmit = event => {
  event.preventDefault();
  props.loginRequest(form);
  props.history.push('/');
}

  return (
    <section className="login">
      <section className="login__container">
        <h2>Inicia sesión</h2>
        <form className="login__container--form" onSubmit={handleSubmit}>
          <input 
          name="email"
          className="input" 
          type="text" 
          placeholder="Correo"
          onChange={handleInput} 
          />
          <input 
          name="password"
          className="input" 
          type="password" 
          placeholder="Contraseña"
          onChange={handleInput} 
           />
        <Link to="/movie">
          <button className="button">Iniciar sesión</button>
        </Link>
          <div className="login__container--remember-me">
            <label>
              <input type="checkbox" id="cbox1" value="first_checkbox" />Recuérdame
        </label>
            <a href="/">Olvidé mi contraseña</a>
          </div>
        </form>
        <section className="login__container--social-media">
          <div><img src={googleIcon} alt=""/> Inicia sesión con Google</div>
          <div><img src={twitterIcon} alt=""/> Inicia sesión con Twitter</div>
        </section>
        <p className="login__container--register">
          No tienes ninguna cuenta {' '}
      <Link to="/register">
            Regístrate
      </Link>
        </p>
      </section>
    </section>
  );
}

const mapDispatchToProps = {
  loginRequest,
};

export default Login;