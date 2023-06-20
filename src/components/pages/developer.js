import React, { Component } from 'react'
import Dev from '../../images/desarrollo/hero-img-3.png'
import Imp from '../../images/desarrollo/impacto.png'
import M from 'materialize-css';
import { withTranslation } from 'react-i18next';

class Developer extends Component {
    
    componentDidMount () {
        M.AutoInit();
        window.scrollTo(0, 0);
      }

    render() {

        const { t } = this.props;

        return (
            <section className="Desarrollo white" id="proy">

            <div className="container">
                <div className="row">
                    <h4 className="center">
                        <span className="black-text"><i>{t("regional.title")}</i></span>
                    </h4>

                    <div className="col s12 m4 offset-m2 offset-l1">
                        <div className="card">
                            <div className="card-image">
                                <img src={Dev} alt="Render" className=" responsive-img"/>
                                </div>
                        </div>
                    </div>

                    <div className="col s12 m7">
                        <div className="card">
                            <div className="card-image">
                                <img src={Imp} alt="Render"  />
                                </div>
                        </div>
                    </div>

                </div>

                <div className="row">

                <h5 className="center">
                    <span className="black-text"><i>{t("regional.subtitle")}</i></span>
                </h5>

                <div className="col s12 m8">
                        <div className="card-panel indigo lighten-3 black-text center">
                            <i className="fas fa-poll fa-3x"></i>
                            <h5>{t("model.title")}</h5>
                            <div className="col s12 m6"></div>
                                <p>{t("model.text")}</p>
                            </div>
                        <ul className="collapsible">
                            <li>
                                <div class="collapsible-header indigo lighten-4 black-text">
                                    <i class="material-icons">whatshot</i>
                                    {t("block.market")}
                                </div>
                                <div class="collapsible-body">
                                    <span>{t("block.textm")}</span>
                                </div>
                            </li>
                            <li>
                                <div class="collapsible-header indigo lighten-5 black-text">
                                    <i class="material-icons">whatshot</i>
                                    {t("block.process")}
                                </div>
                                <div class="collapsible-body">
                                    <span>{t("block.textp")}</span>
                                </div>
                            </li>
                            <li>
                                <div class="collapsible-header indigo lighten-4 black-text">
                                    <i class="material-icons">whatshot</i>
                                    {t("block.resources")}
                                </div>
                                <div class="collapsible-body">
                                    <span>{t("block.textr")}</span>
                                </div>
                            </li>
                            <li>
                                <div class="collapsible-header indigo lighten-5 black-text">
                                    <i class="material-icons">whatshot</i>
                                    {t("block.utility")}
                                </div>
                                <div class="collapsible-body">
                                    <span>{t("block.textu")}</span>
                                </div>
                            </li>
                            <li>
                                <div class="collapsible-header indigo lighten-4 black-text">
                                    <i class="material-icons">whatshot</i>
                                    {t("block.tech")}
                                </div>
                                <div class="collapsible-body">
                                    <span>{t("block.textt")}</span>
                                </div>
                            </li>
                        </ul>
                </div>

                    <div className="col s12 m4">
                            <div className="card-panel indigo lighten-4 black-text center">
                                <i className="fas fa-chart-pie fa-3x"></i>
                                <h5>{t("days.title")}</h5>
                                <div className="col s12 m6"></div>
                                <h5>{t("days.subtitle")}</h5>
                                <p><strong>{t("days.contact")}</strong></p>
                                <i className="fas fa-thumbtack fa-2x"></i><br/>
                                <p><strong>{t("days.map")}</strong></p>
                                <i className="fas fa-tasks fa-2x"></i><br/>
                                <p><strong>{t("days.design")}</strong></p>
                                <i className="fas fa-sitemap fa-2x"></i><br/>
                                <p><strong>{t("days.result")}</strong></p>
                                <i className="fas fa-chart-line fa-2x"></i><br/>
                                <p>{t("days.text")}</p>
                            </div>
                    </div>
                </div>

            </div>
        </section>
        )
    }
}
export default withTranslation("deve")(Developer);