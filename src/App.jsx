import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Browser } from "./pages/Browser";
import { MovieDetails } from "./pages/MovieDetails";

function App() {
  return (  
      <BrowserRouter>
      <Menu />
      <main>
        <Routes>
          <Route path="/bit02spa" element={<Home />} />
          <Route path="/bit02spa/browser" element={<Browser />} />
          <Route path="/bit02spa/login" element={<Login />} />
          <Route path="/bit02spa/signup" element={<SignUp />} />
          <Route exact path="/bit02spa/movies/:movieId" element={<MovieDetails/>} />
        </Routes>
      </main>
      </BrowserRouter>
  );
}

export default App
