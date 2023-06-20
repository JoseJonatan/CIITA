import M from "materialize-css"; 
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../../node_modules/materialize-css/dist/css/materialize.min.css";
import { useHistory} from "react-router-dom";

//New API
import {  companyPUT,
          companyGetByID 
        } from "../services/api";

function Info () {

    const { t, i18n } = useTranslation("logi");

    const [showResults, setShowResults] = React.useState(false);

    const [flag1_, setFlag1] = useState(false);

    const [flag2_, setFlag2] = useState(false);

    let history = useHistory();

    const [inputs, setInputs] = useState({
      id: "",
      profile: "", 
      annual: "", 
      rate: "", 
      develop: "", 
      skill: "", 
      plan: "", 
      planning: "", 
      senior: "",
      financial: "",
      pay: "",
      other: "",
      seniortwo: ""
    });

    useEffect(() => {
      //Get data from Database
      getData();
      M.AutoInit();
      window.scrollTo(0, 0);
      M.updateTextFields();
      //Update States
    }, [inputs.flag]);
  
    const getData = async () => {
      try {
        //Get Quiz ID from localStorage
        const dataid = window.localStorage.getItem('quizId');

        //Get the Answers from Data Base, if is a new survey, they will be null o just ""
        const inputsFromDB = await companyGetByID(dataid);
        console.log("Quiz ID desde GET by ID: "+inputsFromDB.resultado.company[0].quiz_id)

        //Set the inputs values for the user visualization
        setInputs({ ...inputs, 
          id: dataid,
          profile: inputsFromDB.resultado.company[0].comp_profile, 
          annual: inputsFromDB.resultado.company[0].comp_annual, 
          rate: inputsFromDB.resultado.company[0].comp_rate, 
          develop: inputsFromDB.resultado.company[0].comp_develop, 
          skill: inputsFromDB.resultado.company[0].comp_skill, 
          plan: inputsFromDB.resultado.company[0].comp_plan, 
          planning: inputsFromDB.resultado.company[0].comp_planning, 
          senior: inputsFromDB.resultado.company[0].comp_senior,
          financial: inputsFromDB.resultado.company[0].comp_financial,
          pay: inputsFromDB.resultado.company[0].comp_pay,
          other: inputsFromDB.resultado.company[0].comp_other,
          seniortwo: inputsFromDB.resultado.company[0].comp_seniortwo,
          flag:""
         });

         //Set flags for invisible inputs
         if(inputsFromDB.resultado.company[0].comp_senior === "Otro"){
          setFlag2(true);
         }
         if(inputsFromDB.resultado.company[0].comp_pay === "Otro"){
          setFlag1(true);
         }

         M.updateTextFields();

      } catch (err) {
        console.error(err.response);
      }
    };
  
    // Just save Changes on Inputs
    const onChange = (e) => {
      setInputs({ ...inputs, [e.target.name]: e.target.value });
      if(e.target.name === "senior"){
        if(e.target.value === "Otro"){
          setFlag2(true);
        }
        else{
          setFlag2(false);
        }
      }
      if(e.target.name === "pay"){
        if(e.target.value === "Otro"){
          setFlag1(true);
        }
        else{
          setFlag1(false);
        }
      }
    }
      
    //When the button Save is pressed
    const onSubmitSave = async () => {
      if(inputs.profile === null || inputs.annual == null ||
      inputs.rate === null || inputs.develop === null ||
      inputs.skill === null || inputs.plan === null ||
      inputs.planning === null || inputs.financial === null||
      inputs.pay === null || inputs.senior === null ||
      inputs.senior === "Otro" || inputs.pay === "Otro"
      ){
        
        console.log(inputs);

        if(inputs.profile === null){
          M.toast({html: '¡Llenar pregunta 1!'});
        }
        if(inputs.annual == null){
          M.toast({html: '¡Llenar pregunta 2!'});
        }
        if(inputs.rate === null){
          M.toast({html: '¡Llenar pregunta 3!'});
        }
        if(inputs.develop === null){
          M.toast({html: '¡Llenar pregunta 4!'});
        }
        if(inputs.skill === null){
          M.toast({html: '¡Llenar pregunta 5!'});
        }
        if(inputs.plan === null){
          M.toast({html: '¡Llenar pregunta 6!'});
        }
        if(inputs.planning === null){
          M.toast({html: '¡Llenar pregunta 7!'});
        }
        if(inputs.financial === null){
          M.toast({html: '¡Llenar pregunta 8!'});
        }
        if(inputs.pay === null){
          M.toast({html: '¡Llenar pregunta 9!'});
        }
        if(inputs.pay === "Otro"){
          if(inputs.other === "" || inputs.other === null){
            M.toast({html: '¡Llenar pregunta 9.A!'});
          }
          else if(inputs.senior === "Otro"){
            await Guardar();
          }
          else{
            await Guardar();
          }
        }
        if(inputs.senior === null){
          M.toast({html: '¡Llenar pregunta 10!'});
        }
        if(inputs.senior === "Otro"){
          if(inputs.seniortwo === "" || inputs.seniortwo === null){
            M.toast({html: '¡Llenar pregunta 10.A!'});
          }
          else if(inputs.pay != "Otro"){
            await Guardar();
          }
        }
      }
      else{
        await Guardar();
      }
        
    };

    const Guardar = async () => {
      try {
        //Get the Quiz ID from LocalStorage
        inputs.id = window.localStorage.getItem('quizId');
        console.log(inputs);

        //Make an UPDATE to the row in table
        await companyPUT(inputs.id,inputs);
        M.toast({html: '¡Guardado Exitoso!'});

        //Flag for button -Next-
        setShowResults(true);
      } catch (error) {
        console.log(error);
        console.log(error.response);
        M.toast({html: '¡Fallo en el Guardado!'})
      }
    };
  
    //Route to the Next Section of the Survey
    const onSubmitNext = () => {
      history.push("/cap");
    };

    return (
      <div>
          <div className="col s12">
            <div className="card">
                <div className="card-action light-blue darken-4 white-text center-align">
                    <h5>II. Información Organizacional</h5>
                </div>
              <div className="card-content">

                  <div className="row">
                  <div className="card-panel col s12 m12">
                    <div className="input-field col s12 m6">
                      <i className="material-icons prefix">label</i>
                      <select id="pro" name="profile" value={inputs.profile} onChange={(e) => onChange(e)}>
                        <option value="" disabled selected>Seleccione su opción</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                      </select> 
                      <label htmlFor="user">1.-¿Cuenta con perfiles de puesto?</label>
                    </div>

                    <div className="input-field col s12 m6">
                      <i className="material-icons prefix">label</i>
                      <select id="ann" name="annual" value={inputs.annual} onChange={(e) => onChange(e)}>
                        <option value="" disabled selected>Seleccione su opción</option>
                        <option value="Si" >Si</option>
                        <option value="No" >No</option>
                      </select>
                      <label htmlFor="user">2.-¿Realiza evaluaciones anuales de desempeño?</label>
                    </div>

                    <div className="input-field col s12 m6">
                      <i className="material-icons prefix">label</i>
                      <select id="rat" name="rate" value={inputs.rate} onChange={(e) => onChange(e)}>
                        <option value="" disabled selected>Seleccione su opción</option>
                        <option value="Si" >Si</option>
                        <option value="No" >No</option>
                      </select>
                      <label htmlFor="user">3.-¿Mide el indice de rotación de la empresa?</label>
                    </div>

                    <div className="input-field col s12 m6">
                      <i className="material-icons prefix">label</i>
                      <select id="dev" name="develop" value={inputs.develop} onChange={(e) => onChange(e)}>
                        <option value="" disabled selected>Seleccione su opción</option>
                        <option value="Si" >Si</option>
                        <option value="No" >No</option>
                      </select>
                      <label htmlFor="user">4.-¿Cuenta con un plan de desarrollo para sus empleados?</label>
                    </div>

                    <div className="input-field col s12 m6">
                      <i className="material-icons prefix">label</i>
                      <select id="ski" name="skill" value={inputs.skill} onChange={(e) => onChange(e)}>
                        <option value="" disabled selected>Seleccione su opción</option>
                        <option value="Si" >Si</option>
                        <option value="No" >No</option>
                      </select>
                      <label htmlFor="user">5.-¿Cuenta con matriz de habilidades?</label>
                    </div>

                    <div className="input-field col s12 m6">
                      <i className="material-icons prefix">label</i>
                      <select id="pla" name="plan" value={inputs.plan} onChange={(e) => onChange(e)} >
                        <option value="" disabled selected>Seleccione su opción</option>
                        <option value="Si" >Si</option>
                        <option value="No" >No</option>
                      </select>
                      <label htmlFor="user">6.-¿Cuenta con un plan de inducción?</label>
                    </div>

                    <div className="input-field col s12 m6">
                      <i className="material-icons prefix">label</i>
                      <select id="plani" name="planning" value={inputs.planning} onChange={(e) => onChange(e)}  >
                        <option value="" disabled selected>Seleccione su opción</option>
                        <option value="Si" >Si</option>
                        <option value="No" >No</option>
                      </select>
                      <label htmlFor="user">7.-¿Realiza planeación estrategica?</label>
                    </div>

                    <div className="input-field col s12 m6">
                      <i className="material-icons prefix">label</i>
                      <select id="fin" name="financial" value={inputs.financial} onChange={(e) => onChange(e)} >
                        <option value="" disabled selected>Seleccione su opción</option>
                        <option value="Si" >Si</option>
                        <option value="No" >No</option>
                      </select>
                      <label htmlFor="user">8.-¿Analiza las razones financieras de su empresa?</label>
                    </div>

                    <div className="input-field col s12 m6">
                      <i className="material-icons prefix">label</i>
                      <select id="pa" name="pay" value={inputs.pay} onChange={(e) => onChange(e)}>
                        <option value="" disabled selected>Seleccione su opción</option>
                        <option value="30" >30</option>
                        <option value="45" >45</option>                        
                        <option value="60" >60</option>
                        <option value="90" >90</option>
                        <option value="120" >120</option>
                        <option value="Otro" >Otro</option>
                      </select>
                      <label htmlFor="user">9.-¿Cuáles son los términos de pago que maneja con los clientes? (Días)</label>
                    </div>

                    <div className="input-field col s12 m6">
                      <i className="material-icons prefix">label</i>
                      <select id="sen" name="senior" value={inputs.senior} onChange={(e) => onChange(e)}>
                        <option value="" disabled selected>Seleccione la estrategia de la alta gerencia:</option>
                        <option value="Calidad" >Calidad</option>
                        <option value="Reducción de costo" >Reducción de costo</option>
                        <option value="Tiempo de entrega" >Tiempo de entrega</option>
                        <option value="Expanción" >Expansión</option>
                        <option value="Otro" >Otro</option>
                      </select>
                      <label htmlFor="user">10.-Seleccione la estrategia de la alta gerencia:</label>
                    </div>

                    {flag1_ ?<div className="input-field col s12 m6">
                        <i className="material-icons prefix">label</i>
                          <input
                            id="othe"
                            name="other"
                            value={inputs.other}
                            type="text"
                            onChange={(e) => onChange(e)}
                            className="materialize-textarea"
                          ></input>
                        <label htmlFor="othe">9.A-¿Otro termino de pago que maneje con sus clientes?</label>
                    </div>: null}

                    {flag2_ ? flag1_ ? <div className="input-field col m6 ">
                        <i className="material-icons prefix">label</i>
                          <input
                            id="othe1"
                            name="seniortwo"
                            value={inputs.seniortwo}
                            type="text"
                            onChange={(e) => onChange(e)}
                            className="materialize-textarea"
                          ></input>
                        <label htmlFor="othe1">10.A.-¿Otra estrategia de la alta gerencia?</label>
                    </div>:
                    <div className="input-field col m6 offset-m6">
                      <i className="material-icons prefix">label</i>
                        <input
                          id="othe1"
                          name="seniortwo"
                          value={inputs.seniortwo}
                          type="text"
                          onChange={(e) => onChange(e)}
                          className="materialize-textarea"
                        ></input>
                      <label htmlFor="othe1">10.1.-¿Otra estrategia de la alta gerencia?</label>
                  </div>: null}

                  </div>

                    <div className="input-field col s12 m6 center">
                    <button
                        className="btn waves-effect waves-light light-blue darken-4"
                        type="submit"
                        onClick={onSubmitSave}
                        name="action">
                        <i className="material-icons left">save</i>
                        Guardar
                        
                      </button>
                    </div>

                    { showResults ? <div className="input-field col s12 m6 center">
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
export default Info;