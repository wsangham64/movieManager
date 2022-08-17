import NavBar from "./Components/NavBar";
import MovieCard from "./Components/MovieCard";

// import Sangham from "./Temp";

function App() {
  return (
    <>
      <NavBar />

      <div style={{ display: "flex" }}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </>
  );
}

export default App;
