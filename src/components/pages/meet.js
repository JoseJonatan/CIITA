import React, { Component } from "react";
import Render from "../../images/meet/render.jpg";
import Paral from "../../images/meet/paral.webp";
import {Link} from 'react-router-dom';

import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import Dire from "../../images/meet/Lydia.png";
import Carlos from "../../images/meet/Carlos.png";
import Orla from "../../images/meet/Orlando.png";
import Adriana from "../../images/meet/Adriana.png";
import Cin from "../../images/meet/Cin.png";
import John from "../../images/meet/John.png";
import Art from "../../images/meet/Arturo.png";
import Ger from "../../images/meet/German.png";
import Iran from "../../images/meet/Iran.png";
import Mart from "../../images/meet/Martha.png";
import Nancy from "../../images/meet/Nancy.png";
import Israel from "../../images/meet/Israel.png";
import Leslie from "../../images/meet/Leslie.png";
import CVAdri from '../../doc/cvs/AdrianaCV.pdf';
import CVO from '../../doc/cvs/OrlandoCV.pdf';
import CVJ from '../../doc/cvs/JonatanCV.pdf';
import CVC from '../../doc/cvs/CarlosCV.pdf';
import CVJe from '../../doc/cvs/JesusCV.pdf';
import CVIs from '../../doc/cvs/IsraelCV.pdf';
import CVG from '../../doc/cvs/GermanCV.pdf';
import CVM from '../../doc//cvs/MarthaCV.pdf';
import CVA from '../../doc//cvs/ArturoCV.pdf';
import CVL from '../../doc//cvs/LeslieCV.pdf';
import CVCi from '../../doc//cvs/CinthyaCV.pdf';
import CVN from '../../doc//cvs/NancyCV.pdf';


import { withTranslation } from 'react-i18next';

class Meet extends Component {
  componentDidMount() {
    M.AutoInit();
    window.scrollTo(0, 0);
  }

  render() {

    const { t } = this.props;

    return (
      <section id="meet" className="meet meet-contact scrollspy">
        <div className="container">
          <div className="row">
            <h4 className="center">
              <span className="black-text"><i>{t("meet.title")}</i></span>
            </h4>

            <div className="col s12 m6">
              <div className="card">
                <div className="card-image">
                  <img src={Render} alt="Render" />
                  <span className="card-title">CIITA - Ciudad Juárez</span>
                </div>
              </div>
            </div>

            <div className="col s12 m6">
              <ul className="collapsible popout">
                <li>
                  <div className="collapsible-header blue lighten-2">
                    <i className="material-icons">favorite</i>{t("meet.mission")}
                  </div>
                  <div className="collapsible-body blue lighten-4">
                  <span>{t("meet.textm")}
                    </span>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header blue lighten-3">
                    <i className="material-icons">visibility</i>{t("meet.vision")}
                  </div>
                  <div className="collapsible-body blue lighten-5">
                    <span>
                    {t("meet.textv")}
                    </span>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header blue lighten-4">
                    <i className="material-icons">stars</i>{t("meet.objectives")}
                  </div>
                  <div className="collapsible-body blue lighten-2">
                    <span>
                    {t("meet.texto")}
                    </span>
                    <br/>
                    <br/>
                    <span>
                    {t("meet.textob")}
                    </span>
                    <br/>
                    <br/>
                    <span>{t("meet.textobj")}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="parallax-container">
          <div class="parallax">
            <img src={Paral} alt="Render" />
          </div>
        </div>

        <div className="container">
          <div className="row">
            <h4 className="center">
              <span className="black-text"><i>{t("team.title")}</i></span>
            </h4>

            <h5 className="Left">
              <span className="black-text">{t("team.titlea")}</span>
            </h5>

            <div className="row">
              <div className="col s12 m6 offset-m2 offset-l3">
                <div className="card horizontal blue-grey lighten-5 meet">
                  <div className="card-image">
                    <img src={Dire} alt="ImgDire" />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <p>
                        <strong>
                          Mtra. Lydia del Carmen Nesbitt Valenzuela
                        </strong>
                      </p>
                      <p>
                        <strong>{t("job.lydia")}</strong>
                      </p>
                      <p>
                        <strong>{t("team.mail")}: </strong>lnesbitt@ipn.mx
                      </p>
                    </div>
                  </div>
                </div>
              </div>


              <div className="col s12 m6">
                <div className="card horizontal blue-grey lighten-5 meet">
                  <div className="card-image">
                    <img src={Orla} alt="ImgDire" />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <p>
                        <strong>Lic. Manuel Orlando González Jurado</strong>
                      </p>
                      <p>
                        <strong>{t("job.earl")}</strong>
                      </p>
                      <p>
                        <strong>{t("team.mail")}: </strong>mangonzalezj@ipn.mx
                      </p>
                      <Link
                        to= {CVO} target = "_blank"
                        download="OrlandoCV.pdf">
                        CV
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col s12 m6">
                <div className="card horizontal blue-grey lighten-5 meet">
                  <div className="card-image">
                    <img src={John} alt="ImgJon" />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <p>
                        <strong>Ing. José Jonatan Islas Austria</strong>
                      </p>
                      <p>
                        <strong>
                        {t("job.jose")}
                        </strong>
                      </p>
                      <p>
                        <strong>{t("team.mail")}: </strong>jjislas@ipn.mx
                      </p>
                      <Link
                        to= {CVJ} target = "_blank"
                        download="JonatanCV.pdf">
                        CV
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h5 className="Left">
              <span className="black-text">
              {t("team.titleb")}
              </span>
            </h5>

            <div className="row">
              <div className="col s12 m6">
                <div className="card horizontal blue lighten-5 meet">
                  <div className="card-image">
                    <img src={Carlos} alt="ImgDire" />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <p>
                        <strong>Mtro. Carlos Alfredo González Chávez</strong>
                      </p>
                      <p>
                        <strong>{t("job.carlos")}</strong>
                      </p>
                      <p>
                        <strong>{t("team.mail")}: </strong>cgonzalezc@ipn.mx
                      </p>
                      <Link
                        to= {CVC} target = "_blank"
                        download="CarlosCV.pdf">
                        CV
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col s12 m6">
                <div className="card horizontal blue lighten-5 meet">
                  <div className="card-image">
                    <img src={Iran} alt="ImgDire" />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <p>
                        <strong>Mtro. Jesús Irán Grageda Arellano</strong>
                      </p>
                      <p>
                        <strong>
                        {t("job.jesus")}
                        </strong>
                      </p>
                      <p>
                        <strong>{t("team.mail")}: </strong>jgragedaa@ipn.mx
                      </p>
                      <Link
                        to= {CVJe} target = "_blank"
                        download="JesusCV.pdf">
                        CV
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col s12 m6">
                <div className="card horizontal blue lighten-5 meet">
                  <div className="card-image">
                    <img src={Israel} alt="ImgDire" />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <p>
                        <strong>Mtro. Israel Alejandro Flores Urquizo</strong>
                      </p>
                      <p>
                        <strong>
                        {t("job.isra")}
                        </strong>
                      </p>
                      <p>
                        <strong>{t("team.mail")}: </strong>afloresu@ipn.mx
                      </p>
                      <Link
                        to= {CVIs} target = "_blank"
                        download="IsraelCV.pdf">
                        CV
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <h5 className="Left">
              <span className="black-text">{t("team.titlec")}</span>
            </h5>

            <div className="row">
              <div className="col s12 m6">
                <div className="card horizontal green lighten-5 meet">
                  <div className="card-image">
                    <img src={Ger} alt="ImgDire" />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <p>
                        <strong>Dr. Germán Quiroz Merino</strong>
                      </p>
                      <p>
                        <strong>{t("job.german")} </strong>
                      </p>
                      <p>
                        <strong>{t("team.mail")}: </strong>gquirozm@ipn.mx
                      </p>
                      <Link
                        to= {CVG} target = "_blank"
                        download="GermanCV.pdf">
                        CV
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col s12 m6">
                <div className="card horizontal green lighten-5 meet">
                  <div className="card-image">
                    <img src={Mart} alt="ImgDire" />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <p>
                        <strong>Mtra. Martha I. Madero Villanueva</strong>
                      </p>
                      <p>
                        <strong>
                        {t("job.martha")}
                        </strong>
                      </p>
                      <p>
                        <strong>{t("team.mail")}: </strong>mmaderov@ipn.mx
                      </p>
                      <Link
                        to= {CVM} target = "_blank"
                        download="MarthaCV.pdf">
                        CV
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

              <div className="col s12 m6">
                <div className="card horizontal green lighten-5 meet">
                  <div className="card-image">
                    <img src={Art} alt="ImgDire" />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <p>
                        <strong>Dr. Arturo Solís Santome</strong>
                      </p>
                      <p>
                        <strong>
                        {t("job.arturo")}
                        </strong>
                      </p>
                      <p>
                        <strong>{t("team.mail")}: </strong>asoliss@ipn.mx
                      </p>
                      <Link
                        to= {CVA} target = "_blank"
                        download="ArturoCV.pdf">
                        CV
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col s12 m6">
                <div className="card horizontal green lighten-5 meet">
                  <div className="card-image">
                    <img src={Leslie} alt="ImgDire" />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <p>
                        <strong>Lic. Leslie Janeth Cardona Elias</strong>
                      </p>
                      <p>
                        <strong>
                        {t("job.leslie")}
                        </strong>
                      </p>
                      <p>
                        <strong>{t("team.mail")}: </strong>lcardonae@ipn.mx
                      </p>
                      <Link
                        to= {CVL} target = "_blank"
                        download="LeslieCV.pdf">
                        CV
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            <h5 className="Left">
              <span className="black-text">{t("team.titled")}</span>
            </h5>

            <div className="row">
              <div className="col s12 m6">
                <div className="card horizontal pink lighten-5 meet">
                  <div className="card-image">
                    <img src={Adriana} alt="ImgDire" />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <p>
                        <strong>Mtra. Adriana Ponce González</strong>
                      </p>
                      <p>
                        <strong>{t("job.adri")}</strong>
                      </p>
                      <p>
                        <strong>{t("team.mail")}: </strong>aponceg@ipn.mx
                      </p>
                      <Link
                        to= {CVAdri} target = "_blank"
                        download="AdrianaCV.pdf">
                        CV
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col s12 m6">
                <div className="card horizontal pink lighten-5 meet">
                  <div className="card-image">
                    <img src={Cin} alt="ImgDire" />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <p>
                        <strong>
                          Mtra. Cinthya de Lucio Flores
                        </strong>
                      </p>
                      <p>
                        <strong>
                        {t("job.cin")}
                        </strong>
                      </p>
                      <p>
                        <strong>{t("team.mail")}: </strong>cluciof@ipn.mx
                      </p>
                      <Link
                        to= {CVCi} target = "_blank"
                        download="CinthyaCV.pdf">
                        CV
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col s12 m6">
                <div className="card horizontal pink lighten-5 meet">
                  <div className="card-image">
                    <img src={Nancy} alt="ImgDire" />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <p>
                        <strong>Lic. Nancy Flores Sánchez</strong>
                      </p>
                      <p>
                        <strong>
                        {t("job.nancy")}
                        </strong>
                      </p>
                      <p>
                        <strong>{t("team.mail")}: </strong>nfloress@ipn.mx
                      </p>
                      <Link
                        to= {CVN} target = "_blank"
                        download="NancyCV.pdf">
                        CV
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="center">
                <p>Le recomendamos leer nuestros avisos de privacidad en el siguiente <Link to='/privacy'>enlace</Link>.</p>
            </div>
            
          </div>
        </div>
      </section>
    );
  }
}
export default withTranslation("meet")(Meet);