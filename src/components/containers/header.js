import React from "react";
import imp from "../../images/icons/gobmxlogo.svg";
import "../styles/header.css"

function header() {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper grey lighten-2 black-text">
          <a href="https://www.gob.mx/" className=" brand-logo    ">
            <img
              className="margin center"
              src={imp}
              height="40px"
              alt="Página de inicio, Gobierno de México"
            ></img>
          </a>

          <ul id="nav-mobile" className="right hide-on-med-and-down marginul">
            <li>
              <a className="black-text" href="https://www.gob.mx/tramites">Trámites</a>
            </li>
            <li>
              <a className="black-text" href="https://www.gob.mx/gobierno">Gobierno</a>
            </li>
            <li>
              <a className="black-text" href="https://www.gob.mx/participa">Participa</a>
            </li>
            <li>
              <a className="black-text"href="https://datos.gob.mx">Datos</a>
            </li>
            <li>
              <a className="black-text" href="https://www.gob.mx/busqueda">
                <i className="material-icons">search</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default header;
