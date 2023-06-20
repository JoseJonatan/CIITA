import React, { Component } from "react";
import Cap from "../../images/desarrollo/hero-img-2.png";
import { withTranslation } from 'react-i18next';

class Curses extends Component {

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render() {

    const { t } = this.props;
    return (
      <section className="Desarrollo" id="proy">
        <div className="container">
          <div className="row">
            <h4 className="center">
              <span className="black-text"><i>{t("train.title")}</i></span>
            </h4>

            <h5 className="center light blue-text text-darken-4">
            {t("train.text")}
            </h5>
            <br />

            <div className="col s12 m6">
              <div className="card-panel blue lighten-3 black-text center">
                <i className="fas fa-laptop-code fa-3x"></i>
                <h5>{t("ti.title")}</h5>
                <p>
                  <strong>
                  {t("ti.text")}
                  </strong>
                </p>
                <li>{t("ti.cad")}</li>
                <li>{t("ti.excela")}</li>
                <li>{t("ti.excelc")}</li>
                <li>{t("ti.moodlea")}</li>
                <li>{t("ti.moodlec")}</li>
                <li>{t("ti.security")}</li>
                <li>{t("ti.securityb")}</li>
                <li>{t("ti.arduino")}</li>
                <li>{t("ti.Crime")}</li>
                <li>{t("ti.Pythona")}</li>
                <li>{t("ti.Pythonc")}</li>
                <li>{t("ti.Javaa")}</li>
                <li>{t("ti.Javac")}</li>
                <li>{t("ti.social")}</li>
                <li>{t("ti.big")}</li>
                <li>{t("ti.apps")}</li>
                <li>{t("ti.phone")}</li>
                <li>{t("ti.nav")}</li>
                <li>{t("ti.viewa")}</li>
                <li>{t("ti.viewb")}</li>

              </div>

              <div className="card-panel indigo lighten-4 black-text center">
                <i className="fas fa-brain fa-3x"></i>
                <h5>{t("soft.title")}</h5>
                <div className="col s12 m6"></div>
                <p>
                  <strong>
                  {t("soft.text")}
                  </strong>
                </p>
                <li>{t("soft.stres")}</li>
                <li>{t("soft.culture")}</li>
                <li>{t("soft.motiv")}</li>
                <li>{t("soft.change")}</li>
                <li>{t("soft.crisis")}</li>
                <li>{t("soft.bussines")}</li>
                <li>{t("soft.team")}</li>
              </div>

            </div>

            <div className="col s12 m6">

              <div className="card">
                <div className="card-image">
                  <img src={Cap} alt="Render" className="responsive-img" />
                </div>
              </div>

              <div className="card-panel red lighten-4 black-text center">
                <i className="fas fa-balance-scale fa-3x"></i>
                <h5>{t("finance.title")}</h5>
                <p>
                  <strong>{t("finance.text")}</strong>
                </p>
                <li>{t("finance.finan")}</li>
                <li>{t("finance.dire")}</li>
                <li>{t("finance.conta")}</li>
                <li>{t("finance.leadership")}</li>
                <li>{t("finance.orga")}</li>
                <li>{t("finance.proy")}</li>
              </div>

              <div className="card-panel teal lighten-4 black-text center">
                <i className="fas fa-balance-scale fa-3x"></i>
                <h5>{t("process.title")}</h5>
                <p>
                  <strong>
                  {t("process.text")}
                  </strong>
                </p>
                <li>{t("process.msa")}</li>
                <li>{t("process.pcp")}</li>
                <li>{t("process.geo")}</li>
                <li>{t("process.quality")}</li>
                <li>{t("process.apqp")}</li>
                <li>{t("process.process")}</li>
                <li>{t("process.manu")}</li>
                <li>{t("process.metro")}</li>
                <li>{t("process.amef")}</li>
                <li>{t("process.ppap")}</li>
                <li>{t("process.vsm")}</li>
                <li>{t("process.plan")}</li>
                <li>{t("process.admin")}</li>
              </div>

            </div>

          </div>

        </div>

        <div className="container">
              <div className="row">
                <h4 className="center">
                  <span className="black-text"><i>{t("inscription.title")}</i></span>
                </h4>
                <div className="collection  z-depth-3  ">
                  <li className="collection-item light-blue darken-4 white-text center flow-text">
                    {t("inscription.subtitle")}
                  </li>
                  <li className="collection-item blue lighten-4">
                    {t("inscription.texta")}
                  </li>
                  <li className="collection-item blue lighten-4">
                    {t("inscription.textb")}
                  </li>
                  <li className="collection-item blue lighten-4">
                    {t("inscription.textc")}
                  </li>
                  <li className="collection-item blue lighten-4">
                    {t("inscription.textd")}
                  </li>
                  <li className="collection-item blue lighten-4">
                    {t("inscription.texte")}
                  </li>
                  <li className="collection-item blue lighten-4">
                    {t("inscription.textf")}
                  </li>
                  <li className="collection-item blue lighten-4">
                    {t("inscription.textg")}
                  </li>
                  <li className="collection-item blue lighten-4">
                    {t("inscription.texth")}
                  </li>
                  <li className="collection-item blue lighten-4">
                    {t("inscription.texti")}
                  </li>
                  <li className="collection-item light-blue darken-4 white-text center flow-text">
                    {t("notes.title")}
                  </li>
                  <li className="collection-item blue lighten-4">
                    {t("notes.texta")}
                  </li>
                  <li className="collection-item blue lighten-4">
                    {t("notes.textb")}
                  </li>
                  <li className="collection-item blue lighten-4">
                    {t("notes.textc")}
                  </li>
                  <li className="collection-item blue lighten-4">
                    {t("notes.textd")}
                  </li>
                  <li className="collection-item blue lighten-4">
                    {t("notes.texte")}
                  </li>
                  <li className="collection-item blue lighten-4">
                    {t("notes.textf")}
                  </li>
                  <li className="collection-item blue lighten-4">
                    {t("notes.textg")}
                  </li>
                  <li className="collection-item blue lighten-4">
                    {t("notes.texth")}
                  </li>
                  <li className="collection-item light-blue darken-4 white-text center flow-text">
                    {t("const.title")}
                  </li>
                  <li className="collection-item blue lighten-4">
                    {t("const.texta")}
                  </li>
                </div>
              </div>
            </div>
      </section>

    );
  }
}
export default withTranslation("curse")(Curses);