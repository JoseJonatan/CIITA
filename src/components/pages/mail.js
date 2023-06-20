import React, { Component } from "react";
import axios from "axios";
import M from "materialize-css";
import {Link} from 'react-router-dom';
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";

//Api
import { sendMail } from "../siani/services/api";

import { withTranslation } from 'react-i18next';

class Form extends Component {

  state = {
    name: "",
    lastname: "",
    email: "",
    message: "",
    sent: false,
    buttonText: "Send Message",
    fieldsComplete: false,
    sendEmailSuccess: false
  };

  componentDidMount()
  {
    M.AutoInit();
  }

  // handle inputs

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleLastname = (e) => {
    this.setState({
      lastname: e.target.value,
    });
  };

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  sendEmailContact = async () => {
    const data = {
      content: "",
      email: "",
      name: "",
      subject: ""
    }
    data.content = this.state.message;
    data.email = this.state.email;
    data.name = this.state.name;
    data.subject = this.state.lastname;

    if(data.content === "" ||
      data.email === "" ||
      data.name === "" || 
      data.subject === "")
      {
        M.toast({html: '¡Porfavor, llene todos los datos!'});
        this.state.fieldsComplete = true;
        this.state.sendEmailSuccess = false;
      }
    else{
      try {
        await sendMail(data);
        M.toast({html: '¡Gracias por contactarnos!'});
        this.state.sendEmailSuccess = true;
        this.state.fieldsComplete = false;
      } catch (error) {
        console.log(error);
        console.log(error.response);
        M.toast({html: '¡Error!'});
      }
    }
    this.state.message = "";
    this.state.email = "";
    this.state.name = "";
    this.state.lastname = "";
    this.forceUpdate();
  };

  render() {

    const { t } = this.props;
    
    return (
      <section id="contact" className="section section-contact scrollspy">
        <div className="container">
          <div className="row">
            <h4 className="center">
              <span className="white-text">
                <i>{t("contact.title")}</i>
              </span>
            </h4>

            <div className="col s12 m6">
              <div className="card-panel center blue-grey-text text-lighten-4 card-on-home">
                <i className="fas fa-map-marked-alt fa-2x"></i>
                <h5>{t("contact.dirtitle")}</h5>
                <i className="fas fa-map-marker-alt fa-1x">
                  {t("contact.dirone")}
                  <br />
                  <br />
                </i>
                <i className="fas fa-map-marker-alt">
                  {t("contact.dirtwo")}
                  <br />
                  <br />
                </i>
                <i className="fas fa-phone"> (656) 173 5 989</i>
              </div>

              <div className="google-map-code">
                <h5 className="white-text center">{t("contact.titlemap")}</h5>
                <iframe
                  title="myFrame"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.4931358019376!2d-106.39878668443032!3d31.729738043947556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75dfc5d9f7557%3A0x44e905bb94cc1ee3!2sCIITA%20-%20IPN%20Chihuahua!5e0!3m2!1ses-419!2smx!4v1594587184757!5m2!1ses-419!2smx"
                  width="100%"
                  height="215"
                  style={{ border: 0 }}
                  allowFullScreen="">

                </iframe>
              </div>

              <div className="google-map-code">
                <h5 className="white-text center">{t("contact.titlemaptwo")}</h5>
                <iframe
                  title="myFrame"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.9367898250857!2d-106.10313608218844!3d28.625512589992525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea5cd25219ea55%3A0xb0d754cbc3445ae3!2sAv.%20Instituto%20Polit%C3%A9cnico%20Nacional%202714%2C%20Lomas%20la%20Salle%20I%20y%20II%2C%20Campestre-Lomas%2C%2031214%20Chihuahua%2C%20Chih.!5e0!3m2!1ses-419!2smx!4v1593107219667!5m2!1ses-419!2smx"
                  width="100%"
                  height="215"
                  style={{ border: 0 }}
                  allowFullScreen="">
                </iframe>
              </div>
            </div>

            <div className="col s12 m6 scrollspy">
            <div className="card-panel blue-grey-text text-lighten-4 center card-on-home">
                <i className="fas fa-paper-plane fa-2x"></i>
                <h5>{t("contact.boxtitle")}</h5>
                <p>
                  {t("contact.text")}
                  <br />
                  <strong>ciitajuarez@ipn.mx</strong>
                </p>
                  <div className="col s12">
                    <div className="input-field col s12 m12">
                      <i className="material-icons prefix">account_circle</i>
                      <input
                        type="text"
                        name="name"
                        className="name"
                        value={this.state.name}
                        onChange={this.handleName}
                        placeholder={t("form.name")}
                      />
                    </div>

                    <div className="input-field col s12 m12">
                      <i className="material-icons prefix">mode_edit</i>
                      <input
                        type="text"
                        name="lastname"
                        className="lastname"
                        value={this.state.lastname}
                        onChange={this.handleLastname}
                        placeholder={t("form.subject")}
                      />
                    </div>

                    <div className="input-field col s12 m12">
                      <i className="material-icons prefix">alternate_email</i>
                      <input
                        type="email"
                        name="email"
                        className="email"
                        value={this.state.email}
                        onChange={this.handleEmail}
                        placeholder={t("form.email")}
                        required
                      />
                    </div>
                  </div>

                  <div className="textArea singleItem col s12 m12">
                    <br />
                    <i className="material-icons prefix">textsms</i>
                    <textarea
                      name="message"
                      value={this.state.message}
                      id=""
                      cols="30"
                      rows="10"
                      placeholder={t("form.content")}
                      onChange={this.handleMessage}
                    ></textarea>
                  </div>
                  <br />
                  {this.state.fieldsComplete ? <div className="col s12">
                    <h6 className="red-text text-darken-4">
                      Llene todos los campos
                    </h6>
                  </div> : null}
                  {this.state.sendEmailSuccess ? <div className="col s12">
                    <h6 className="blue-grey-text text-lighten-4">
                      ¡Gracias por contactarnos!
                    </h6>
                  </div> : null}
                  <div className={this.state.sent ? "msg msgAppear" : "msg"}>
                    <h5 className="transparent-text">.</h5>
                    <button
                      onClick={this.sendEmailContact}
                      className="btn waves-effect waves-light pink darken-4">
                      {t("form.btn")}
                      <i className="material-icons right ">send</i>
                    </button>
                    <p>Le recomendamos leer nuestros avisos de privacidad en el siguiente <Link to='/privacy'>enlace</Link>.</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default withTranslation("home")(Form);
