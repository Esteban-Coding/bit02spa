import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Home } from "./pages/Home";
import { LogIn } from "./pages/LogIn";
import { SignUp } from "./pages/SignUp";
import { Browser } from "./pages/Browser";
import { MovieDetails } from "./pages/MovieDetails";

function App() {
  const [User, setUser] = useState({name: ""});
  const [LoggedIn, setLoggedIn] = useState({UserLogIn: false});

  const Users = [{
    id: 0,
    name: "Example",
    email: "email@example.com",
    password: "example"
  }]

  const NewUser = (User) => {
    if (!Users.find(Users => Users.email === User.email)) {
      Users.push(User);
    }
  }

  return (  
      <BrowserRouter>
      <Menu LoggedIn={LoggedIn} setLoggedIn={setLoggedIn} User={User}/>
      <main>
        <Routes>
          <Route path="/bit02spa" element={<Home />} />
          <Route path="/bit02spa/browser" element={<Browser />} />
          <Route path="/bit02spa/login" element={<LogIn Users={Users} setUser={setUser} setLoggedIn={setLoggedIn} />} />
          <Route numero="0" path="/bit02spa/signup" element={<SignUp NewUser={NewUser} setUser={setUser} setLoggedIn={setLoggedIn}/>} />
          <Route exact path="/bit02spa/movies/:movieId" element={<MovieDetails/>} />
        </Routes>
      </main>
      </BrowserRouter>
  );
}

export default App
