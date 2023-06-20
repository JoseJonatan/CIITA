import React from "react";

import img1 from "../../images/icons/conacyt.png";
import img2 from "../../images/icons/inst-inn-comp-2.png";
import img3 from "../../images/icons/pleca-ipn.png";
import img4 from "../../images/icons/secre-inn-ec.png";
import img5 from "../../images/icons/unid-valor.png";

import "../styles/filaLogo.css";

const filaLogos = (props) => {
  return (
    <div className="section grey lighten-4 scrollspy">
      <div className="row logosHome">
        <div className="col s6 m3 ">
          <a href="http://www.chihuahua.com.mx/" className=" brand-logo">
          <img src={img4} className="imgfila " alt="img1" />
          </a>
        </div>
        <div className="col s6 m3 ">
          <a href="https://i2c.com.mx/" className=" brand-logo">
          <img src={img2} className="imgcomp" alt="img1" />
          </a>
        </div>
        <div className="col s6 m3 ">
          <a href="http://www.chihuahua.gob.mx/" className=" brand-logo">
          <img src={img5} className="imgunid" alt="img1" />
          </a>
        </div>
        <div className="col s6 m3">
          <a href="https://www.conacyt.gob.mx/" className=" brand-logo">
          <img src={img1} className="imgfila" alt="img1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default filaLogos;
