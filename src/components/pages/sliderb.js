import React from "react";
import { Link } from 'react-router-dom';

import "../styles/banner.css";

import Imgone from "../../images/slider-home/auto.jpeg";
import Imgtwo from "../../images/slider-home/aero.jpg";
import Imgth from "../../images/slider-home/med.jpg";
import Imgfo from "../../images/slider-home/elec.jpg";
import Imgfiv from "../../images/slider-home/logi.jpg";


const slider = (props) => {
  return (
    <div className="hide-on-med-and-up">
    <div className="caption center-align white-text">
    <h4><i>Innovación y Desarrollo para tu Empresa</i></h4>
    </div>
      <div className="slidera hide-on-large-only">
        <ul>

          <li>
            <Link  to="/advice"><img src={Imgone}  alt="Home-S2" /></Link>   
          </li>
          <li>
            <Link  to="/advice"><img src={Imgtwo}  alt="Home-S3" /></Link>   
          </li>
          <li>
            <Link  to="/advice"><img src={Imgth}  alt="Home-S4" /></Link>   
          </li>
          <li>
            <Link  to="/advice"><img src={Imgfo}  alt="Home-S5" /></Link>   
          </li>
          <li>
            <Link  to="/advice"><img src={Imgfiv}  alt="Home-S6" /></Link>   
          </li>

        </ul>
      </div>
      <div className="caption center-align">
    <h5 className="light white-text">
    Soluciones integrales de vanguardia en proyectos tecnológicos para los sectores 
    productivos y de servicios de Chihuahua.  
    </h5>
    </div>
    </div>
  );
};

export default slider;