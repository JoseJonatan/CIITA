import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import LabInt from '../../images/lab/labint.jpg';
import LabComp from '../../images/lab/labcom.jpg';
import LabMaq from '../../images/lab/labmaq.jpg';
import LabMet from '../../images/lab/labmet.jpg';
import LabMat from '../../images/lab/labmat.jpg';
import LabMan from '../../images/lab/labman.jpg';
import LabElec from '../../images/lab/labelec.jpg';
import LabEma from '../../images/lab/labema.jpg';

import '../styles/lab.css';
import { withTranslation } from 'react-i18next';

class Lab extends Component {

    componentDidMount(){
        window.scrollTo(0, 0);
    }
    
    render() {
        const { t } = this.props;

        return (
            <Fragment>
            <section id="laboratoty" className="section page-laboratory blue-grey lighten-5 scrollspy">
                  <div className="container">
                       <div className="row">
                            <h4 className="center">
                                <span className="black-text"><i>{t("labor.title")}</i></span>
                            </h4>
                            <h5 className="center">{t("labor.subtitle")}</h5>
                            
                            <div className="col s12 m6 l4 lab">
                            <div className="lab">
                                <div className="card">
                                    
                                <div className="card-image">
                                        <img src={LabInt} alt="LabOne" />
                                            <Link to="#" className="btn-floating activator halfway-fab waves-effect 
                                            waves-light blue darken-4">
                                            <i className="material-icons">add</i></Link>
                                    </div>
                                    <div className="card-content">
                                        <p><strong>{t("artificial.name")}</strong></p>
                                        <p>{t("artificial.text")}</p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-daken 4">{t("artificial.name")}
                                        <i className="material-icons right">close</i></span>
                                        <p>{t("artificial.content")}</p>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="col s12 m6 l4 lab" >
                            <div className="lab">
                                <div className="card">
                                
                                    <div className="card-image">
                                        <img src={LabComp} alt="LabOne" />
                                            <Link to="#" className="btn-floating activator halfway-fab waves-effect 
                                            waves-light blue darken-4">
                                            <i className="material-icons">add</i></Link>
                                    </div>
                                    <div className="card-content">
                                        <p><strong>{t("comp.name")}</strong></p>
                                        <p>{t("comp.text")}</p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-daken 4">{t("comp.name")}
                                        <i className="material-icons right">close</i></span>
                                        <p>{t("comp.content")}</p>
                                    </div>
                                    </div>
                                </div>
                            </div> 

                            <div className="col s12 m6 l4">
                            <div className="lab">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={LabMaq} alt="LabOne" />
                                            <Link to="#" className="btn-floating activator halfway-fab waves-effect 
                                            waves-light blue darken-4">
                                            <i className="material-icons">add</i></Link>
                                    </div>
                                    <div className="card-content">
                                        <p><strong>{t("machine.name")}</strong></p>
                                        <p>{t("machine.text")}</p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-daken 4">{t("machine.name")}
                                        <i className="material-icons right">close</i></span>
                                        <p>{t("machine.content")}</p>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col s12 m6 l4">
                            <div className="lab">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={LabMan} alt="ProyectOne" />
                                            <Link to="#" className="btn-floating activator halfway-fab waves-effect 
                                            waves-light blue darken-4">
                                            <i className="material-icons">add</i></Link>
                                    </div>
                                    <div className="card-content">
                                        <p><strong>{t("aditiva.name")}</strong></p>
                                        <p>{t("aditiva.text")}</p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-daken 4">{t("aditiva.name")}
                                        <i className="material-icons right">close</i></span>
                                        <p>{t("aditiva.content")}</p>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col s12 m6 l4">
                            <div className="lab">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={LabMat} alt="ProyectOne" />
                                            <Link to="#" className="btn-floating activator halfway-fab waves-effect 
                                            waves-light blue darken-4">
                                            <i className="material-icons">add</i></Link>
                                    </div>
                                    <div className="card-content">
                                        <p><strong>{t("analisis.name")}</strong></p>
                                        <p>{t("analisis.text")}</p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-daken 4">{t("analisis.name")}
                                        <i className="material-icons right">close</i></span>
                                        <p>{t("analisis.content")}</p>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col s12 m6 l4">
                            <div className="lab">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={LabElec} alt="ProyectOne" />
                                            <Link to="#" className="btn-floating activator halfway-fab waves-effect 
                                            waves-light blue darken-4">
                                            <i className="material-icons">add</i></Link>
                                    </div>
                                    <div className="card-content">
                                        <p><strong>{t("proto.name")}</strong></p>
                                        <p>{t("proto.text")}</p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-daken 4">{t("proto.name")}
                                        <i className="material-icons right">close</i></span>
                                        <p>{t("proto.content")}</p>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col s12 m6 l4">
                            <div className="lab">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={LabEma} alt="ProyectOne" />
                                            <Link to="#" className="btn-floating activator halfway-fab waves-effect 
                                            waves-light blue darken-4">
                                            <i className="material-icons">add</i></Link>
                                    </div>
                                    <div className="card-content">
                                        <p><strong>{t("emc.name")}</strong></p>
                                        <p>{t("emc.text")}</p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-daken 4">{t("emc.name")}
                                        <i className="material-icons right">close</i></span>
                                        <p>{t("emc.content")}</p>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col s12 m6 l4">
                            <div className="lab">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={LabMet} alt="ProyectOne" />
                                            <Link to="#" className="btn-floating activator halfway-fab waves-effect 
                                            waves-light blue darken-4">
                                            <i className="material-icons">add</i></Link>
                                    </div>
                                    <div className="card-content">
                                        <p><strong>{t("metro.name")}</strong></p>
                                        <p>{t("metro.text")}</p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-daken 4">{t("metro.name")}
                                        <i className="material-icons right">close</i></span>
                                        <p>{t("metro.content")}</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            
                       </div>
                  </div>              
            </section>
            </Fragment>
        )
    }
}
export default withTranslation("labo")(Lab);