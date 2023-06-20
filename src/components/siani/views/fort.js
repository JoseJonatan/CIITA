import M from "materialize-css";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../../node_modules/materialize-css/dist/css/materialize.min.css";
import { Link, useHistory } from "react-router-dom";
import LogoSIANI from '../../../images/report/sianilogo.png';

//New API
import {
  fortaPUT,
  fortaGetByID,
  sendMailConfirmation,
  home
} from "../services/api";

function Fort() {
  const { t, i18n } = useTranslation("logi");

  const [showResults, setShowResults] = React.useState(false);

  const [pre1,setPre1] = useState(false);
  const [pre2,setPre2] = useState(false);

  let history = useHistory();

  const [inputs, setInputs] = useState({
    id: "",
    one:"",
    two:"",
    three:"",
    four: "",
    five: "",
    six:""
  });

  useEffect(() => {
    //Get data from Database
    getData();
    M.AutoInit();
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {preventScrolling: false});
    
    window.scrollTo(0, 0);

    //Update States
  }, [inputs.flag]);

  const getData = async () => {
    try {
     //Get Quiz ID from localStorage
     const dataid = window.localStorage.getItem('quizId');
     console.log(dataid);
     
     //Get the Answers from Data Base, if is a new survey, they will be null o just ""
     const inputsFromDB = await fortaGetByID(dataid);
     console.log("Quiz ID desde GET by ID: "+inputsFromDB.resultado.fort[0].quiz_id);

     //Set the inputs values for the user visualization
     setInputs({...inputs,
      id: dataid,
      one:inputsFromDB.resultado.fort[0].fort_one,
      two:inputsFromDB.resultado.fort[0].fort_two,
      three:inputsFromDB.resultado.fort[0].fort_three,
      four: inputsFromDB.resultado.fort[0].fort_four,
      five: inputsFromDB.resultado.fort[0].fort_five,
      six:inputsFromDB.resultado.fort[0].fort_six,
      flag: ""
     });

     M.updateTextFields();

    } catch (err) {
      console.error(err.response);
    }
  };

  // Just save Changes on Inputs
  const onChange = (e) =>{
    setInputs({ ...inputs, [e.target.name]: e.target.value });

    if(e.target.name === "one"){
      setPre1(true);
    }

    if(e.target.name === "four"){
      setPre2(true);
    }

  }

  //When the button Save is pressed
  const onSubmitSave = async () => {

    try {
      //Get the Quiz ID from LocalStorage
      inputs.id = window.localStorage.getItem('quizId');
      console.log(inputs);

      console.log("inputs:");
      console.log(inputs);

      //Make an UPDATE to the row in table
      await fortaPUT(inputs.id,inputs);

      //Get User Data
      const dataUser = await home();

      //Set the email
      localStorage.setItem('UserEmail',dataUser.user_email);

      //Send Email Confirmation
      let dataEmail = {
        email: dataUser.user_email,
        folio: localStorage.getItem('Folio'),
        name: dataUser.user_name
      }

      await sendMailConfirmation(dataEmail);

      M.toast({html: '¡Guardado Exitoso!'});

      //Flag for button -Next-
      setShowResults(true);
    } catch (error) {
      console.log(error);
      console.log(error.response);
      M.toast({html: '¡Fallo en el Guardado!'})
    }
  };

  const onSubmitNext = async () => {
      history.push("/review");
  }; 

  const onReturn = () => {
    history.push("/futu");
  };

    return (
      <div>
        <div className="col s12">
          <div className="card">
            <div className="card-action light-blue darken-4 white-text center-align">
              <h5>VII. Fortalezas y áreas de oportunidad</h5>
            </div>
            <div className="card-content">
                <div className="row">
                  <div className="card-panel col s12 m12">
                    <div className="input-field col s12 m12">
                      <i className="material-icons prefix">create</i>
                      <div className="col s12 m12 center-align">
                        <p>
                          1.-Describa las principales fortalezas de su empresa:
                        </p>
                        <br></br>

                        <div className="input-field col s12 m12">
                          <input
                            id="on"
                            name="one"
                            value={inputs.one}
                            type="text"
                            onChange={(e) => onChange(e)}
                            className="materialize-textarea "
                          ></input>
                          <label htmlFor="on">a)</label>
                        </div>

                        {pre1 ? <div className="input-field col s12 m12">
                          <input
                            id="tw"
                            name="two"
                            value={inputs.two}
                            type="text"
                            onChange={(e) => onChange(e)}
                            className="materialize-textarea "
                          ></input>
                          <label htmlFor="tw">b)</label>
                        </div>: null}

                        {pre1 ? <div className="input-field col s12 m12">
                          <input
                            id="thr"
                            name="three"
                            value={inputs.three}
                            type="text"
                            onChange={(e) => onChange(e)}
                            className="materialize-textarea "
                          ></input>
                          <label htmlFor="thr">c)</label>
                        </div>:null}
                      </div>
                    </div>

                    <div className="input-field col s12 m12">
                      <i className="material-icons prefix">create</i>
                      <div className="col s12 m12 center-align">
                        <p>
                          2.-Describa el tipo de apoyo que le gustaría recibir de
                          un Centro de Innovación como el CIITA Ciudad Juárez,
                          Chihuahua:
                        </p>
                        <br></br>

                        <div className="input-field col s12 m12">
                          <input
                            id="fou"
                            name="four"
                            value={inputs.four}
                            type="text"
                            onChange={(e) => onChange(e)}
                            className="materialize-textarea "
                          ></input>
                          <label htmlFor="fou">a)</label>
                        </div>

                        {pre2 ? <div className="input-field col s12 m12">
                          <input
                            id="fiv"
                            name="five"
                            value={inputs.five}
                            type="text"
                            onChange={(e) => onChange(e)}
                            className="materialize-textarea "
                          ></input>
                          <label htmlFor="fiv">b)</label>
                        </div>:null}

                        {pre2 ?<div className="input-field col s12 m12">
                          <input
                            id="si"
                            name="six"
                            value={inputs.six}
                            type="text"
                            onChange={(e) => onChange(e)}
                            className="materialize-textarea "
                          ></input>
                          <label htmlFor="si">c)</label>
                        </div>:null}
                      </div>
                    </div>
                  </div>

                  <div className="input-field col s12 m4 center">
                    <button
                        className="btn waves-effect waves-light light-blue darken-4"
                        type="submit"
                        onClick={onReturn}
                        name="action">
                        Regresar
                        <i className="material-icons left">arrow_back</i>
                      </button>
                  </div>

                  {pre1 && pre2 ?<div className="input-field col s12 m4 center">
                    <button
                      className="btn modal-trigger waves-effect waves-light light-blue darken-4"
                      type="submit"
                      onClick={onSubmitSave}
                      name="action"
                      href="#modal1"
                    >
                      Guardar
                      <i className="material-icons right">save</i>
                    </button>
                  </div>:null}

                  <div id="modal1" className="modal">
                    <div className="modal-content center">
                      <h4>Mensaje de SIANI</h4>
                      <img src={LogoSIANI} alt="" width="120"/>
                      <h5>
                        ¡Muchas gracias por tomarse el tiempo para completar la encuesta!
                      </h5>
                      <p>
                        Se ha enviado un correo electrónico a <b>{localStorage.getItem('UserEmail')}</b> con el folio de la encuesta.
                        Sus respuestas nos ayudan a comprender la situación de su organización para ofrecerle la mejor atención.
                      </p>
                    </div>
                    <div className="modal-footer">
                      <Link 
                        target='_blank'
                        to="/deve"
                        className="waves-effect waves-pink btn pink darken-4"
                        style={{marginRight: 15}}>
                          Conoce más del CIITA
                      </Link>
                      <a 
                        href="#!" 
                        className="modal-close waves-effect waves-green btn light-blue darken-4"
                        >De acuerdo</a>
                    </div>
                </div>

                  { showResults ? <div className="input-field col s12 m4 center">
                  <button
                    className="btn waves-effect waves-light light-blue darken-4"
                    type="submit"
                    onClick={onSubmitNext}
                    name="action">
                    Salir
                    <i className="material-icons right">close</i>
                  </button>
                </div> : null }
                </div>

            </div>
          </div>
        </div>
        
      </div>
    );
}
export default Fort;
