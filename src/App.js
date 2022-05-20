import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import Favourite from "./components/favourites/Favourites";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Presentation from "./components/presentation/Presentation";
import Result from "./components/results/Result";

function App() {
  
  const [movies, setMovies] = useState([]);
  const [favouritesMovies, setFavouritesMovies] = useState([]);

  useEffect(() => {
    const endPoint =
      "https://api.themoviedb.org/3/discover/movie?api_key=8bfefb7f97ff4d66b7f58f759c72f9ab&language=es-ES";
    axios.get(endPoint).then((response) => setMovies(response.data.results));

    const favsInLocal = localStorage.getItem("fav");

    if (favsInLocal) {
      const favArray = JSON.parse(favsInLocal);
      setFavouritesMovies(favArray);
    }
  }, []);

  const clickFavButton = (e) => {
    const favMovies = localStorage.getItem("fav");
    let tempFav;

    if (favMovies === null) {
      tempFav = [];
    } else {
      tempFav = JSON.parse(favMovies);
    }
    const article = e.currentTarget.nextSibling;
    const cardFront = e.currentTarget.parentElement.previousSibling;
    let image = cardFront.querySelector("img").getAttribute("src");
    let title = article.querySelector(":nth-child(1)").innerText;
    let releaseDate = article.querySelector(":nth-child(2)").innerText;
    let overview = article.querySelector(":nth-child(3)").innerText;
    let id = e.currentTarget.dataset.id;

    const movieData = {
      image,
      title,
      releaseDate,
      overview,
      id,
    };

    let movieIsInArray = tempFav.find((movie) => {
      return movie.id === movieData.id;
    });

    if (!movieIsInArray) {
      e.currentTarget.style.color = "#92fff6";
      tempFav.push(movieData);
      localStorage.setItem("fav", JSON.stringify(tempFav));
      setFavouritesMovies(tempFav);
    } else {
      e.currentTarget.style.color = "#ffffff";
      let moviesLeft = tempFav.filter((movie) => {
        return movie.id !== movieData.id;
      });
      localStorage.setItem("fav", JSON.stringify(moviesLeft));
      setFavouritesMovies(moviesLeft);
    }
  };
  let location = useLocation();

  return (
    <>
      {location.pathname === "/" ? null : <Header />}

      <Routes>
        <Route exact path="/" element={<Presentation />} />
        <Route
          exact
          path="/home"
          element={<Home movies={movies} clickFavButton={clickFavButton} />}
        />
        <Route
          path="/results"
          element={<Result clickFavButton={clickFavButton} />}
        />
        <Route
          path="/favourites"
          element={
            <Favourite
              favouritesMovies={favouritesMovies}
              clickFavButton={clickFavButton}
            />
          }
        />
      </Routes>
      {location.pathname === "/" ? null : <Footer />}
    </>
  );
}

export default App;
