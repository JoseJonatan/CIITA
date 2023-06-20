import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import M from "materialize-css";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import "../styles/banner.css";
import { Link } from "react-router-dom";
import videoOne from "../../video/video-1.mp4";
import Imgone from "../../images/covid/visor-b.jpg";
import Imgtwo from "../../images/covid/tapete-b.jpg";

import { withTranslation } from 'react-i18next';

class Sell extends Component {

  componentDidMount() {
    let instance = document.querySelectorAll(".slider");

    let options = {
      indicators: false,
      height: 500,
      transition: 500,
      interval: 6000,
    };

    M.Slider.init(instance, options);
  }

  render() {

    const { t } = this.props;

    return (
      <section
        id="covidnews"
        className="section section-covidnews-video blue-grey lighten-3 hide-on-med-and-down scrollspy">
        <div className="row">
          <div className="col s12 m3 offset-m2 offset-l1">
            <h4 className="center"><i>
              <span className="">{t("covid.title")}</span>
              </i></h4>
            <video className="responsive-video" controls>
              <source
                src={videoOne}
                width="100%"
                height="auto"
                type="video/mp4"
              />
            </video>
          </div>

          <div className="col s6 m7">
            <div className="white">
              <div className="slider" id="home">
                <ul className="slides blue-grey lighten-3">
                  <li>
                    <img src={Imgone} className="responsive-img" alt="Home-S2" />
                    <div className="caption right-align black-text">
                      <h2 className="transparent-text">.</h2>
                      <h2 className="transparent-text">.</h2>
                      <Link
                        to="/covi"
                        className="btn btn-waves light-blue darken-4">
                        {t("btn.get")}
                      </Link>
                    </div>
                  </li>

                  <li>
                    <img src={Imgtwo} className="responsive-img" alt="Home-S1" />
                    <div className="caption right-align black-text">
                      <h2 className="transparent-text">.</h2>
                      <h2 className="transparent-text">.</h2>
                      <Link
                        to="/covi"
                        className="btn btn-waves light-blue darken-4">
                        {t("btn.get")}
                      </Link>
                    </div>
                  </li>

                  <li>
                    <img src={Imgone} className="responsive-img" alt="Home-S2" />
                    <div className="caption right-align black-text">
                      <h2 className="transparent-text">.</h2>
                      <h2 className="transparent-text">.</h2>
                      <Link
                        to="/covi"
                        className="btn btn-waves light-blue darken-4">
                        {t("btn.get")}
                      </Link>
                    </div>
                  </li>

                  <li>
                    <img src={Imgtwo} className="responsive-img" alt="Home-S2" />
                    <div className="caption right-align black-text">
                      <h2 className="transparent-text">.</h2>
                      <h2 className="transparent-text">.</h2>
                      <Link
                        to="/covi"
                        className="btn btn-waves light-blue darken-4">
                        {t("btn.get")}
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default withTranslation("home")(Sell);
