import React, { Component } from 'react';
import Trans from '../../images/desarrollo/hero-img-4.png'
import { withTranslation } from 'react-i18next';

class Transfer extends Component {

    componentDidMount(){
        window.scrollTo(0, 0);
    }

    render() {

        const { t } = this.props;

        return (
            <section className="Transfer" id="proy">

            <div className="container">
                <div className="row">
                    <h4 className="center">
                        <span className="black-text"><i>{t("trans.title")}</i></span>
                    </h4>

                    <h5 className="center">
                        {t("trans.text")}
                    </h5>

                    <div className="col s12 m5">
                        <div className="card">
                            <div className="card-image">
                                <img src={Trans} alt="Render" />
                                </div>
                        </div>
                    </div>

                    <div className="col s12 m7">
                            <div className="card-panel purple lighten-5 black-text center">
                                <i className="fas fa-pencil-ruler fa-3x"></i>
                                <h5>{t("protection.title")}</h5>
                                <p><strong>{t("protection.text")}</strong></p>
                                <li>{t("protection.lista")}</li>
                                <li>{t("protection.listb")}</li>
                            </div>
                    </div>

                </div>

                <div className="row">

                    <div className="col s12 m6">
                        <div className="card-panel purple lighten-5 black-text center">
                            <i className="fas fa-funnel-dollar fa-3x"></i>
                            <h5>{t("commerce.title")}</h5>
                            <p><strong>{t("commerce.text")}</strong></p>
                            <li>{t("commerce.lista")}</li>
                            <li>{t("commerce.listb")}</li>
                        </div>
                    </div>

                    <div className="col s12 m6">
                            <div className="card-panel purple lighten-5 black-text center">
                                <i className="fas fa-atom fa-3x"></i>
                                <h5>{t("management.title")}</h5>
                                <p><strong>{t("management.text")}</strong></p>
                                <li>{t("management.lista")}</li>
                                <li>{t("management.listb")}</li>
                            </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
export default withTranslation("transf")(Transfer);