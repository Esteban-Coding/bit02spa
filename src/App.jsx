import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { MovieDetails } from "./pages/MovieDetails";
import HeaderStyle from "./styles/Header.module.css"

function App() {
  return (  
      <BrowserRouter>
      <header className={HeaderStyle.menu}>
          <h1 className={HeaderStyle.emperia}>
            <Link to="/bit02spa">
              EMPERIA
            </Link>
          </h1>
      </header>
      <main>
        <Routes>
          <Route path="/bit02spa" element={<Home />} />
          <Route exact path="/bit02spa/movies/:movieId" element={<MovieDetails/>} />
        </Routes>
      </main>
      </BrowserRouter>
  );
}

export default App
