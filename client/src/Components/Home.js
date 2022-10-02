import MovieCard from "./MovieCard";

function Home() {
  return (
    <>
      <h1>this si Home</h1>
      <div style={{ display: "flex" }}>
        <MovieCard />

        <MovieCard />
        <MovieCard />
      </div>
    </>
  );
}

export default Home;
