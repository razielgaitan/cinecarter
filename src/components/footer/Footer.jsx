import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineCopyrightCircle,
  AiOutlineInstagram,
} from "react-icons/ai";
import "../../styles/Footer.css";

const Footer = () => {
  let currentTime = new Date();
  let year = currentTime.getFullYear();

  return (
    <footer className="footer">
      <div className="m-2">
        <h5>Contáctame</h5>
        <a
          href="mailto:ivangaitan.kp@gmail.com"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          ivangaitan.kp@gmail.com
        </a>
        <div>
          <a href="https://www.instagram.com/razielgaitan" target="blank">
            <AiOutlineInstagram className="icon" />
          </a>
          <a
            href="https:www.linkedin.com/in/raziel-ivan-gaitan/"
            target="blank"
          >
            <AiFillLinkedin className="icon" />
          </a>
          <a href="https:github.com/razielgaitan" target="blank">
            <AiFillGithub className="icon" />
          </a>
        </div>
      </div>
      <div className="text-center d-flex justify-content-center m-2">
        <span className="copy-icon">
          <AiOutlineCopyrightCircle
            style={{ paddingBottom: ".5em", fontSize: "1.5em" }}
          />
          {year}
        </span>
        <p className="">Todos los derechos reservados.</p>
      </div>
    </footer>
    // <footer className="footer p-2">
    //   <h6>Proyecto realizado por Raziel Ivan Gaitan</h6>
    //   <div className="d-flex justify-content-between">
    //     <span style={{ color: "#fff" }}>
    //       <AiOutlineCopyrightCircle className="copy-icon" /> Copyright
    //     </span>
    //     <a
    //       href="mailto:ivangaitan.kp@gmail.com"
    //       style={{ textDecoration: "none", color: "#fff" }}
    //     >
    //       ivangaitan.kp@gmail.com
    //     </a>
    //     <div>
    //       <a href="https://www.instagram.com/razielgaitan" target="blank">
    //         <AiOutlineInstagram className="icon" />
    //       </a>
    //       <a
    //         href="https://www.linkedin.com/in/raziel-ivan-gaitan/"
    //         target="blank"
    //       >
    //         <AiFillLinkedin className="icon" />
    //       </a>
    //       <a href="https://github.com/razielgaitan" target="blank">
    //         <AiFillGithub className="icon" />
    //       </a>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
