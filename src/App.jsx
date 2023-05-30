import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { MovieDetails } from "./pages/MovieDetails";
import HeaderStyle from "./styles/Header.module.css"

function App() {
  return (  
      <BrowserRouter>
      <header>
        <Link to="/">
          <h1 className={HeaderStyle.emperia}>EMPERIA</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/movies/:movieId" element={<MovieDetails/>} />
        </Routes>
      </main>
      </BrowserRouter>
  );
}

export default App
