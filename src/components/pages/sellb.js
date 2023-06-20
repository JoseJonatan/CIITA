import React from "react";
import { Link } from 'react-router-dom';
import "../styles/banner.css";
import Imgone from "../../images/covid/visor-b.jpg";
import Imgtwo from "../../images/covid/tapete-b.jpg";
import videoOne from "../../video/video-1.mp4";

const slider = (props) => {
  return (
    <div className="hide-on-large-only" >
      <div className="sliderb">

      <div className="col s12 m5">
            <h4 className="center">
              <span className="pink-dark darken-4">El CIITA</span> de Ciudad
              Juárez frente al Covid-19
            </h4>
            <video className="responsive-video" controls>
              <source
                src={videoOne}
                width="100%"
                height="auto"
                type="video/mp4"
              />
            </video>
      </div>

        <ul>

          <li>
            <Link  to="/covi"><img src={Imgone}  alt="Home-S1" /></Link>   
          </li>
          <li>
            <Link  to="/covi"><img src={Imgtwo}  alt="Home-S1" /></Link>   
          </li>

        </ul>
      </div>

    </div>
  );
};

export default slider;