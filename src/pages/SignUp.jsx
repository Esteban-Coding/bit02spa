import { Link } from "react-router-dom";
import SignUpStyle from "../styles/Login-SignUp.module.css";

export function SignUp() {
    
    const NewUser = () => {
      console.log("funciona");
    }

    return (
      <>
        <div className={SignUpStyle.bgd}>
          <img src="https://starz.imgix.net/StarzPlay/Hero/gta-desktop-la-051523.jpg?w=2000" />
        </div>
        <section className={SignUpStyle.login}>
          <h2>Registro</h2>
          <form className={SignUpStyle.form}>
            <input type="text" placeholder="Nombre" id="name"/>
            <input type="text" placeholder="Correo" id="email"/>
            <input type="password" placeholder="Contraseña" id="password"/>
            <button onClick={NewUser}>Registrarme</button>
            <p> ¿Ya tienes una cuenta?</p>
            <Link to="/bit02spa/login">Iniciar sesión</Link>
          </form>
        </section>
      </>
    )
}