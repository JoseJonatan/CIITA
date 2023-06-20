import React, { useEffect } from "react";

import M from "materialize-css";

import "../../../node_modules/materialize-css/dist/css/materialize.min.css";

const Location = () => {

  useEffect(() => {
    M.AutoInit();  });

  const submit = () => {
    document.getElementById("formCita").reset();
    M.toast({ html: "Mensaje Enviado!" });
  };


  return (
    <section id="contact" className="section section-contact scrollspy">
      <div className="container">
        <div className="row">
          <h4 className="center"><i>
            <span className="black-text">Medios de contacto</span></i>
          </h4>
          <div className="col s12 m5 offset-m2 offset-l1">
            <div className="card-panel blue lighten-4 black-text center">
              <i className="fas fa-paper-plane fa-2x"></i>
              <h5>Email CIITA</h5>
              <p>
                Tienes dudas sobre como desarrollar algun proyecto tecnológico o
                buscas capacitación especializada, envianos un correo al:
              </p>
              <p>
                <strong>ciitajuarez@ipn.mx</strong>
              </p>
              <button
                href="#correo"
                className="btn waves-effect waves-green  blue darken-3 modal-trigger">
                Enviar correo
                <i className="material-icons right ">send</i>
              </button>
            </div>
          </div>

        </div>
      </div>

      <div id="correo" className="modal">
        <div className="modal-content">
          <div className="card-action light-blue darken-4 white-text">
            <h5>Email CIITA</h5>
          </div>
          <div className="card-content">
            <form onSubmit={submit} id="formCita">
              <div className="row">

                <div className="input-field col s6">
                  <i className="material-icons prefix">account_circle</i>
                  <input
                    placeholder="Nombre"
                    id="name"
                    name="name"
                    type="text"
                    className="validate"
                    value={this.state.name}
                    onChange={this.handleName}/> 
                  <label htmlFor="name">De:</label>
                </div>

                <div className="input-field col s6">
                  <i className="material-icons prefix">alternate_email</i>
                  <input
                    placeholder="Proporciona tu e-mail"
                    id="email"
                    type="text"
                    name="email"
                    className="validate"/>
                  <label htmlFor="email_client">E-mail</label>
                </div>

                <div className="input-field col s6">
                  <i className="material-icons prefix">mode_edit</i>
                  <input
                    placeholder="Asunto:"
                    id="issue"
                    type="text"
                    className="validate"
                    value={this.state.lastname}
                    onChange={this.handleLastname}/>
                  <label htmlFor="issue">Asunto</label>
                </div>
                
              </div>
              <div className="input-field  center">
                <i className="material-icons prefix">textsms</i>
                <textarea
                  name="message"
                  id="message"
                  className="materialize-textarea validate"
                  cols="30" rows="5"
                  value={this.state.message}
                  onChange={this.handleMessage}>  
                </textarea>
                <label className="message">Mensaje</label>
              </div>
            </form>
          </div>
        </div>

        <div className="modal-footer">
          <a
            onClick={() => submit()}     href="#!"        
            className="modal-close waves-effect waves-green btn-flat light-blue-text text-darken-3 ">
            Enviar correo
            <i className="material-icons right ">send</i>
          </a>
        </div>

      </div>

    </section>
  );
};
export default Location;
