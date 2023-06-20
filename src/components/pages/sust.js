import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import Image from '../../images/social/comite.png'
import M from "materialize-css";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import "../styles/banner.css"
import Acta from '../../doc/acta.pdf';
import Comite from '../../doc/comite.pdf'
import { Link } from "react-router-dom";

class Sust extends Component {

    componentDidMount() {
        let instance = document.querySelectorAll(".slider");
    
        let options = {
          indicators: false,
          height: 500,
          transition: 500,
          interval: 6000,
        };
    
        M.Slider.init(instance, options);
        window.scrollTo(0, 0);
      }
    
    render() {
        const { t } = this.props;
        return (
            <section id="sustentabilidad" className="advice page-advice white scrollspy">
                <div className="container">
                    <div className="row">
                        <h4 className="center" >
                            <span className="black-text"><i>{t("sust.title")}</i></span>
                        </h4>
                        <br />
                        <p className="black-text"><strong>
                                    {t("sust.texta")} </strong></p>
                        
                        <div className="col s12 m6">
                            <div className="left-align">
                                <h5 className="light blue-text text-darken-4">
                                    {t("sust.subtitle")} </h5>
                                <p className="light black-text"><strong>
                                    {t("sust.textb")} </strong></p>
                                <h5 className="light blue-text text-darken-4">
                                    {t("sust.subtext")}</h5>
                                <p className="light black-text"><strong>
                                    {t("sust.textc")} </strong></p>
                            </div>
                        </div>
                        <div className="col s12 m6">
                            <img src={Image} alt="Home-S1" className=" responsive-img"/>
                        </div>

                        <Link
                            to= {Acta} target = "_blank"
                            className="btn btn-waves transparent black-text"
                            download="acta.pdf">
                            Acta Constitutiva Comité Ambiental CIITA Ciudad Juárez
                        </Link>
                        <br />
                        <Link
                            to= {Comite} target = "_blank"
                            className="btn btn-waves transparent black-text"
                            download="comite.pdf">
                            Programa de Actividades Nov 2020 - Dic 2021
                        </Link>
                    </div>
                </div>
                
            </section>
        )
    }
}
export default withTranslation("brig")(Sust);