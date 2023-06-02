import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginStyle from "../styles/Login-SignUp.module.css";

export const LogIn = ({ Users, setUser, setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(email === "" /* || password === "" */ || !Users.find(Users => Users.email === email)) {
      setError(true)
      return
    }
    setError(false)

    setLoggedIn({UserLogIn: true});

    let Username = Users.map(Users => {
      if (Users.email == email) {
        return Users.name
      }
    });
    setUser({name: Username});

    navigate("/bit02spa/browser");

  }

  return (
    <>
      <div className={LoginStyle.bgd}>
        <img src="https://starz.imgix.net/StarzPlay/Hero/gta-desktop-la-051523.jpg?w=2000" />
      </div>
      <section className={LoginStyle.login}>
        <h2>Inicia sesión</h2>
        { 
          error && 
          <>
            <div className={LoginStyle.alert}> 
              <p>⚠ Correo/Contraseña incorrecto</p>
            </div>
          </>
        }
        <form onSubmit={handleSubmit} className={LoginStyle.form}>
          <input value={email} onChange={event => setEmail(event.target.value)} type="text" placeholder="email@example.com" id="email" name="email" />
          <input value={password} onChange={event => setPassword(event.target.value)} type="password" placeholder="example" id="password" name="password" />
          <button>Iniciar sesión</button>
          <section className={LoginStyle.support}>
            <Link to="/bit02spa/help">Soporte</Link>
            <span> | </span>
            <Link to="/bit02spa/recover">Olvidé mi contraseña</Link>
          </section>
          <p> ¿Eres nuevo aquí?</p>
          <Link to="/bit02spa/signup">Registrarme</Link>     
        </form>
      </section>
    </>
  )
}