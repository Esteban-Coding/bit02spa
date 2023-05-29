import { MoviesList } from "./components/MoviesList";
import AppStyle from "./styles/App.module.css"

function App() {
  return (
    <>
      <header>
        <h1 className={AppStyle.emperia}>EMPERIA</h1>
      </header>
      <main>
        <MoviesList />
      </main>
    </>
  );
}

export default App
