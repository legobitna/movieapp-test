import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MoiveBoard from "./components/MovieBoard"

const apikey = process.env.REACT_APP_APIKEY;
function App() {
  let [movieList, setMovieList] = useState(null);

  const callMovie = async () => {
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US&page=1`;

    let result = await fetch(url);
    let data = await result.json();
    console.log("data", data);

    setMovieList(data.results);
  };

  useEffect(() => {
    callMovie();
  }, []);

  if (movieList == null) {
    return <h2>loading...</h2>;
  }

  return (
    <div>
      <h1>Bitna's Movie Cinema</h1>
      {/* <Navigation/>
      <FilterBoard/> */}
      <MoiveBoard movieList={movieList}/>
       
    </div>
  );
}

export default App;
