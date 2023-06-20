import React, { useEffect } from 'react';
import Slider from '../../../images/MisionVirtual/Banner/cover3.png';
import M from 'materialize-css';
import { withTranslation } from 'react-i18next';


const Banner = (props) => {

    useEffect(() => {
        var elems = document.querySelectorAll('.slider');
        M.Slider.init(elems,{
            indicators: false,
            height: 500,
            transition: 500,
            interval: 6000
          });
    }, []);

    const { t } = props;

    return (
        <section className="slider">
            <ul className="slides">
                <li className="banner1">
                    <img src={Slider} alt="Mision" className="Banner img-banner-mision"/>
                    <div className="caption left-align white-text">
                        <h2>{t("banner.tittle")} <br/> {t("banner.tittle2")}</h2>
                        <br/>
                        <h4>{t("banner.subtittle")} <br/> {t("banner.subtittle2")}</h4>
                    </div>
                </li>
            </ul>
        </section>  
    );
  }
  
  export default withTranslation("mision")(Banner);