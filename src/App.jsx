import React from "react";
import MovieList from "./components/MovieList";
import Upcoming from "./components/Upcoming";
import "./App.css";

function App() {
  return (
    <>
    <div className="App">
      <MovieList /><br />
    </div>
    <div>
      <Upcoming />
    </div>
    </>

  );
}

export default App;
