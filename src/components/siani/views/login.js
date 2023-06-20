import React, { useState,useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../../../node_modules/materialize-css/dist/css/materialize.min.css";
import { useHistory, Link } from "react-router-dom";
import Img from "../../../images/icons/logosiani.png";
import '../../styles/inputs.css';
import M from "materialize-css"; 
//Api
import { login } from "../services/api";

function Login() {

  const { t, i18n } = useTranslation("logi");
  
  let history = useHistory();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [fields, setFields] = useState(false);
  const [badEmail, setBadEmail] = useState(false);
  const [badCredential, setBadCredential] = useState(false);

  useEffect( () => {
    M.AutoInit();
    window.scrollTo(0, 0);
  }, []);

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async () => {
    if (inputs.email === "" || inputs.password === "") {
      console.log("llenarcampos");
      M.toast({html: '¡Error! Llenar Campos'});
      setFields(true);
      setBadEmail(false);
      setBadCredential(false);
    } else {
      try {
        await login(inputs);
        history.push("/sian");
      } catch (error) {
        console.log(error);
        console.log(error.response);
        M.toast({html: '¡Error!'});
        
        if(error.response.data === "Invalid Email")
        {
          setBadEmail(true);
          setBadCredential(false);
          setFields(false);
        }
        else if(error.response.data === "Invalid Credential")
        {
          setBadCredential(true);
          setBadEmail(false);
          setFields(false);
        }
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h4 className="center">
          <span className="black-text">
            <i>{t("siani.title")}</i>
          </span>
        </h4>
        <br />
        <h5 className="light blue-text text-darken-4">{t("what.title")}</h5>
        <p className="black-text">
          <strong>{t("what.texta")} </strong>
        </p>
        <div className="col s12 m6">
          <div className="card-image center-align">
              <img src={Img} alt="Render" />
          </div>
          <div className="left-align">
            <h5 className="light blue-text text-darken-4">{t("for.title")}</h5>
            <p className="light black-text">
              <strong>{t("for.texta")} </strong>
            </p>
          </div>
        </div>

        <div className="col s12 m6 ">
          <div className="card">
            <div className="card-action light-blue darken-4 white-text center-align">
              <h5>Bienvenido</h5>
            </div>
            <div className="card-content">
                <div className="row">
                  <div className="input-field col s12 ">
                    <i className="material-icons prefix">account_circle</i>
                    <input
                      id="user"
                      name="email"
                      value={inputs.email}
                      type="email"
                      onChange={(e) => onChange(e)}
                      className="materialize-textarea "
                    ></input>
                    <label htmlFor="user">E-mail</label>
                  </div>
                  <div className="input-field col s12 ">
                    <i className="material-icons prefix">mode_edit</i>
                    <input
                      id="pass"
                      name="password"
                      value={inputs.password}
                      onChange={(e) => onChange(e)}
                      type="password"
                      className="materialize-textarea"
                    ></input>
                    <label htmlFor="pass">Contraseña</label>
                  </div>
                  {fields ? <div className="col s12">
                    <h6 className="red-text text-darken-4 center">
                        Llenar campos
                    </h6>
                  </div>: null}
                  {badEmail ? <div className="col s12">
                    <h6 className="red-text text-darken-4 center">
                        El Email no es valido
                    </h6>
                  </div>:null}
                  {badCredential ? <div className="col s12">
                    <h6 className="red-text text-darken-4 center">
                        El Email o contraseña no son validos
                    </h6>
                  </div> : null}
                  <div className="input-field col s12">
                    <button
                      className="waves-effect waves-light light-blue darken-4 btn"
                      onClick={onSubmitForm}
                      style={{width: '100%'}}
                      >
                      <i className="material-icons right">send</i>Iniciar Sesión
                    </button>
                  </div>
                  {/*<div className="input-field col s6 ">
                    <Link 
                    to="/signup" 
                    className="waves-effect waves-light light-blue darken-4 btn"
                    style={{width: '100%'}}
                    >
                    <i className="material-icons right">add</i>
                      Registrarse
                    </Link>
                    </div>*/}
                  <div className="input-field col s12">
                    <Link 
                    to="/recover" 
                    className="waves-effect waves-light-blue light-blue lighten-5 btn btn-flat"
                    style={{width: '100%'}}
                    >
                      Recuperar contraseña
                      <i className="material-icons right">lock_open</i>
                    </Link>
                  </div>
                  <div className="center">
                      <p>Le recomendamos leer nuestros avisos de privacidad en el siguiente <Link to='/privacy'>enlace</Link>.</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="col s12 m12">
            <h5 className="light blue-text text-darken-4">{t("how.title")}</h5>
            <p className="light black-text">
              <strong>{t("how.texta")} </strong>
            </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
