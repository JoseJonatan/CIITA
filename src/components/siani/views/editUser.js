import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../../node_modules/materialize-css/dist/css/materialize.min.css";
import { useHistory, Link } from "react-router-dom";
import M from "materialize-css";

//Api
import { editUser } from "../services/api";
import { home } from "../services/api";

function EditU() {
  const { t, i18n } = useTranslation("logi");

  useEffect(() => {
    M.AutoInit();
    window.scrollTo(0, 0);
    getID();
  }, []);

  let history = useHistory();
  const [inputs, setInputs] = useState({
    id: "",
    job: "",
    tel: "",
    email: "",
  });
  const [onSuccess,setOnSuccess] = useState(false);

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const getID = async () => {
    try {
      const resp = await home(inputs);
      console.log("GET ID: ");
      console.log(resp);
      inputs.id = resp.user_id;
      //history.push("/log");
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }

  const onSubmitForm = async () => {
    if (
      inputs.email === "" ||
      inputs.tel === "" ||
      inputs.job === "" 
    ) {
      M.toast({html: '¡Falta llenar campos!'});
    } else {
      try {
        const resp = await editUser(inputs);  
        console.log(resp);
        //history.push("/log");
        M.toast({html: 'Datos guardados'});
        setOnSuccess(true);
      } catch (error) {
        console.log(error);
        console.log(error.response);
        M.toast({html: '¡Error!'});
        setOnSuccess(false);
      }
    }
  };

  return (
    <div>
      <div class="col s12">
        <div className="card">
          <div class="card-action light-blue darken-4 white-text center-align">
            <h5>Editar Datos de Usuario</h5>
          </div>
          <div className="card-content">
            <div className="row">
              {!onSuccess ? <h5 className="center">Ingrese sus nuevos datos de usuario</h5>:null}
              {!onSuccess ? <div className="card-panel col s12 m12">
                <div className="input-field col s12 center ">
                  <i className="material-icons prefix">work</i>
                  <input
                    id="inputjob"
                    name="job"
                    type="text"
                    value={inputs.job}
                    onChange={(e) => onChange(e)}
                    className="materialize-textarea "
                  ></input>
                  <label htmlFor="inputjob">Trabajo</label>
                </div>
                <div className="input-field col s12 center ">
                  <i className="material-icons prefix">contact_phone</i>
                  <input
                    id="inputTel"
                    name="tel"
                    type="number"
                    value={inputs.tel}
                    onChange={(e) => onChange(e)}
                    className="materialize-textarea "
                  ></input>
                  <label htmlFor="inputTel">Telefono</label>
                </div>
                <div className="input-field col s12 center ">
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
                </div>
              </div>: null}

              {onSuccess ? <h5 
                className="center green-text text-darken-3"
              >
                Sus datos han sido guardados exitosamente, 
                porfavor inicie sesión con su nuevo Email
              </h5>: null}

              {onSuccess ? <div className="input-field col s12 center">
                <Link
                  className="waves-effect waves btn-large light-blue darken-3"
                  to="/log"
                >
                  <i className="material-icons right">close</i>Salir
                </Link>
              </div>: null}

              {!onSuccess ? <div className="input-field col s6 center">
                <button
                  className="waves-effect waves btn light-blue darken-4"
                  onClick={onSubmitForm}
                >
                  <i className="material-icons right">save</i>Guardar
                </button>
              </div>:null}
              {!onSuccess ?<div className="input-field col s6 center">
                <Link
                  className="waves-effect waves btn light-blue darken-4"
                  to="/sian"
                >
                  <i className="material-icons right">close</i>Salir
                </Link>
              </div>:null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditU;
