import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignUpStyle from "../styles/Login-SignUp.module.css";

export const SignUp = ({ NewUser, setUser, setLoggedIn }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === "" || email === "" /* || password === "" */) {
      setError(true);
      return
    }
    setError[false];

    NewUser({"name": name, "email": email, "password": password});
    setUser({"name": name});
    setLoggedIn({UserLogIn: true});

    navigate("/bit02spa/browser");
  }

  return (
    <>
      <div className={SignUpStyle.bgd}>
        <img src="https://starz.imgix.net/StarzPlay/Hero/gta-desktop-la-051523.jpg?w=2000" />
      </div>
      <section className={SignUpStyle.login}>
        <h2>Registro</h2>
        { 
          error && 
          <>
          <div className={SignUpStyle.alert}> 
            <p>⚠ Rellene todos los campos.</p>
          </div>
          </>
        }
        <form onSubmit={handleSubmit} className={SignUpStyle.form}>
          <input value={name} onChange={event => setName(event.target.value)} type="text" placeholder="Nombre" id="name" name="name" />
          <input value={email} onChange={event => setEmail(event.target.value)} type="text" placeholder="Correo" id="email" name="email" />
          <input value={password} onChange={event => setPassword(event.target.value)} type="password" placeholder="Contraseña" id="password" name="password" />
          <button>Registrarme</button>
          <p> ¿Ya tienes una cuenta?</p>
          <Link to="/bit02spa/login">Iniciar sesión</Link>
        </form>
      </section>
    </>
  )
}