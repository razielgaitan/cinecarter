import React, { useEffect, useState } from "react";
import "../../styles/Home.css";
import { AiFillStar } from "react-icons/ai";

const Home = (props) => {
  

  const [favouritesMovies, setFavouritesMovies] = useState([]);

  useEffect(() => {
    
    const favsInLocal = localStorage.getItem("fav");
    if (favsInLocal) {
      const favArray = JSON.parse(favsInLocal);
      setFavouritesMovies(favArray);
    }
    
  }, []);

  let favouritesMoviesIds = [];

  favouritesMovies.map((movieFav) => favouritesMoviesIds.push(movieFav.id));

  return (
    <>
      {props.movies.length === 0 && (
        <div class="d-flex align-items-center">
          <strong>Loading...</strong>
          <div class="spinner-grow text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-info" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-light" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-dark" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div className="container-lg">
        <div className="row gy-5 mb-4">
          {props.movies.map((movie, index) => (
            <div className="col-sm d-flex justify-content-center" key={index}>
              <div class="card-vertical">
                <div class="card-front">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    class=""
                    alt="..."
                  />
                </div>
                <div class="card-back">
                  {favouritesMoviesIds.includes(movie.id.toString()) ? (
                    <button
                      className="btn btn-secondary m-2 p-0"
                      onClick={props.clickFavButton}
                      data-id={movie.id}
                      style={{
                        position: "absolute",
                        background: "transparent",
                        border: "none",
                        color: "#92fff6",
                      }}
                    >
                      <AiFillStar style={{ fontSize: "1.5em" }} />
                    </button>
                  ) : (
                    <button
                      className="btn btn-secondary m-2 p-0"
                      onClick={props.clickFavButton}
                      data-id={movie.id}
                      style={{
                        position: "absolute",
                        background: "transparent",
                        border: "none",
                        color: "#ffffff",
                      }}
                    >
                      <AiFillStar style={{ fontSize: "1.5em" }} />
                    </button>
                  )}

                  <article class="card-back-content">
                    <h2 className="text-center mt-5">{movie.title}</h2>
                    <p className="text-center">{movie.release_date}</p>
                    <p className="text-center p-2">{movie.overview}</p>
                  </article>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
