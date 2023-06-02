import { Link } from "react-router-dom";
import MenuStyle from "../styles/Menu.module.css"

export function Menu() {
  let isLoggedIn = false;
  let isHomePage = {result: "", typeCursor: ""};
  let isSignPage = {result: "", display: ""};

  if (isHomePage.result) {
    isHomePage.typeCursor = "unset";
  }

  if (isSignPage.result) {
    isSignPage.display = "none";
  }

  if (isLoggedIn) {
    return (
        <header className={MenuStyle.menu}>
        <h1 className={MenuStyle.emperia}>
          <Link to="/bit02spa/browser" >
            EMPERIA
          </Link>
        </h1>
      </header>
    )
  } else {
    return (
        <header className={MenuStyle.menu}>
          <div className={MenuStyle.container}>
            <h1 className={MenuStyle.emperia}>
              <Link to="/bit02spa" style={{cursor: isHomePage.typeCursor}}>
                EMPERIA
              </Link>
            </h1>
            <Link to="/bit02spa/login" style={{color: "#fff"}} >
              <button className={MenuStyle.button} style={{display: isSignPage.display}}>
                Iniciar sesión
              </button>
            </Link>

          </div>
        </header>
      )
  }
}
