import React, { Component } from "react";
import "../styles/banner.css";
import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';

import Imgfour from "../../images/slider-home/5.png";
import Vac2 from "../../images/slider-home/4.png"; 
import banner_b from "./../../images/slider-home/1.png"
import dev from "./../../images/slider-home/banner_p.jpeg"
import banner_c from "./../../images/slider-home/2.png"
import banner_d from "./../../images/slider-home/3.png"

import Particles from 'react-particles-js';

import { withTranslation } from 'react-i18next';

const images = [
  {
    original: dev,
    thumbnail: dev,
  },
  {
    original: banner_b,
    thumbnail: banner_b,
  },
  {
    original: banner_c,
    thumbnail: banner_c,
  },
  {
    original: banner_d,
    thumbnail: banner_d,
  },
  {
    original: Vac2,
    thumbnail: Vac2,
  },
  {
    original: Imgfour,
    thumbnail: Imgfour,
  },
];

const params={
  particles: {
      number: {
          value: 50
      },
      size: {
          value: 3
      },
      move:{
        random:true,
        speed: 2,
        out_mode: "out"
      }
  }

}
class Banner extends Component {

  _onImageClick(event) {
    //console.log('clicked on image', event.target,'at index', this._imageGallery.getCurrentIndex());
    // eslint-disable-next-line default-case
    switch(this._imageGallery.getCurrentIndex()){
      case 0: window.open("https://www.polivirtual-ipn.mx/polivirtual/proceso-de-admision.html"); break;
    }
  }

  render() {

    const { t } = this.props;
  
    return (
      <section
        id="homenews"
        className="section section-homenews-curses scrollspy">
          <Particles 
            params={params}
            className="particles"
          ></Particles>
          <h4 className="center">
              <span className="white-text"><i>{t("bannercom.title")}</i></span>
            </h4>
        <div className="row banner-and-cap">
          <div className="col s12 m12 l9">
            
            <ImageGallery 
              ref={i => this._imageGallery = i}
              items={images} 
              slideInterval={7000}
              showFullscreenButton={false}
              showPlayButton={false}
              showBullets={true}
              showIndex={true}
              autoPlay={true}
              onClick={this._onImageClick.bind(this)}
            />

          </div>

          <div className="col s12 l3  hide-on-med-only">
            <div className="slid card-panel blue-grey-text text-lighten-4 center">
                <i className="fas fa-book-reader fa-3x"></i>
                <h5>{t("bannercom.boxtitle")}</h5>
                <p style={{textAlign: 'justify'}}>
                <strong>
                {t("bannercom.paragraph")}
                </strong>
                </p>
                <p >
                {t("bannercom.text")}
                </p>
                <li style={{textAlign: 'justify'}}>{t("bannercom.texta")}</li>
                <li style={{textAlign: 'justify'}}>{t("bannercom.textb")}</li>
                <li style={{textAlign: 'justify'}}>{t("bannercom.textc")}</li>
                <br />
                <Link to="/curse" className="btn btn-waves pink darken-4">{t("btn.learn")}</Link>
            </div>
        </div> 


        </div>
      </section>
    );
  }
}
export default withTranslation("home")(Banner);
