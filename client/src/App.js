import NavBar from "./Components/NavBar";
import MovieCard from "./Components/MovieCard";
import WatchedList from "./Components/WatchedList";
import WishList from "./Components/WishList";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

// import Sangham from "./Temp";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="watched-list" element={<WatchedList />} />
          <Route path="login" element={<Login />} />
          <Route path="wish-list" element={<WishList />} />
          {/* "Home", "Wish-list", "Watched-list", "Login" */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
