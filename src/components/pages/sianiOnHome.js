import React, { Component } from 'react';
import SianiLogo from '../../images/icons/logosiani.png';
import SianiVideo from '../../images/assets/SIANI2.mp4';
import {Link} from 'react-router-dom';

import { withTranslation } from 'react-i18next';

class SianiOnHome extends Component {
    render() {

        const { t } = this.props;

        return (
            <section id="sectionSiani" className="section scrollspy">
                  <div className="container">
                        <div className="row">
                            <h4 className="center"><i>
                                <span className="white-text">SIANI</span>
                                <br/></i>
                            </h4>
                        </div>

                        <div className="row"> 

                            <div className="col s12 l3">
                                <div 
                                    className="card hide-on-med-and-down"
                                    style={{backgroundColor: 'rgba(255, 255, 0, 0)',boxShadow: 'none'}}
                                >
                                    <div className="card-image" style={{width:"100%"}}>
                                        <img src={SianiLogo} alt="Logo" style={{padding: 20}}></img>
                                    </div>
                                </div>
                            </div>

                            <div className="col s12 l9">
                                <div className="card-panel blue-grey lighten-4">
                                    
                                    <p className="black-text" style={{fontSize: "20px"}}> {t("sianiHome.tittle1")}</p>
                                    <div className="card-content card-col blue-grey lighten-4" style={{fontSize: "16px"}}>     
                                    <p style={{textAlign: 'justify'}}>
                                        {t("sianiHome.text1")}
                                    </p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="row"> 

                            <div className="col s12 m12 l8">
                                <div className="card blue-grey lighten-4">
                                    <div className="card-image">
                                        <video width="100%" autoPlay loop muted>
                                            <source src={SianiVideo} type='video/mp4' />
                                        </video>
                                    </div>
                                </div>
                            </div>

                            <div className="col s12 m12 l4">
                                <div className="card-panel blue-grey lighten-4 center">
                                    <i class="far fa-handshake fa-3x" ></i>
                                    <div className="card-content card-col blue-grey lighten-4">
                                        <span className="black-text" style={{fontWeight: "bold"}}>
                                            {t("sianiHome.tittle2")}
                                        </span>
                                        <p className="black-text" style={{textAlign: 'justify'}}>
                                            {t("sianiHome.text2")}
                                        </p>
                                    </div>

                                    <div className="card-content card-col blue-grey lighten-4 center">
                                        <Link to="/log" className="btn waves-effect waves-light pink darken-4">Ir
                                            <i class="material-icons right">send</i>
                                        </Link>
                                    </div>
                                    
                                    
                                </div>
                            </div>

                       </div>
                  </div>              
            </section>
        )
    }
}
export default withTranslation("home")(SianiOnHome);