import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import Image from '../../images/social/uma.png'
import M from "materialize-css";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import Imgone from "../../images/social/Pictureuma.png";
import Imgtwo from "../../images/social/uma-01.png";
import Imgth from "../../images/social/uma-02.png";
import Imgfo from "../../images/social/uma-03.png";
import "../styles/banner.css"

class Uma extends Component {

    componentDidMount() {
        let instance = document.querySelectorAll(".slider");
    
        let options = {
          indicators: false,
          height: 500,
          transition: 500,
          interval: 6000,
        };

        window.scrollTo(0, 0);
    
        M.Slider.init(instance, options);
      }


    
    render() {
        const { t } = this.props;
        return (
            <section id="brigades" className="advice page-advice white scrollspy">
                <div className="container">
                    <div className="row">
                        <h4 className="center" >
                            <span className="black-text"><i>{t("uma.title")}</i></span>
                        </h4>
                        
                        <div className="col s12 m6">
                            <div className="left-align">
                                <p className="black-text"><strong>
                                {t("uma.texta")} </strong></p>
                                <p className="black-text"><strong>
                                {t("uma.textb")} </strong></p>
                                <p className="black-text"><strong>
                                Lic. Nancy Flores Sánchez </strong></p>
                                <p className="black-text"><strong>
                                nfloress@ipn.mx</strong></p>
                            </div>
                            <div className="slider" id="sustentabilidad">
                                <ul className="slides ">
                                    <li>
                                    <img src={Imgone} className="responsive-img" alt="Home-S2" />
                                    </li>
                                    <li>
                                    <img src={Imgtwo} className="responsive-img" alt="Home-S1" />
                                    </li>
                                    <li>
                                    <img src={Imgth} className="responsive-img" alt="Home-S2" />
                                    </li>
                                    <li>
                                    <img src={Imgfo} className="responsive-img" alt="Home-S2" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col s12 m6">
                            <img src={Image} alt="Home-S1" className=" responsive-img"/>
                        </div>
                    </div>
                </div>
                
            </section>
        )
    }
}
export default withTranslation("brig")(Uma);