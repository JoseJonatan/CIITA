import M from "materialize-css";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../../node_modules/materialize-css/dist/css/materialize.min.css";
import { useHistory } from "react-router-dom";

//New API
import {
  marketingGetByID,
  marketingPUT
} from "../services/api";

function Marketing () {

  const { t, i18n } = useTranslation("logi");

  const [showResults, setShowResults] = React.useState(false);

  let history = useHistory();

  const [areasCap, setAreasCap] = useState({});

  const [inputs, setInputs] = useState({
    id: "",
    capture: [], 
    other: "",
    mark: "", 
    feedback : "", 
    client: "", 
    sales: "", 
    expo: "", 
  });

  useEffect(() => {
    //Get data from Database
    getData();
    M.AutoInit();
    window.scrollTo(0, 0);
    //Update States
  }, [inputs.flag]);

  const getData = async () => {
    try {
      //Get Quiz ID from localStorage
      const dataid = window.localStorage.getItem('quizId');
      console.log(dataid);

      //Get the Answers from Data Base, if is a new survey, they will be null o just ""
      const inputsFromDB = await marketingGetByID(dataid);
      console.log("Quiz ID desde GET by ID: "+inputsFromDB.resultado.marketing[0].quiz_id);

      //Set the inputs values for the user visualization
      setInputs({...inputs,
        id: dataid,
        capture: inputsFromDB.resultado.marketing[0].mark_capture, 
        other: inputsFromDB.resultado.marketing[0].mark_other, 
        mark: inputsFromDB.resultado.marketing[0].mark_mark, 
        feedback : inputsFromDB.resultado.marketing[0].mark_feedback, 
        client: inputsFromDB.resultado.marketing[0].mark_client, 
        sales: inputsFromDB.resultado.marketing[0].mark_sales, 
        expo: inputsFromDB.resultado.marketing[0].mark_export, 
        flag: ""
      });

      //Set results of Question 1
      setAreasCap({...areasCap,
        ["B2B"]:inputs.capture.includes("B2B"),
        ["Medios digitales"]:inputs.capture.includes("Medios digitales"),
        ["Foros y Exposiciones"]:inputs.capture.includes("Foros y Exposiciones"),
      });

      M.updateTextFields();
    } catch (err) {
      console.error(err.response);
    }
  };

  // Just save Changes on Inputs
  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  //Save Arrays
  const checkboxOnChange = (e, set, areas) => {
    set({ ...areas, [e.target.value]: e.target.checked });
  };

  const addArray = (object) => {
    const arr = [];
    for (const property in object) {
      if (object[property] === true) {
        arr.push(property);
      }
    }
    return arr;
  };

  //When the button Save is pressed
  const onSubmitSave = async () => {
    //Add arrays on Inputs
    inputs.capture = addArray(areasCap);

    if(
      inputs.capture.length === 0 || inputs.mark=== null ||
      inputs.feedback === null || inputs.client === null ||
      inputs.sales === null || inputs.expo === null
    ){
      console.log(inputs);

      if(inputs.capture.length === 0){
        M.toast({html: '¡Llenar pregunta 1!'});
      }
      if(inputs.mark=== null){
        M.toast({html: '¡Llenar pregunta 2!'});
      }
      if(inputs.feedback === null){
        M.toast({html: '¡Llenar pregunta 3!'});
      }
      if(inputs.client === null){
        M.toast({html: '¡Llenar pregunta 4!'});
      }
      if(inputs.sales === null){
        M.toast({html: '¡Llenar pregunta 5!'});
      }
      if(inputs.expo === null){
        M.toast({html: '¡Llenar pregunta 6!'});
      }
    }
    else{
      try {
        //Get the Quiz ID from LocalStorage
        inputs.id = window.localStorage.getItem('quizId');
        console.log(inputs);
  
        //Make an UPDATE to the row in table
        await marketingPUT(inputs.id,inputs);
        M.toast({html: '¡Guardado Exitoso!'});
  
        //Flag for button -Next-
        setShowResults(true);
      } catch (error) {
        console.log(error);
        console.log(error.response);
        M.toast({html: '¡Fallo en el Guardado!'})
      }
    }
    
  };

  const onSubmitNext = async () => {
      history.push("/futu");
  };

  const onReturn = () => {
    history.push("/pro");
  };

    return (
      <div>
          <div className="col s12">
            <div className="card">
                <div className="card-action light-blue darken-4 white-text center-align">
                    <h5>V. Marketing y ventas</h5>
                </div>
              <div className="card-content">
                  
                  <div className="row">
                  <div className="card-panel col s12 m12">

                    <div className="input-field col s12 m12">
                      <i className="material-icons prefix">create</i>
                      <div className="col s12 center-align">
                        <p>1.-¿Cómo capta a sus clientes?</p>
                          <br></br>
                        <p className="col s12 m4">
                          <label>
                            <input
                              type="checkbox"
                              name="setAreasCap"
                              value="B2B"
                              onChange={(e) => { checkboxOnChange( e, setAreasCap, areasCap);
                              }}
                              onClick={(e) => { checkboxOnChange( e, setAreasCap, areasCap);
                              }}
                              defaultChecked={inputs.capture === null ? null : 
                                inputs.capture.includes("B2B")? true : null}
                            />
                            <span>B2B</span>
                          </label>
                        </p>
                        <p className="col s12 m4">
                          <label>
                          <input
                              type="checkbox"
                              name="setAreasCap"
                              value="Medios digitales"
                              onChange={(e) => { checkboxOnChange( e, setAreasCap, areasCap);
                              }}
                              onClick={(e) => { checkboxOnChange( e, setAreasCap, areasCap);
                              }}
                              defaultChecked={inputs.capture === null ? null : 
                                inputs.capture.includes("Medios digitales")? true : null}
                            />
                              <span>Medios digitales</span>
                          </label>
                        </p>
                        <p className="col s12 m4">
                          <label>
                          <input
                              type="checkbox"
                              name="setAreasCap"
                              value="Foros y Exposiciones"
                              onChange={(e) => { checkboxOnChange( e, setAreasCap, areasCap);
                              }}
                              onClick={(e) => { checkboxOnChange( e, setAreasCap, areasCap);
                              }}
                              defaultChecked={inputs.capture === null ? null : 
                                inputs.capture.includes("Foros y Exposiciones")? true : null}
                            />
                              <span>Foros y Exposiciones</span>
                          </label>
                        </p>
                        <div className="input-field col s12 m6">
                          <input
                            id="othe"
                            name="other"
                            value={inputs.other}
                            type="text"
                            onChange={(e) => onChange(e)}
                            className="materialize-textarea "
                          ></input>
                        <label htmlFor="othe">Escriba otra forma</label>
                      </div>
                      </div>
                    
                      

                    </div>
                    
                    <div className="input-field col s12 m6">
                      <i className="material-icons prefix">create</i>
                      <div className="col s12 m12 center-align">
                        <p>2.-¿Le interesa invertir en una estrategia de marketing?</p>
                          <br></br>
                        <p className="col s12 m3">
                          <label>
                            <input
                              id="mar"
                              type="radio"
                              name="mark"
                              value="Si"
                              onChange={(e) => onChange(e)}
                              checked={inputs.mark === 'Si'}
                            />
                              <span>Si</span>
                          </label>
                        </p>
                        <p className="col s12 m3">
                          <label>
                            <input
                              id="mar"
                              type="radio"
                              name="mark"
                              value="No"
                              onChange={(e) => onChange(e)}
                              checked={inputs.mark === 'No'}
                            />
                              <span>No</span>
                          </label>
                        </p>
                      </div>
                    </div>

                    <div className="input-field col s12 m6">
                      <i className="material-icons prefix">create</i>
                      <div className="col s12 m12 center-align">
                        <p>3.-¿Recibe retroalimentación del cliente?</p>
                          <br></br>
                        <p className="col s12 m3">
                          <label>
                            <input
                              id="feed"
                              type="radio"
                              name="feedback"
                              value="Si"
                              onChange={(e) => onChange(e)}
                              checked={inputs.feedback === 'Si'}
                            />
                              <span>Si</span>
                          </label>
                        </p>
                        <p className="col s12 m3">
                          <label>
                            <input
                              id="feed"
                              type="radio"
                              name="feedback"
                              value="No"
                              onChange={(e) => onChange(e)}
                              checked={inputs.feedback === 'No'}
                            />
                              <span>No</span>
                          </label>
                        </p>
                      </div>
                    </div>

                    <div className="input-field col s12 m6">
                      <i className="material-icons prefix">create</i>
                      <div className="col s12 m12 center-align">
                        <p>4.-¿Mide la satisfacción del cliente?</p>
                          <br></br>
                        <p className="col s12 m3">
                          <label>
                            <input
                              id="cli"
                              type="radio"
                              name="client"
                              value="Si"
                              onChange={(e) => onChange(e)}
                              checked={inputs.client === 'Si'}
                            />
                              <span>Si</span>
                          </label>
                        </p>
                        <p className="col s12 m3">
                          <label>
                            <input
                              id="cli"
                              type="radio"
                              name="client"
                              value="No"
                              onChange={(e) => onChange(e)}
                              checked={inputs.client === 'No'}
                            />
                              <span>No</span>
                          </label>
                        </p>
                      </div>
                    </div>

                    <div className="input-field col s12 m6">
                      <i className="material-icons prefix">create</i>
                      <div className="col s12 m12 center-align">
                        <p>5.-¿Ofrece algún programa de servicio post-venta?</p>
                          <br></br>
                        <p className="col s12 m3">
                          <label>
                            <input
                              id="sal"
                              type="radio"
                              name="sales"
                              value="Si"
                              onChange={(e) => onChange(e)}
                              checked={inputs.sales === 'Si'}
                            />
                              <span>Si</span>
                          </label>
                        </p>
                        <p className="col s12 m3">
                          <label>
                            <input
                              id="sal"
                              type="radio"
                              name="sales"
                              value="No"
                              onChange={(e) => onChange(e)}
                              checked={inputs.sales === 'No'}
                            />
                              <span>No</span>
                          </label>
                        </p>
                      </div>
                    </div>

                    <div className="input-field col s12 m6">
                      <i className="material-icons prefix">create</i>
                      <div className="col s12 m12 center-align">
                        <p>6.-¿Exporta su producto?</p>
                          <br></br>
                        <p className="col s12 m3">
                          <label>
                            <input
                              id="exp"
                              type="radio"
                              name="expo"
                              value="Si"
                              onChange={(e) => onChange(e)}
                              checked={inputs.expo === 'Si'}
                            />
                              <span>Si</span>
                          </label>
                        </p>
                        <p className="col s12 m3">
                          <label>
                            <input
                              id="exp"
                              type="radio"
                              name="expo"
                              value="No"
                              onChange={(e) => onChange(e)}
                              checked={inputs.expo === 'No'}
                            />
                              <span>No</span>
                          </label>
                        </p>
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

              <div className="input-field col s12 m4 center">
                <button
                  className="btn waves-effect waves-light light-blue darken-4"
                  type="submit"
                  onClick={onSubmitSave}
                  name="action"
                >
                  Guardar
                  <i className="material-icons right">save</i>
                </button>
              </div>

              { showResults ? <div className="input-field col s12 m4 center">
                    <button
                    className="btn waves-effect waves-light light-blue darken-4"
                    type="submit"
                    onClick={onSubmitNext}
                    name="action">
                    Siguiente
                    <i className="material-icons right">arrow_forward</i>
                    </button>
                    </div> : null }

                  </div>
              </div>
            </div>
          </div>
        </div>
    );
}
export default Marketing;