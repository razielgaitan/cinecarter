import React from "react";
import '../../styles/Presentation.css';
import { useNavigate } from "react-router-dom";
const Presentation = () => {

    const navigate = useNavigate();

  return (
    <div className="container-presentation d-flex justify-content-center flex-column align-items-center">
      <div className=" m-4 box text-center box-1">
        <h1>BIENVENIDO A CINECARTER</h1>
      </div>
      <div  className=" m-4 box-2">
        <p>
          Aqui podrás buscar una gran variedad de peliculas, pulsando en
          cada una verás su descripción, fecha de estreno y además pulsando en el icono de
          estrellita podras añadirla a tu sección de favoritos.
        </p>
      </div>
      <div  className=" m-4 box-3 text-center">
        <h4>Que lo disfrutes</h4>
      </div>
      <button className="button p-2" onClick={() => navigate('/home')}>Comenzar</button>
    </div>
  );
};

export default Presentation;
