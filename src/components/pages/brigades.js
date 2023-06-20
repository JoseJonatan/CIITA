import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import Image from '../../images/social/ServicioSocial.jpg'

class Brigad extends Component {

    componentDidMount(){
        window.scrollTo(0, 0);
    }

    render() {
        const { t } = this.props;
        return (
            <section id="brigades" className="advice page-advice white scrollspy">
                <div className="container">
                    <div className="row">
                        <h4 className="center" >
                            <span className="black-text"><i>{t("comm.title")}</i></span>
                        </h4>
                        
                        <div className="col s12 m6">
                            <div className="left-align black-text">
                                <p className="light blue-text text-darken-4"><strong>
                                    {t("comm.texta")} </strong></p>
                                <p className="light blue-text text-darken-4"><strong>
                                    {t("comm.textb")} </strong></p>
                            </div>
                        </div>
                        <div className="col s12 m6">
                            <br/>
                            <br/>
                            <img src={Image} alt="Home-S1" className=" responsive-img"/>
                        </div>
                    </div>
                </div>
                
            </section>
        )
    }
}
export default withTranslation("brig")(Brigad);