import { Link } from "react-router-dom";
import HomeStyle from "../styles/Home.module.css";

export const Home = () => {
    return (
      <>
        <div className={HomeStyle.bgd}>
          <img src="https://starz.imgix.net/StarzPlay/Hero/gta-desktop-la-051523.jpg?w=2000" />
        </div>
        <article className={HomeStyle.welcome}>
          <h2>Disfruta tus peliculas y series favoritas al mejor precio</h2>
          <h3>Si eres usuario nuevo te llevas una oferta especial.</h3>
          <div className={HomeStyle.register}>
            <p>¿Qué esperas para suscribirte ahora?</p>
            <Link to="/bit02spa/signup">
              <button>Registrarme</button>
            </Link>
          </div>
        </article>
      </>
    )
}