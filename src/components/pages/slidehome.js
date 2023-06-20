import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../styles/style.css";

import Render from '../../images/slider-home/slide-1.jpg';
import Imgone from '../../images/slider-home/auto.jpeg';
import Imgtwo from '../../images/slider-home/aero.jpg';
import Imgthree from '../../images/slider-home/med.jpg';
import Imgfour from '../../images/slider-home/elec.jpg';
import Imgfive from '../../images/slider-home/logi.jpg';
import Imgsix from '../../images/slider-home/MisionVirtualBanner.png';

import Foto1 from "../../images/slider-home/photo.jpg"; 

import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import { withTranslation } from 'react-i18next';

import M from 'materialize-css';



class SlideHome extends Component {

    componentDidMount(){
        var elems = document.querySelectorAll('.slider');
        M.Slider.init(elems,{
            indicators: false,
            height: 500,
            transition: 500,
            interval: 6000
          });
          window.scrollTo(0, 0);
        //M.AutoInit();
    }

    render() {

        const { t } = this.props;

        return (
            <div className="hide-on-small-only">
            <section className="slider" id="home">
            <ul className="slides">
                <li>
                    <img src={Render} alt="Home-S" className="img-banner-home"/>
                    <div className="caption center-align white-text">
                        <h2>{t("banner.title")}</h2>
                        <h5 className="white-text">
                        <em>{t("banner.subtitle")}</em>
                        <h2 className="transparent-text">.</h2>
                        </h5>
                        <Link to="/meet" className="btn btn-waves pink darken-4">{t("btn.name")}</Link>
                    </div>
                </li>
                <li>
                    <img src={Imgsix} alt="Home-S6" className="img-banner-home"/>
                    <div className="caption left-align white-text">
                        <h2>{t("bannerMision.title")}</h2>
                        <h5 className="white-text">
                        <em><strong>{t("bannerMision.subtitle")}</strong> </em>  
                        </h5>
                        <h2 className="transparent-text">.</h2>
                        <Link to="/mision-virtual" className="btn btn-waves pink darken-4">{t("btn.name")}</Link>
                    </div>
                </li>

                <li>
                    <img src={Foto1} alt="Home-S1" className="img-banner-home"/>
                    <div className="caption center-align white-text">
                        <h2>{t("carousel.title")}</h2>
                        <h5 className="white-text">
                        <em><strong>{t("carousel.subtitle")}</strong> </em>  
                        </h5>
                        <h2 className="transparent-text">.</h2>
                        <Link to="/advice" className="btn btn-waves pink darken-4">{t("btn.name")}</Link>
                    </div>
                </li>
                
                <li>
                    <img src={Imgone} alt="Home-S1" className="img-banner-home"/>
                    <div className="caption right-align white-text">
                        <h2>{t("carousel.title")}</h2>
                        <h5 className="white-text">
                        <em><strong>{t("carousel.subtitle")}</strong> </em>  
                        </h5>
                        <h2 className="transparent-text">.</h2>
                        <Link to="/advice" className="btn btn-waves pink darken-4">{t("btn.name")}</Link>
                    </div>
                </li>
                <li>
                    <img src={Imgtwo} alt="Home-S2" className="img-banner-home"/>
                    <div className="caption left-align white-text">
                        <h2>{t("carousel.title")}</h2>
                        <h5 className="white-text">
                        <em><strong>{t("carousel.subtitle")}</strong> </em>  
                        </h5>
                        <h2 className="transparent-text">.</h2>
                        <Link to="/advice" className="btn btn-waves pink darken-4">{t("btn.name")}</Link>
                    </div>
                </li>
                <li>
                    <img src={Imgthree} alt="Home-S3" className="img-banner-home"/>
                    <div className="caption right-align white-text">
                        <h2>{t("carousel.title")}</h2>
                        <h5 className="white-text">
                        <em><strong>{t("carousel.subtitle")}</strong> </em>   
                        </h5>
                        <h2 className="transparent-text">.</h2>
                        <Link to="/advice" className="btn btn-waves pink darken-4">{t("btn.name")}</Link>
                    </div>
                </li>
                <li>
                    <img src={Imgfour} alt="Home-S4" className="img-banner-home"/>
                    <div className="caption center-align white-text">
                        <h2>{t("carousel.title")}</h2>
                        <h5 className="white-text">
                        <em><strong>{t("carousel.subtitle")}</strong> </em> 
                        </h5>
                        <h2 className="transparent-text">.</h2>
                        <Link to="/advice" className="btn btn-waves pink darken-4">{t("btn.name")}</Link>
                    </div>
                </li>
                <li>
                    <img src={Imgfive} alt="Home-S5" className="img-banner-home"/>
                    <div className="caption left-align white-text">
                        <h2>{t("carousel.title")}</h2>
                        <h5 className="white-text">
                        <em><strong>{t("carousel.subtitle")}</strong> </em>  
                        </h5>
                        <h2 className="transparent-text">.</h2>
                        <Link to="/advice" className="btn btn-waves pink darken-4">{t("btn.name")}</Link>
                    </div>
                </li>
                
            </ul>
        </section>
        </div>
        )
    }
}
export default withTranslation("home")(SlideHome);