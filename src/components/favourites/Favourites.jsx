import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import '../../styles/Favourites.css';

const Favourites = (props) => {
  return (
    <>
        { props.favouritesMovies.length === 0 && (
          <div>
            <h4 style={{color: '#ffffff', textAlign: 'center'}}>No hay peliculas en la sección favoritos</h4>
            <p style={{color: '#ffffff',textAlign: 'center'}}>Busca tus pelis favoritas y pulsa en la estrella para añadirlas aqui</p>
          </div>
        )}
    <div className="container-lg">
      <div className="row gy-5 mb-4">
        {props.favouritesMovies.map((movie, index) => (
          <div className="col-sm d-flex justify-content-center" key={index}>
            <div class="card-vertical">
              <div class="card-front">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.image}`}
                  class=""
                  alt="..."
                />
              </div>
              <div class="card-back">
                <button
                  className="btn btn-secondary m-2 p-0"
                  onClick={props.clickFavButton}
                  data-id={movie.id}
                  style={{
                    position: "absolute",
                    background: "transparent",
                    border: "none",
                    color: '#92fff6',
                  }}
                >
                  <AiFillStar style={{ fontSize: '1.5em' }}/>
                </button>
                <article class="card-back-content">
                  <h2 className="text-center mt-5">{movie.title}</h2>
                  <p className="text-center">
                    {movie.releaseDate}
                  </p>
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
}

export default Favourites;
