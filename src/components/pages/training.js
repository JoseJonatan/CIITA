import React, { Component } from "react";
import Ing from "../../images/desarrollo/ingenieria.png";
import { Link } from "react-router-dom";

import { withTranslation } from 'react-i18next';

class Training extends Component {

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
              <span className="black-text"><i>{t("tale.title")}</i></span>
            </h4>

            <h5 className="center light blue-text text-darken-4">
              {t("tale.text")}
            </h5>
            <br />

            <div className="col s12 m6">
              <div className="card-panel blue lighten-3 black-text center">
                <i className="fas fa-book-reader fa-3x"></i>
                <h5>{t("training.title")}</h5>
                <p>
                  <strong>
                  {t("training.text")}
                  </strong>
                </p>
                <p>{t("training.key")}</p>
                <li>{t("training.lista")}</li>
                <li>{t("training.listb")}</li>
                <li>{t("training.listc")}</li>
                <li>{t("training.listd")}</li>
                <li>{t("training.liste")}</li>
                <Link to="/curse" className="btn btn-waves light-blue darken-4">
                {t("training.btn")}
                </Link>
              </div>

              <div className="card-panel amber lighten-5 black-text center">
                <i className="fas fa-user-friends fa-3x"></i>
                <h5>{t("human.title")}</h5>
                <div className="col s12 m6"></div>
                <p>
                  <strong>
                  {t("human.text")}
                  </strong>
                </p>
                <li>
                {t("human.lista")}
                </li>
              </div>

            </div>

            <div className="col s12 m6">

              <div className="card">
                <div className="card-image">
                  <img src={Ing} alt="Render" className="responsive-img" />
                </div>
              </div>

              <div className="card-panel amber lighten-4 black-text center">
                <i className="fas fa-chalkboard-teacher fa-3x"></i>
                <h5>{t("strategic.title")}</h5>
                <p>
                  <strong>
                  {t("strategic.text")}
                  </strong>
                </p>
                <p>
                {t("strategic.fact")}
                </p>
                <li>{t("strategic.lista")}</li>
                <li>{t("strategic.listb")}</li>
                <li>{t("strategic.listc")}</li>
              </div>

            </div>

          </div>

        </div>
      </section>
    );
  }
}
export default withTranslation("talent")(Training);
