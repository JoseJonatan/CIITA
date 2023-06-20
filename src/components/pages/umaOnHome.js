import React, { Component } from 'react';

import bus from '../../images/assets/bus.gif';
import uma5 from '../../images/social/uma5.jpg';
import uma6 from '../../images/social/uma6.jpg';
import uma7 from '../../images/social/uma7.jpg';
import ImageGallery from 'react-image-gallery';

import {Link} from 'react-router-dom';

import { withTranslation } from 'react-i18next';

const images = [
    {
      original: uma5,
    },
    {
      original: uma6,
    },
    {
      original: uma7,
    },
  ];

class UmaOnHome extends Component {
    render() {

        const { t } = this.props;

        return (
            <section id="sectionSiani" className="section scrollspy">
                  <div className="container">
                        <div className="row">
                            <h4 className="center"><i>
                                <span className="white-text">{t("umaHome.tittle")}</span>
                                <br/></i>
                            </h4>
                        </div>

                        <div className="row"> 

                            <div className="col s12 m4">
                                <div className="card card-UMA">
                                    <div className="card-image">
                                        <img src={bus} alt=""></img>
                                    </div>
                                    <div className="card-content card-col card-UMA">
                                        <span className="white-text" style={{fontSize: "19px"}}>
                                            {t("umaHome.uma")}
                                        </span>
                                        <p style={{color: "#7D7DFD"}}>.</p>
                                        <p className="white-text" style={{textAlign: 'justify'}}>
                                            {t("umaHome.text1")}
                                        </p>
                                    </div>
                                    <div className="card-content card-col card-UMA center">
                                        <Link to="/uma" className="btn waves-effect waves-light pink darken-4">
                                            {t("umaHome.button")}
                                            <i class="material-icons right">send</i>
                                        </Link>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="col s12 m8">
                                <div className="card card-content-UMA">
                                    <div className="card-image">
                                        <ImageGallery 
                                            items={images} 
                                            slideInterval={5000}
                                            showFullscreenButton={false}
                                            showPlayButton={false}
                                            showBullets={false}
                                            showIndex={false}
                                            autoPlay={true}
                                            showThumbnails={false}
                                            showNav={false}
                                        />
                                    </div>

                                    <div className="card-content">
                                        <span className="white-text" style={{textAlign: 'justify'}}>
                                            {t("umaHome.text2")}
                                        </span>
                                    </div>

                                </div>
                                
                            </div>  

                       </div>
                  </div>              
            </section>
        )
    }
}
export default withTranslation("home")(UmaOnHome);