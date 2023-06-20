import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import Consejo from '../../images/advice/consejo.png'
import Vite from '../../images/advice/Vitesco_Logo.svg'
import delphi from '../../images/advice/delphi.png'
import lexmark from '../../images/advice/lexmark.png'
import commscope from '../../images/advice/commscope.jpg'
import seisa from '../../images/advice/seisa.png'
import visteon from '../../images/advice/visteon.png'
import tyco from '../../images/advice/tyco.png'
import siemens from '../../images/advice/siemens.png'
import rexmed from '../../images/advice/rexmed.png'
import tamuse from '../../images/advice/tamuse.jpg'
import microsoft from '../../images/advice/microsoft.png'

class Advice extends Component {
    
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render() {
        const { t } = this.props;
        return (
            <section id="advice" className="advice page-advice white scrollspy">
                <div className="container">
                    <div className="row">
                        <h4 className="center" >
                            <span className="black-text"><i>{t("comm.title")}</i></span>
                        </h4>
                        
                        <div className="col s12 m6">
                            <div className="caption left-align black-text">
                                <h4>{t("comm.subtitle")}</h4>
                                <h5 className="light blue-text text-darken-4">
                                    {t("comm.texta")} </h5>
                                <h5 className="light blue-text text-darken-4">
                                    {t("comm.textb")} </h5>
                                <h5 className="light blue-text text-darken-4">
                                    {t("comm.textc")} </h5>
                                <h5 className="light blue-text text-darken-4">
                                    {t("comm.textd")} </h5>
                            
                            </div>
                        </div>
                        <div className="col s12 m12 l6">
                            <br/>
                            <br/>
                            <img src={Consejo} alt="Home-S1" className=" responsive-img"/>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <h4 className="center" >
                            <span className="black-text"><i>{t("colab.title")}</i></span>
                        </h4>
                        <br />
                        <div className="col s12 m6">
                            <div className="caption left-align black-text">
                                    <h4>{t("colab.subtitle")}</h4>
                                <h5 className="light blue-text text-darken-4">
                                        {t("colab.texta")}</h5>
                                <h5 className="light blue-text text-darken-4">
                                        {t("colab.textb")}
                                </h5>
                            </div>
                        </div>
                            <div className="col s12 m2">
                                
                                <div className="center-align">
                                    <img src={Vite} alt="Home-S1" className=" responsive-img"/>
                                </div>
                                <div className="center-align">
                                    <img src={delphi} alt="Home-S2" className=" responsive-img"/>
                                </div>
                                <div className="center-align">
                                    <img src={lexmark} alt="Home-S2" className=" responsive-img"/>
                                </div>
                                <div className="center-align">
                                    <img src={commscope} alt="Home-S2" className=" responsive-img"/>
                                </div>
                            </div>
                            <div className="col s12 m2">
                                <div className="center-align">
                                    <img src={seisa} alt="Home-S2" className=" responsive-img"/>
                                </div>
                                <div className="center-align">
                                    <img src={visteon} alt="Home-S2" className=" responsive-img"/>
                                </div>
                                <div className="center-align">
                                    <img src={siemens} alt="Home-S2" className=" responsive-img"/>
                                </div>
                                <div className="center-align">
                                    <img src={rexmed} alt="Home-S2" className=" responsive-img"/>
                                </div>
                            </div>
                        
                            <div className="col s12 m2">
                                <div className="center-align">
                                    <img src={microsoft} alt="Home-S1" className=" responsive-img"/>
                                </div>
                                <div className="center-align">
                                    <img src={tyco} alt="Home-S2" className=" responsive-img"/>
                                </div>
                                <div className="center-align">
                                    <img src={tamuse} alt="Home-S2" className=" responsive-img"/>
                                </div>
                            </div>
                    
                    </div>
                </div>
                
            </section>
        )
    }
}
export default withTranslation("gove")(Advice);