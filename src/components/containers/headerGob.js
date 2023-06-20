import React from "react";
import img1 from "../../images/icons/pleca-gob.png";
import img2 from "../../images/icons/pleca-ipn.png";
import img3 from "../../images/icons/ciita.png";
import mex from "../../images/icons/mex.png";
import eua from "../../images/icons/eua.png";
import { useTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';

import "../styles/filagob.css";

const FilaGob = () => {
  const [, i18n] = useTranslation("navb");

  return (

    <div  id="headergob" className="section grey lighten-3 hide-on-med-and-down">
      <div className="row">
        <div className="col s4 m2 l3 offset-l2">
          <a href="https://www.gob.mx/" className=" brand-logo">
          <img src={img1} className="imgob" alt="img1" />
          </a>
        </div>
        <div className="col s4 m2 l1 offset-l1">
          <a href="https://www.ipn.mx/" className=" brand-logo">
          <img src={img2} className="imgpol" alt="img1" />
          </a>
        </div>
        <div className="col s4 m2 offset-l1">
          <a href="https://ciitachihuahua.ipn.mx/" className=" brand-logo">
          <img src={img3} className="imgciita" alt="img1" />
          </a>
        </div>

        <div className="switch">
              <p>
                  <label className="flags">
                    <input name="group1" type="radio"
                      onChange={() => i18n.changeLanguage('es')}/>
                      <img src={mex} className="flags" alt="Imgmex" />
                    </label>
                    <label>
                      <input name="group1" type="radio" 
                      onChange={() => i18n.changeLanguage('en')}/>
                      <img src={eua} className="flags" alt="Imgeua" />
                  </label>
              </p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(FilaGob); 

