import React, { useState,useEffect } from "react";
import { useHistory, Link} from "react-router-dom";
import M from "materialize-css";
//Api
import { resetPass } from "../services/api";
import { sendCode } from "../services/api";

const Recover = () => {
  //let history = useHistory();
  const [password2, setPassword2] = useState({
    password2: "",
  });

  const [inputs, setInputs] = useState({
    code: "",
    email: "",
    password: "",
  });

  const [userDontExists, setUserDontExists] = useState(false);

  const [enviado,setEnviado] = useState(false);

  const [success,setSuccess] = useState(false);

  useEffect(() => {
    M.AutoInit();
    window.scrollTo(0, 0);
  }, []);

  const onChange = (e) =>
  {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    setPassword2({ ...password2, [e.target.name]: e.target.value })
  }

  const onSendEmaiForm = async () => {
    if (
      inputs.email === ""
    ){
      M.toast({html: '¡Falta llenar campos!'});
    }
    else{
      try{
        const dataEmail = await sendCode(inputs.email);
        if(dataEmail.codigo === "200")
        {
          M.toast({html: 'Verifique su correo'});
          setEnviado(true);
          setUserDontExists(false);
        }
        else{
          M.toast({html: '¡Error!'});
          setUserDontExists(true);
        }
        
      }
      catch (error) {
        setEnviado(false);
        console.log(error);
        console.log(error.response);
      }
    }
  }

  const onSubmitForm = async () => {
    if (
      inputs.email === "" ||
      inputs.password === "" ||
      password2.password2 === ""
    ) {
      //alert("llenar campos");
      M.toast({html: '¡Falta llenar campos!'});
    } 
    else if(inputs.password != password2.password2)
    {
        //alert("Las contraseñas no coinciden!");
        M.toast({html: '¡Las contraseñas no coinciden!'});
    }
    else {
      try {
        const dataPassword = await resetPass(inputs);
        if(dataPassword.codigo === "200")
        {
          M.toast({html: '¡Contraseña Restaurada!'});
          setSuccess(true);
        }
        else{
          M.toast({html: '¡Error!'});
        }
        
      } catch (error) {
          console.log(error)
          console.log(error.response)
      }
    }
  };
  return (
    <div className="container">
      <div className="col s12 m6" style={{padding: '110px'}}>
        <div className="card">
          <div className="card-action light-blue darken-4 white-text center">
            <h5>Recuperar Contraseña</h5>
          </div>
          <div className="card-content">
            <div className="row">

              {!enviado ?<div className="center">
                <h6>Ingrese su correo electronico con el que se registró</h6>
              </div>:null}
            
              {!enviado ? <div className="input-field col s6 m3 l9">
                <i className="material-icons prefix">alternate_email</i>
                <input
                  id="inputemail"
                  name="email"
                  value={inputs.email}
                  type="email"
                  onChange={(e) => onChange(e)}
                  className="materialize-textarea "
                ></input>
                <label htmlFor="inputemail">Email</label>
              </div>: null}
              {!enviado ? <div className="input-field col s6 m3 l3">
                <button
                  className="waves-effect waves-light light-blue darken-4 btn"
                  onClick={onSendEmaiForm}
                >
                  <i className="material-icons right">send</i>Enviar
                </button>
              </div>: null}

              {userDontExists ? <div className="col s12 center red-text text-darken-4">
                <h6>Ups! Parece que este usuario no existe.</h6>
              </div>: null}

              {enviado ? <div className="center container">
                <h6>
                  Revise el buzón de entrada de su correo e ingrese la clave de seguridad.
                </h6>
              </div>: null}
              {enviado ? <div className="input-field col s12 center ">
                <i className="material-icons prefix">security</i>
                <input
                  id="inputkey"
                  name="code"
                  value={inputs.code}
                  type="text"
                  onChange={(e) => onChange(e)}
                  className="materialize-textarea"
                ></input>
                <label htmlFor="inputkey">Clave</label>
              </div>: null}
              {enviado? <div className="input-field col s12 center">
                <i className="material-icons prefix">rtt</i>
                <input
                  id="inputPass"
                  name="password"
                  value={inputs.password}
                  onChange={(e) => onChange(e)}
                  type="password"
                  className="materialize-textarea"
                ></input>
                <label htmlFor="inputPass">Nueva Contraseña </label>
              </div>: null}
              {enviado ? <div className="input-field col s12 center">
                <i className="material-icons prefix">rtt</i>
                <input
                  id="inputPass2"
                  name="password2"
                  value={password2.password2}
                  onChange={(e) => onChange(e)}
                  type="password"
                  className="materialize-textarea"
                ></input>
                <label htmlFor="inputPass2">Confirme Contraseña</label>
              </div> : null}

              {success ? <div className="col s12 center green-text text-darken-3">
                <h6>La contraseña ha sido restaurada exitosamente</h6>
              </div>: null}
              
              {enviado && !success ? <div className="input-field col s12 center">
                <button
                  className="waves-effect waves-light light-blue darken-4 btn"
                  onClick={onSubmitForm}
                >
                  <i className="material-icons right">send</i>Restaurar Contraseña
                </button>
              </div>: null}

              {enviado && success ? <div className="input-field col s12 center">
                <Link
                  to="/log"
                  className="waves-effect waves-light light-blue darken-4 btn"
                >
                  <i className="material-icons right">send</i>Salir
                </Link>
              </div>: null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recover;