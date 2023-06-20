import React, { Component } from "react";
import Net from "../../images/desarrollo/hero-img.png";
import { withTranslation } from 'react-i18next';

class Network extends Component {

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
              <span className="black-text"><i>{t("proy.title")}</i></span>
            </h4>

            <div className="col s12 m6">
              <div className="card">
                <div className="card-image">
                  <img src={Net} alt="Render" />
                </div>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="card-panel cyan lighten-5 black-text center">
                <i className="fas fa-poll fa-3x"></i>
                <h5>{t("colab.title")}</h5>
                <p>
                  {t("colab.text")}
                </p>
                <p></p>
              </div>
            </div>
            
          </div>

          <div className="row">
            <div className="col s12 m6">
              <div className="card-panel cyan lighten-3 black-text center">
                <i className="fas fa-chart-pie fa-3x"></i>
                <br />
                <div className="col s12 m6"></div>
                <h5>{t("link.title")}</h5>
                <br />
                <p>
                  <strong>{t("link.advisory")}</strong>
                </p>
                <i className="fas fa-edit fa-2x"></i>
                <br />
                <p>
                  <strong>{t("link.innovation")}</strong>
                </p>
                <i className="fas fa-award fa-2x"></i>
                <br />
                <p>
                  <strong>{t("link.training")}</strong>
                </p>
                <i className="fas fa-chalkboard-teacher fa-2x"></i>
                <br />
              </div>
            </div>

            <div className="col s12 m6">
              <div className="card-panel cyan lighten-4 black-text center">
                <i className="fas fa-tasks fa-3x"></i>
                <h5>{t("block.title")}</h5>
                <p>
                  {t("block.text")}
                </p>
                <p>
                  <strong>- {t("block.lista")}</strong>
                </p>
                <p>
                  <strong>- {t("block.listb")}</strong>
                </p>
                <p>
                  <strong>- {t("block.listc")}</strong>
                </p>
                <p>
                  <strong>- {t("block.listd")}</strong>
                </p>
                <p>
                  <strong>- {t("block.liste")}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default withTranslation("netw")(Network);
