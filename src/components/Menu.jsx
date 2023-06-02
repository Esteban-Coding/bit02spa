import { Link, useNavigate } from "react-router-dom";
import MenuStyle from "../styles/Menu.module.css"

export const Menu = ({ LoggedIn, setLoggedIn, User }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false)
    navigate("/bit02spa/")
  }

  let isHomePage = {result: "", typeCursor: ""};
  let isSignPage = {result: "", display: ""};

  if (isHomePage.result) {
    isHomePage.typeCursor = "unset";
  }

  if (isSignPage.result) {
    isSignPage.display = "none";
  }

  if (LoggedIn.UserLogIn) {
    return (
      <header className={MenuStyle.menu}>
        <div className={MenuStyle.container}>
          <h1 className={MenuStyle.emperia}>
            <Link to="/bit02spa/browser" style={{cursor: isHomePage.typeCursor}}>
              EMPERIA
            </Link>
          </h1>
          <div className={MenuStyle.items}>
            <Link to="/bit02spa/cart" style={{color: "#fff"}}>
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            <span onClick={handleLogout} className={MenuStyle.username}>
              {User.name}
            </span>
          </div>
        </div>
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
