import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillStar } from "react-icons/ai";
import "../../styles/Header.css";
import Search from "../search/Search";

const Header = () => {

  return (
    <div className="container-lg header mb-3">
      <div className="row">
        <div className="col-6 d-flex align-items-center">
          <ul className="d-flex m-0">
            <li className="li-big p-1">
              <Link to="/home" className="link-text">
                Inicio
              </Link>
            </li>
            <li className="li-big p-1">
              <Link to="/favourites" className="link-text">
                Favoritos
              </Link>
            </li>
            <li className="li-mobile p-2">
              <Link to="/home" className="icon">
                <AiFillHome />
              </Link>
            </li>
            <li className="li-mobile p-2">
              <Link to="/favourites" className="icon">
                <AiFillStar />
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-6 d-flex align-items-center text-center">
          <Search/>
        </div>
      </div>
    </div>
   
  );
};

export default Header;
