import React, { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
//Api
import { signup } from "../services/api";

const Signup = () => {
  let history = useHistory();
  const [inputs, setInputs] = useState({
    name: "",
    job: "",
    tel: "",
    email: "",
    password: "",
  });
  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const onSubmitForm = async () => {
    if (
      inputs.email === "" ||
      inputs.password === "" ||
      inputs.tel === "" ||
      inputs.job === "" ||
      inputs.name === ""
    ) {
      console.log("llenar campos");
    } else {
      try {
        await signup(inputs)
        history.push("/log");
      } catch (error) {
          console.log(error)
          console.log(error.response)
      }
    }
  };
  return (
    <div className="container">
      <div className="col s12 m6 " style={{paddingTop: 50}}>
        <div className="card">
          <div className="card-action light-blue darken-4 white-text center">
            <h5>Registro</h5>
          </div>
          <div className="card-content">
            <div className="row">
              <div className="input-field col s12 center ">
                <i className="material-icons prefix">account_box</i>
                <input
                  id="inputName"
                  name="name"
                  type="text"
                  value={inputs.name}
                  onChange={(e) => onChange(e)}
                />
                <label htmlFor="inputName">Nombre</label>
              </div>
              <div className="input-field col s12 center ">
                <i className="material-icons prefix">business</i>
                <input
                  id="inputjob"
                  name="job"
                  type="text"
                  value={inputs.job}
                  onChange={(e) => onChange(e)}
                  className="materialize-textarea "
                ></input>
                <label htmlFor="inputjob">Nombre de la Empresa</label>
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
                <label htmlFor="inputTel">Teléfono</label>
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
              <div className="input-field col s12 center">
                <i className="material-icons prefix">rtt</i>
                <input
                  id="inputPass"
                  name="password"
                  value={inputs.password}
                  onChange={(e) => onChange(e)}
                  type="password"
                  className="materialize-textarea"
                ></input>
                <label htmlFor="inputPass">Contraseña</label>
              </div>
              
              <div className="input-field col s12 center">
                <button
                  className="waves-effect waves-light light-blue darken-4 btn"
                  onClick={onSubmitForm}
                >
                  <i className="material-icons right">send</i>Registrarse
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;