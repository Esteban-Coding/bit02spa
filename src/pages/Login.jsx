import { useState } from "react";
import { Link } from "react-router-dom";
import LoginStyle from "../styles/Login-SignUp.module.css";

export function Login() {
    const [user, setUser] = useState("");

    return (
      <>
        <div className={LoginStyle.bgd}>
          <img src="https://starz.imgix.net/StarzPlay/Hero/gta-desktop-la-051523.jpg?w=2000" />
        </div>
        <section className={LoginStyle.login}>
          <h2>Inicia sesión</h2>
          <form className={LoginStyle.form}>
            <input type="text" placeholder="email@example.com" />
            <input type="password" placeholder="example" />
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