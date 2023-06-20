import M from "materialize-css";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../../node_modules/materialize-css/dist/css/materialize.min.css";
import { useHistory } from "react-router-dom";

//New API
import {  
  processGetByID,
  processPUT
} from "../services/api";

function Proce () {

  const { t, i18n } = useTranslation("logi");

  const [showResults, setShowResults] = React.useState(false);

  const [btnFlag, setBtnFlag] = React.useState(true);

  const [btnFlagRadio, setBtnFlagRadio] = React.useState(false);

  const [inputsFlagsFill,setInputsFlagsFill] = useState({
    p1: false,
    p3: false,
  });

  let history = useHistory();

  const [areasSoft, setAreasSoft] = useState({});
  const [areasMeth, setAreasMeth] = useState({});
  const [areasProce, setAreasProce] = useState({});
  const [areasLearn, setAreasLearn] = useState({});
  const [areasIndustry, setAreasIndustry] = useState({});

  const [multiOption, setMultiOption] = useState({
    p1:false,
    p6: false,
    p7: false,
    p11: false,
    p12: false
  });

  const [inputs, setInputs] = useState({
    id: "",
    soft: [], 
    indicators: "", 
    quality: "",
    qualitytwo: "", 
    control: "",
    bottle: "",
    method: [],
    methodtwo: "",
    process: [], 
    processtwo: "",
    technical: "",
    plan: "",
    securiry: "", 
    learn: [],
    learntwo: "",
    industry: [],
    industrytwo: "",
    softtwo: "",
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
      const inputsFromDB = await processGetByID(dataid);
      console.log("Quiz ID desde GET by ID: "+inputsFromDB.resultado.process[0].quiz_id);

      //Set the inputs values for the user visualization
      setInputs({...inputs,
        id: dataid,
        soft: inputsFromDB.resultado.process[0].pro_soft, 
        indicators: inputsFromDB.resultado.process[0].pro_indicators, 
        quality: inputsFromDB.resultado.process[0].pro_quality,
        qualitytwo: inputsFromDB.resultado.process[0].pro_qualitytwo, 
        control: inputsFromDB.resultado.process[0].pro_control,
        bottle: inputsFromDB.resultado.process[0].pro_bottle,
        method: inputsFromDB.resultado.process[0].pro_method,
        methodtwo: inputsFromDB.resultado.process[0].pro_methodtwo,
        process: inputsFromDB.resultado.process[0].pro_process, 
        processtwo: inputsFromDB.resultado.process[0].pro_processtwo,
        technical: inputsFromDB.resultado.process[0].pro_technical,
        plan: inputsFromDB.resultado.process[0].pro_plan,
        securiry: inputsFromDB.resultado.process[0].pro_securiry, 
        learn: inputsFromDB.resultado.process[0].pro_learn,
        learntwo: inputsFromDB.resultado.process[0].pro_learntwo,
        industry: inputsFromDB.resultado.process[0].pro_industry,
        industrytwo: inputsFromDB.resultado.process[0].pro_industrytwo,
        softtwo: inputsFromDB.resultado.process[0].pro_softtwo,
        flag: ""
      });

      //Set results of Question 1
      setAreasSoft({...areasSoft,
        ["Diseño (CAD)"]:inputs.soft.includes("Diseño (CAD)"),
        ["Manufactura (CAE/CAM)"]:inputs.soft.includes("Manufactura (CAE/CAM)"),
        ["Administrativo"]:inputs.soft.includes("Administrativo"),
        ["Desarrollo propio"]:inputs.soft.includes("Desarrollo propio"),
        ["Otro"]:inputs.soft.includes("Otro"),
      });

      //Set results of Question 6
      setAreasMeth({...areasMeth,
        ["Inspección Visual"]:inputs.method.includes("Inspección Visual"),
        ["SPC"]:inputs.method.includes("SPC"),
        ["Six Sigma"]:inputs.method.includes("Six Sigma"),
        ["Ninguno"]:inputs.method.includes("Ninguno"),
      });

      //Set results of Question 7
      setAreasProce({...areasProce,
        ["Maquinado Convencional"]:inputs.process.includes("Maquinado Convencional"),
        ["Troquelado"]:inputs.process.includes("Troquelado"),
        ["Diseño"]:inputs.process.includes("Diseño"),
        ["Recubrimiento"]:inputs.process.includes("Recubrimiento"),
        ["Tratamiento térmico"]:inputs.process.includes("Tratamiento térmico"),
        ["Inyección de Plástico"]:inputs.process.includes("Inyección de Plástico"),
        ["Automatización"]:inputs.process.includes("Automatización"),
        ["TIG / MIG"]:inputs.process.includes("TIG / MIG"),
        ["Dimensionado"]:inputs.process.includes("Dimensionado"),
        ["Maquinado CNC"]:inputs.process.includes("Maquinado CNC"),
        ["Tratamiento Químico"]:inputs.process.includes("Tratamiento Químico"),
        ["Moldes y troqueles"]:inputs.process.includes("Moldes y troqueles"),
        ["Ninguno"]:inputs.process.includes("Ninguno"),
      });

      //Set results of Question 11
      setAreasLearn({...areasLearn,
        ["5s"]:inputs.learn.includes("5s"),
        ["Poka Yoke"]:inputs.learn.includes("Poka Yoke"),
        ["Kan Ben"]:inputs.learn.includes("Kan Ben"),
        ["Six Sigma"]:inputs.learn.includes("Six Sigma"),
        ["JIT"]:inputs.learn.includes("JIT"),
        ["TQM"]:inputs.learn.includes("TQM"),
        ["Kaizen"]:inputs.learn.includes("Kaizen"),
        ["Andon"]:inputs.learn.includes("Andon"),
        ["Smed"]:inputs.learn.includes("Smed"),
        ["VSM"]:inputs.learn.includes("VSM"),
        ["TPM"]:inputs.learn.includes("TPM"),
        ["Ninguna"]:inputs.learn.includes("Ninguna"),
      });

      //Set results of Question 12
      setAreasIndustry({...areasIndustry,
        ["Robótica"]:inputs.industry.includes("Robótica"),
        ["Big Data"]:inputs.industry.includes("Big Data"),
        ["IoT"]:inputs.industry.includes("IoT"),
        ["Inteligencia Artificial"]:inputs.industry.includes("Inteligencia Artificial"),
        ["Desarrollo de software dedicado"]:inputs.industry.includes("Desarrollo de software dedicado"),
        ["Desarrollo de software científico y de ingeniería"]:inputs.industry.includes("Desarrollo de software científico y de ingeniería"),
        ["Ingeniería de procesos para el desarrollo de proyectos"]:inputs.industry.includes("Ingeniería de procesos para el desarrollo de proyectos"),
        ["Metodologías y herramientas aplicados al desarrollo de software"]:inputs.industry.includes("Metodologías y herramientas aplicados al desarrollo de software"),
        ["Lenguajes para el modelado, simulación de software y procesos"]:inputs.industry.includes("Lenguajes para el modelado, simulación de software y procesos"),
        ["Realidad virtual y aumentada"]:inputs.industry.includes("Realidad virtual y aumentada"),
        ["Ninguno"]:inputs.industry.includes("Ninguno"),
      });

      //Set flags for invisible inputs
      if(inputsFromDB.resultado.process[0].pro_soft != null){
        if(inputsFromDB.resultado.process[0].pro_soft.includes("Otro"))
        {
          setBtnFlag(false);
        }
      }

      //Set text inputs on radio buttons
      if(inputs.quality === "Si"){
        setBtnFlagRadio(true);
      }

      //Set multioptions 
      setMultiOption({...multiOption,
        p1: inputs.soft.includes("Otro"),
        p6: inputs.method.includes("Ninguno"),
        p7: inputs.process.includes("Ninguno"),
        p11: inputs.learn.includes("Ninguna"),
        p12: inputs.industry.includes("Ninguno"),
      });

      M.updateTextFields();

    } catch (err) {
      console.error(err.response);
    }
  };

  // Just save Changes on Inputs
  const onChange = (e) =>{
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    if(e.target.name === "quality")
    {
      if(e.target.value === "Si")
      {
        setBtnFlagRadio(true);
        setInputsFlagsFill({...inputsFlagsFill,
          p3: true
        });
      }
      else{
        setBtnFlagRadio(false);
        setInputsFlagsFill({...inputsFlagsFill,
          p1: false
        });
      }
    }
    if(e.target.name === "qualitytwo"){
      setInputsFlagsFill({...inputsFlagsFill,
        p3: false
      });
    }

    if(e.target.name === "softtwo"){
      setInputsFlagsFill({...inputsFlagsFill,
        p1: false
      });
    }
  }

  //Save Arrays
  const checkboxOnChange = (e, set, areas) => {
    set({ ...areas, [e.target.value]: e.target.checked });
    //If press Ninguno, Input Otro Displays
    if(e.target.value === "Otro")
    { 
      if(e.target.checked === true)
      {
        setBtnFlag(false);
        setInputsFlagsFill({...inputsFlagsFill,
          p1: true
        });
      }
      else
      {
        setBtnFlag(true);
        setInputsFlagsFill({...inputsFlagsFill,
          p1: false
        });
      }
      
    }

    //Question 1, if press "Ninguno" disable all
    if(e.target.name === "setAreasSoft"){
      if(e.target.value === "Otro"){
        if(e.target.checked){
          setMultiOption({...multiOption,
            p1: true
          });
  
          setAreasSoft({...areasSoft,
            ["Diseño (CAD)"]:false,
            ["Manufactura (CAE/CAM)"]:false,
            ["Administrativo"]:false,
            ["Desarrollo propio"]:false,
            ["Otro"]:true,
          });
    
        }
        else{
          setMultiOption({...multiOption,
            p1: false
          });
        }
      }
    }

    //Question 6, if press "Ninguna" disable all
    if(e.target.name === "setAreasMeth"){
      if(e.target.value === "Ninguno"){
        if(e.target.checked){
          setMultiOption({...multiOption,
            p6: true
          });
  
          setAreasMeth({...areasMeth,
            ["Inspección Visual"]:false,
            ["SPC"]:false,
            ["Six Sigma"]:false,
            ["Ninguno"]:true,
          });
        }
        else{
          setMultiOption({...multiOption,
            p6: false
          });
        }
      }
    }

    //Question 7, if press "Ninguna" disable all
    if(e.target.name === "setAreasProce"){
      if(e.target.value === "Ninguno"){
        if(e.target.checked){
          setMultiOption({...multiOption,
            p7: true
          });
  
          setAreasProce({...areasProce,
            ["Maquinado Convencional"]:false,
            ["Troquelado"]:false,
            ["Diseño"]:false,
            ["Recubrimiento"]:false,
            ["Tratamiento térmico"]:false,
            ["Inyección de Plástico"]:false,
            ["Automatización"]:false,
            ["TIG / MIG"]:false,
            ["Dimensionado"]:false,
            ["Maquinado CNC"]:false,
            ["Tratamiento Químico"]:false,
            ["Moldes y troqueles"]:false,
            ["Ninguno"]:true,
          });
        }
        else{
          setMultiOption({...multiOption,
            p7: false
          });
        }
      }
    }

    //Question 11, if press "Ninguna" disable all
    if(e.target.name === "setAreasLearn"){
      if(e.target.value === "Ninguna"){
        if(e.target.checked){
          setMultiOption({...multiOption,
            p11: true
          });
  
          setAreasLearn({...areasLearn,
            ["5s"]:false,
            ["Poka Yoke"]:false,
            ["Kan Ben"]:false,
            ["Six Sigma"]:false,
            ["JIT"]:false,
            ["TQM"]:false,
            ["Kaizen"]:false,
            ["Andon"]:false,
            ["Smed"]:false,
            ["VSM"]:false,
            ["TPM"]:false,
            ["Ninguna"]:true,
          });
        }
        else{
          setMultiOption({...multiOption,
            p11: false
          });
        }
      }
    }

    //Question 12, if press "Ninguna" disable all
    if(e.target.name === "setAreasIndustry"){
      if(e.target.value === "Ninguno"){
        if(e.target.checked){
          setMultiOption({...multiOption,
            p12: true
          });
  
          setAreasIndustry({...areasIndustry,
            ["Robótica"]:false,
            ["Big Data"]:false,
            ["IoT"]:false,
            ["Inteligencia Artificial"]:false,
            ["Desarrollo de software dedicado"]:false,
            ["Desarrollo de software científico y de ingeniería"]:false,
            ["Ingeniería de procesos para el desarrollo de proyectos"]:false,
            ["Metodologías y herramientas aplicados al desarrollo de software"]:false,
            ["Lenguajes para el modelado, simulación de software y procesos"]:false,
            ["Realidad virtual y aumentada"]:false,
            ["Ninguno"]:true,
          });
        }
        else{
          setMultiOption({...multiOption,
            p12: false
          });
        }
      }
    }



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
    inputs.soft = addArray(areasSoft);
    inputs.method = addArray(areasMeth);
    inputs.process = addArray(areasProce);
    inputs.learn = addArray(areasLearn);
    inputs.industry = addArray(areasIndustry);

    if(
      inputs.soft.length === 0 || inputs.indicators === null ||
      inputs.quality === null || inputs.control === null ||
      inputs.bottle === null || inputs.method.length === 0 ||
      inputs.process.length === 0 || inputs.technical === null ||
      inputs.plan === null || inputs.securiry === null || 
      inputs.learn.length === 0 || inputs.industry.length === 0 ||
      inputsFlagsFill.p1 || inputsFlagsFill.p3
    ){

      if(inputs.soft.length === 0){
        M.toast({html: '¡Llenar pregunta 1!'});
      }
      if(inputsFlagsFill.p1){
        M.toast({html: '¡Llenar pregunta 1.1!'});
      }
      if(inputs.indicators === null){
        M.toast({html: '¡Llenar pregunta 2!'});
      }
      if(inputs.quality === null){
        M.toast({html: '¡Llenar pregunta 3!'});
      }
      if(inputsFlagsFill.p3){
        M.toast({html: '¡Llenar pregunta 3!'});
      }
      if(inputs.control === null){
        M.toast({html: '¡Llenar pregunta 4!'});
      }
      if(inputs.bottle === null){
        M.toast({html: '¡Llenar pregunta 5!'});
      }
      if(inputs.method.length === 0){
        M.toast({html: '¡Llenar pregunta 6!'});
      }
      if(inputs.process.length === 0){
        M.toast({html: '¡Llenar pregunta 7!'});
      }
      if(inputs.technical === null){
        M.toast({html: '¡Llenar pregunta 8!'});
      }
      if(inputs.plan === null){
        M.toast({html: '¡Llenar pregunta 9!'});
      }
      if(inputs.securiry === null){
        M.toast({html: '¡Llenar pregunta 10!'});
      } 
      if(inputs.learn.length === 0){
        M.toast({html: '¡Llenar pregunta 11!'});
      }
      if(inputs.industry.length === 0){
        M.toast({html: '¡Llenar pregunta 12!'});
      }
      
      
    }
    else{
      try {
        //Get the Quiz ID from LocalStorage
        inputs.id = window.localStorage.getItem('quizId');
        console.log(inputs);
  
        //Make an UPDATE to the row in table
        await processPUT(inputs.id,inputs);
        M.toast({html: '¡Guardado Exitoso!'});
  
        //Flag for button -Next-
        setShowResults(true);
      } catch (error) {
        console.log(error);
        console.log(error.response);
        M.toast({html: '¡Fallo en el Guardado!'})
      }
    }

    

    console.log("INPUTS: ");
    console.log(inputs);
  };

  const onSubmitNext = () => {
      history.push("/mark");
  };

  const onReturn = () => {
    history.push("/cap");
  };

    return (
      <div>
        <div className="col s12">
          <div className="card">
            <div className="card-action light-blue darken-4 white-text center-align">
              <h5>IV. Procesos</h5>
            </div>
            <div className="card-content">
              <div className="row">
                <div className="card-panel col s12 m12">
                  <div className="input-field col s12 m12">
                    <i className="material-icons prefix">create</i>
                    <div className="col s12 m12 center-align">
                      <p>
                        1.-¿Utiliza alguna de las siguientes herramientas de software especializado en su empresa?
                      </p>
                      <br></br>
                      <p className="col s12 m2 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasSoft"
                            value="Diseño (CAD)"
                            onChange={(e) => { checkboxOnChange( e, setAreasSoft, areasSoft);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasSoft, areasSoft);
                            }}
                            defaultChecked={inputs.soft === null ? null : 
                              inputs.soft.includes("Diseño (CAD)")? true : null}
                            disabled = {multiOption.p1}
                            checked = {multiOption.p1 ? false : null}
                          />
                          <span>Diseño (CAD)</span>
                        </label>
                      </p>

                      <p className="col s12 m3 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasSoft"
                            value="Manufactura (CAE/CAM)"
                            onChange={(e) => { checkboxOnChange( e, setAreasSoft, areasSoft);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasSoft, areasSoft);
                            }}
                            defaultChecked={inputs.soft === null ? null : 
                              inputs.soft.includes("Manufactura (CAE/CAM)")? true : null}
                            disabled = {multiOption.p1}
                            checked = {multiOption.p1 ? false : null}
                          />
                          <span>Manufactura (CAE/CAM)</span>
                        </label>
                      </p>

                      <p className="col s12 m2 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasSoft"
                            value="Administrativo"
                            onChange={(e) => { checkboxOnChange( e, setAreasSoft, areasSoft);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasSoft, areasSoft);
                            }}
                            defaultChecked={inputs.soft === null ? null : 
                              inputs.soft.includes("Administrativo")? true : null}
                            disabled = {multiOption.p1}
                            checked = {multiOption.p1 ? false : null}
                          />
                          <span>Administrativo</span>
                        </label>
                      </p>

                      <p className="col s12 m3 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasSoft"
                            value="Desarrollo propio"
                            onChange={(e) => { checkboxOnChange( e, setAreasSoft, areasSoft);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasSoft, areasSoft);
                            }}
                            defaultChecked={inputs.soft === null ? null : 
                              inputs.soft.includes("Desarrollo propio")? true : null}
                            disabled = {multiOption.p1}
                            checked = {multiOption.p1 ? false : null}
                          />
                          <span>Desarrollo propio</span>
                        </label>
                      </p>
                      <p className="col s12 m2 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasSoft"
                            value="Otro"
                            onChange={(e) => { checkboxOnChange( e, setAreasSoft, areasSoft);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasSoft, areasSoft);
                            }}
                            defaultChecked={inputs.soft === null ? null : 
                              inputs.soft.includes("Otro")? true : null}
                          
                          />
                          <span>Ninguno</span>
                        </label>
                      </p>
                    </div>
                    <div className="input-field col s12 m6">
                        <input
                          id="leat11"
                          name="softtwo"
                          value={inputs.softtwo}
                          type="text"
                          onChange={(e) => onChange(e)}
                          className="materialize-textarea "
                          disabled = {multiOption.p1}
                        ></input>
                        <label htmlFor="leat11">Otro</label>
                      </div>
                  </div>

                  <div className="input-field col s12 m6">
                    <i className="material-icons prefix">create</i>
                    <div className="col s12 m12 center-align">
                      <p>2.-¿Cuenta con indicadores de desempeño?</p>
                      <br></br>
                      <p className="col s12 m3">
                        <label>
                          <input
                            id="ind"
                            type="radio"
                            name="indicators"
                            value="Si"
                            onChange={(e) => onChange(e)}
                            checked = {inputs.indicators === 'Si'}
                          />
                          <span>Si</span>
                        </label>
                      </p>
                      <p className="col s12 m3">
                        <label>
                        <input
                            id="ind"
                            type="radio"
                            name="indicators"
                            value="No"
                            onChange={(e) => onChange(e)}
                            checked = {inputs.indicators === 'No'}
                          />
                          <span>No</span>
                        </label>
                      </p>
                    </div>
                  </div>

                  <div className="input-field col s12 m6">
                    <i className="material-icons prefix">create</i>
                    <div className="col s12 m12 center-align">
                      <p>3.-¿Cuenta con un sistema de gestión de calidad?</p>
                      <br></br>
                      <p className="col s12 m3">
                        <label>
                          <input
                            id="qua"
                            type="radio"
                            name="quality"
                            value="Si"
                            onChange={(e) => onChange(e)}
                            checked = {inputs.quality === 'Si'}
                          />
                          <span>Si</span>
                        </label>
                      </p>
                      <p className="col s12 m3">
                        <label>
                          <input
                            id="quality"
                            type="radio"
                            name="quality"
                            value="No"
                            onChange={(e) => onChange(e)}
                            checked = {inputs.quality === 'No'}
                          />
                          <span>No</span>
                        </label>
                      </p>
                      {btnFlagRadio ? <div className="input-field col s12 m6">
                        <input
                          id="quat"
                          name="qualitytwo"
                          value={inputs.qualitytwo}
                          type="text"
                          onChange={(e) => onChange(e)}
                          className="materialize-textarea "
                        ></input>
                        <label htmlFor="quat">¿Cuál?</label>
                      </div>: null }
                    </div>
                  </div>

                  <div className="input-field col s12 m6">
                    <i className="material-icons prefix">create</i>
                    <div className="col s12 m12 center-align">
                      <p>4.-¿Cuenta con controles de calidad?</p>
                      <br></br>
                      <p className="col s12 m3">
                        <label>
                          <input
                            id="con"
                            type="radio"
                            name="control"
                            value="Si"
                            onChange={(e) => onChange(e)}
                            checked = {inputs.control === 'Si'}
                          />
                          <span>Si</span>
                        </label>
                      </p>
                      <p className="col s12 m3">
                        <label>
                          <input
                            id="con"
                            type="radio"
                            name="control"
                            value="No"
                            onChange={(e) => onChange(e)}
                            checked = {inputs.control === 'No'}
                          />
                          <span>No</span>
                        </label>
                      </p>
                    </div>
                  </div>

                  <div className="input-field col s12 m6">
                    <i className="material-icons prefix" >create</i>
                    <div className="col s12 m12 center-align">
                      <p style={{paddingLeft:'20px'}}>
                        5.-¿Conoce las restricciones de su proceso de producción
                        'cuellos de botella'?
                      </p>
                      <br></br>
                      <p className="col s12 m3">
                        <label>
                          <input
                            id="bot"
                            type="radio"
                            name="bottle"
                            value="Si"
                            onChange={(e) => onChange(e)}
                            checked = {inputs.bottle === 'Si'}
                          />
                          <span>Si</span>
                        </label>
                      </p>
                      <p className="col s12 m3">
                        <label>
                          <input
                            id="bot"
                            type="radio"
                            name="bottle"
                            value="No"
                            onChange={(e) => onChange(e)}
                            checked = {inputs.bottle === 'No'}
                          />
                          <span>No</span>
                        </label>
                      </p>
                    </div>
                  </div>

                  <div className="input-field col s12 m12">
                    <i className="material-icons prefix">create</i>
                    <div className="col s12 m12 center-align">
                      <p>6.-¿Cuáles métodos de inspección de calidad emplea?</p>
                      <br></br>

                      <p className="col s12 m3 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasMeth"
                            value="Inspección Visual"
                            onChange={(e) => { checkboxOnChange( e, setAreasMeth, areasMeth);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasMeth, areasMeth);
                            }}
                            defaultChecked={inputs.method === null ? null : 
                              inputs.method.includes("Inspección Visual")? true : null}
                              disabled = {multiOption.p6}
                              checked = {multiOption.p6 ? false : null}
                          />
                          <span>Inspección Visual</span>
                        </label>
                      </p>

                      <p className="col s12 m3 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasMeth"
                            value="SPC"
                            onChange={(e) => { checkboxOnChange( e, setAreasMeth, areasMeth);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasMeth, areasMeth);
                            }}
                            defaultChecked={inputs.method === null ? null : 
                              inputs.method.includes("SPC")? true : null}
                              disabled = {multiOption.p6}
                              checked = {multiOption.p6 ? false : null}
                          />
                          <span>SPC</span>
                        </label>
                      </p>

                      <p className="col s12 m3 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasMeth"
                            value="Six Sigma"
                            onChange={(e) => { checkboxOnChange( e, setAreasMeth, areasMeth);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasMeth, areasMeth);
                            }}
                            defaultChecked={inputs.method === null ? null : 
                              inputs.method.includes("Six Sigma")? true : null}
                              disabled = {multiOption.p6}
                              checked = {multiOption.p6 ? false : null}
                          />
                          <span>Six Sigma</span>
                        </label>
                      </p>

                      <p className="col s12 m3 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasMeth"
                            value="Ninguno"
                            onChange={(e) => { checkboxOnChange( e, setAreasMeth, areasMeth);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasMeth, areasMeth);
                            }}
                            defaultChecked={inputs.method === null ? null : 
                              inputs.method.includes("Ninguno")? true : null}
                          />
                          <span>Ninguno</span>
                        </label>
                      </p>

                      <div className="input-field col s12 m3">
                        <input
                          id="methodt"
                          name="methodtwo"
                          value={inputs.methodtwo}
                          type="text"
                          onChange={(e) => onChange(e)}
                          className="materialize-textarea "
                          disabled = {multiOption.p6}
                        ></input>
                        <label htmlFor="methodt">Otro</label>
                      </div>
                      
                    </div>
                  </div>

                  <div className="input-field col s12 m12">
                    <i className="material-icons prefix">create</i>
                    <div className="col s12 m12 center-align">
                      <p>7.-¿Qué procesos y tecnologías utiliza en su empresa?</p>
                      <br></br>
                      <p className="col s12 m4 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasProce"
                            value="Maquinado Convencional"
                            onChange={(e) => { checkboxOnChange( e, setAreasProce, areasProce);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasProce, areasProce);
                            }}
                            defaultChecked={inputs.process === null ? null : 
                              inputs.process.includes("Maquinado Convencional")? true : null}
                              disabled = {multiOption.p7}
                              checked = {multiOption.p7 ? false : null}
                          />
                          <span>Maquinado Convencional</span>
                        </label>
                      </p>

                      <p className="col s12 m4 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasProce"
                            value="Troquelado"
                            onChange={(e) => { checkboxOnChange( e, setAreasProce, areasProce);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasProce, areasProce);
                            }}
                            defaultChecked={inputs.process === null ? null : 
                              inputs.process.includes("Troquelado")? true : null}
                              disabled = {multiOption.p7}
                              checked = {multiOption.p7 ? false : null}
                          />
                          <span>Troquelado</span>
                        </label>
                      </p>

                      <p className="col s12 m4 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasProce"
                            value="Diseño"
                            onChange={(e) => { checkboxOnChange( e, setAreasProce, areasProce);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasProce, areasProce);
                            }}
                            defaultChecked={inputs.process === null ? null : 
                              inputs.process.includes("Diseño")? true : null}
                              disabled = {multiOption.p7}
                              checked = {multiOption.p7 ? false : null}
                          />
                          <span>Diseño</span>
                        </label>
                      </p>

                      <p className="col s12 m4 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasProce"
                            value="Recubrimiento"
                            onChange={(e) => { checkboxOnChange( e, setAreasProce, areasProce);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasProce, areasProce);
                            }}
                            defaultChecked={inputs.process === null ? null : 
                              inputs.process.includes("Recubrimiento")? true : null}
                              disabled = {multiOption.p7}
                              checked = {multiOption.p7 ? false : null}
                          />
                          <span>Recubrimiento</span>
                        </label>
                      </p>

                      <p className="col s12 m4 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasProce"
                            value="Tratamiento térmico"
                            onChange={(e) => { checkboxOnChange( e, setAreasProce, areasProce);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasProce, areasProce);
                            }}
                            defaultChecked={inputs.process === null ? null : 
                              inputs.process.includes("Tratamiento térmico")? true : null}
                              disabled = {multiOption.p7}
                              checked = {multiOption.p7 ? false : null}
                          />
                          <span>Tratamiento térmico</span>
                        </label>
                      </p>

                      <p className="col s12 m4 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasProce"
                            value="Inyección de Plástico"
                            onChange={(e) => { checkboxOnChange( e, setAreasProce, areasProce);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasProce, areasProce);
                            }}
                            defaultChecked={inputs.process === null ? null : 
                              inputs.process.includes("Inyección de Plástico")? true : null}
                              disabled = {multiOption.p7}
                              checked = {multiOption.p7 ? false : null}
                          />
                          <span>Inyección de Plástico</span>
                        </label>
                      </p>

                      <p className="col s12 m4 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasProce"
                            value="Automatización"
                            onChange={(e) => { checkboxOnChange( e, setAreasProce, areasProce);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasProce, areasProce);
                            }}
                            defaultChecked={inputs.process === null ? null : 
                              inputs.process.includes("Automatización")? true : null}
                              disabled = {multiOption.p7}
                              checked = {multiOption.p7 ? false : null}
                          />
                          <span>Automatización</span>
                        </label>
                      </p>

                      <p className="col s12 m4 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasProce"
                            value="TIG / MIG"
                            onChange={(e) => { checkboxOnChange( e, setAreasProce, areasProce);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasProce, areasProce);
                            }}
                            defaultChecked={inputs.process === null ? null : 
                              inputs.process.includes("TIG / MIG")? true : null}
                              disabled = {multiOption.p7}
                              checked = {multiOption.p7 ? false : null}
                          />
                          <span>TIG / MIG</span>
                        </label>
                      </p>

                      <p className="col s12 m4 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasProce"
                            value="Dimensionado"
                            onChange={(e) => { checkboxOnChange( e, setAreasProce, areasProce);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasProce, areasProce);
                            }}
                            defaultChecked={inputs.process === null ? null : 
                              inputs.process.includes("Dimensionado")? true : null}
                              disabled = {multiOption.p7}
                              checked = {multiOption.p7 ? false : null}
                          />
                          <span>Dimensionado</span>
                        </label>
                      </p>

                      <p className="col s12 m4 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasProce"
                            value="Maquinado CNC"
                            onChange={(e) => { checkboxOnChange( e, setAreasProce, areasProce);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasProce, areasProce);
                            }}
                            defaultChecked={inputs.process === null ? null : 
                              inputs.process.includes("Maquinado CNC")? true : null}
                              disabled = {multiOption.p7}
                              checked = {multiOption.p7 ? false : null}
                          />
                          <span>Maquinado CNC</span>
                        </label>
                      </p>

                      <p className="col s12 m4 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasProce"
                            value="Tratamiento Químico"
                            onChange={(e) => { checkboxOnChange( e, setAreasProce, areasProce);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasProce, areasProce);
                            }}
                            defaultChecked={inputs.process === null ? null : 
                              inputs.process.includes("Tratamiento Químico")? true : null}
                              disabled = {multiOption.p7}
                              checked = {multiOption.p7 ? false : null}
                          />
                          <span>Tratamiento Químico</span>
                        </label>
                      </p>

                      <p className="col s12 m4 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasProce"
                            value="Moldes y troqueles"
                            onChange={(e) => { checkboxOnChange( e, setAreasProce, areasProce);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasProce, areasProce);
                            }}
                            defaultChecked={inputs.process === null ? null : 
                              inputs.process.includes("Moldes y troqueles")? true : null}
                              disabled = {multiOption.p7}
                              checked = {multiOption.p7 ? false : null}
                          />
                          <span>Moldes y troqueles</span>
                        </label>
                      </p>

                      <p className="col s12 m4 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasProce"
                            value="Ninguno"
                            onChange={(e) => { checkboxOnChange( e, setAreasProce, areasProce);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasProce, areasProce);
                            }}
                            defaultChecked={inputs.process === null ? null : 
                              inputs.process.includes("Ninguno")? true : null}
                          />
                          <span>Ninguno</span>
                        </label>
                      </p>

                      <div className="input-field col s12 m6">
                        <input
                          id="prot"
                          name="processtwo"
                          value={inputs.processtwo}
                          type="text"
                          onChange={(e) => onChange(e)}
                          className="materialize-textarea "
                          disabled = {multiOption.p7}
                        ></input>
                        <label htmlFor="prot">Otro</label>
                      </div>
                    </div>
                  </div>

                  <div className="input-field col s12 m6">
                    <i className="material-icons prefix">create</i>
                    <div className="col s12 m12 center-align">
                      <p>8.-¿Utiliza alguna técnica de control de inventarios?</p>
                      <br></br>
                      <p className="col s12 m3">
                        <label>
                          <input
                            id="tech"
                            type="radio"
                            name="technical"
                            value="Si"
                            onChange={(e) => onChange(e)}
                            checked = {inputs.technical === 'Si'}
                          />
                          <span>Si</span>
                        </label>
                      </p>
                      <p className="col s12 m3">
                        <label>
                          <input
                            id="techn"
                            type="radio"
                            name="technical"
                            value="No"
                            onChange={(e) => onChange(e)}
                            checked = {inputs.technical === 'No'}
                          />
                          <span>No</span>
                        </label>
                      </p>
                    </div>
                  </div>

                  <div className="input-field col s12 m6">
                    <i className="material-icons prefix">create</i>
                    <div className="col s12 m12 center-align">
                      <p>9.-¿Utiliza algún método para planear la producción?</p>
                      <br></br>
                      <p className="col s12 m3">
                        <label>
                          <input
                            id="plan"
                            type="radio"
                            name="plan"
                            value="Si"
                            onChange={(e) => onChange(e)}
                            checked = {inputs.plan === 'Si'}
                          />
                          <span>Si</span>
                        </label>
                      </p>
                      <p className="col s12 m3">
                        <label>
                          <input
                            id="pla"
                            type="radio"
                            name="plan"
                            value="No"
                            onChange={(e) => onChange(e)}
                            checked = {inputs.plan === 'No'}
                          />
                          <span>No</span>
                        </label>
                      </p>
                    </div>
                  </div>

                  <div className="input-field col s12 m6">
                    <i className="material-icons prefix">create</i>
                    <div className="col s12 m12 center-align">
                      <p>10.-¿Cuenta con un sistema de seguridad industrial?</p>
                      <br></br>
                      <p className="col s12 m3">
                        <label>
                          <input
                            id="sec"
                            type="radio"
                            name="securiry"
                            value="Si"
                            onChange={(e) => onChange(e)}
                            checked = {inputs.securiry === 'Si'}
                          />
                          <span>Si</span>
                        </label>
                      </p>
                      <p className="col s12 m3">
                        <label>
                          <input
                            id="secu"
                            type="radio"
                            name="securiry"
                            value="No"
                            onChange={(e) => onChange(e)}
                            checked = {inputs.securiry === 'No'}
                          />
                          <span>No</span>
                        </label>
                      </p>
                    </div>
                  </div>

                  <div className="input-field col s12 m12">
                    <i className="material-icons prefix">create</i>
                    <div className="col s12 m12 center-align">
                      <p>11.-¿Emplea alguna herramienta de Lean Manufacturing?</p>
                      <br></br>
                      <p className="col s12 m3 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasLearn"
                            value="5s"
                            onChange={(e) => { checkboxOnChange( e, setAreasLearn, areasLearn);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasLearn, areasLearn);
                            }}
                            defaultChecked={inputs.learn === null ? null : 
                              inputs.learn.includes("5s")? true : null}
                              disabled = {multiOption.p11}
                              checked = {multiOption.p11 ? false : null}
                          />
                          <span>5s</span>
                        </label>
                      </p>

                      <p className="col s12 m3 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasLearn"
                            value="Poka Yoke"
                            onChange={(e) => { checkboxOnChange( e, setAreasLearn, areasLearn);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasLearn, areasLearn);
                            }}
                            defaultChecked={inputs.learn === null ? null : 
                              inputs.learn.includes("Poka Yoke")? true : null}
                              disabled = {multiOption.p11}
                              checked = {multiOption.p11 ? false : null}
                          />
                          <span>Poka Yoke</span>
                        </label>
                      </p>

                      <p className="col s12 m3 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasLearn"
                            value="Kan Ben"
                            onChange={(e) => { checkboxOnChange( e, setAreasLearn, areasLearn);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasLearn, areasLearn);
                            }}
                            defaultChecked={inputs.learn === null ? null : 
                              inputs.learn.includes("Kan Ben")? true : null}
                              disabled = {multiOption.p11}
                              checked = {multiOption.p11 ? false : null}
                          />
                          <span>Kan Ban</span>
                        </label>
                      </p>

                      <p className="col s12 m3 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasLearn"
                            value="Six Sigma"
                            onChange={(e) => { checkboxOnChange( e, setAreasLearn, areasLearn);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasLearn, areasLearn);
                            }}
                            defaultChecked={inputs.learn === null ? null : 
                              inputs.learn.includes("Six Sigma")? true : null}
                              disabled = {multiOption.p11}
                              checked = {multiOption.p11 ? false : null}
                          />
                          <span>Six Sigma</span>
                        </label>
                      </p>

                      <p className="col s12 m3 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasLearn"
                            value="JIT"
                            onChange={(e) => { checkboxOnChange( e, setAreasLearn, areasLearn);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasLearn, areasLearn);
                            }}
                            defaultChecked={inputs.learn === null ? null : 
                              inputs.learn.includes("JIT")? true : null}
                              disabled = {multiOption.p11}
                              checked = {multiOption.p11 ? false : null}
                          />
                          <span>JIT</span>
                        </label>
                      </p>

                      <p className="col s12 m3 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasLearn"
                            value="TQM"
                            onChange={(e) => { checkboxOnChange( e, setAreasLearn, areasLearn);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasLearn, areasLearn);
                            }}
                            defaultChecked={inputs.learn === null ? null : 
                              inputs.learn.includes("TQM")? true : null}
                              disabled = {multiOption.p11}
                              checked = {multiOption.p11 ? false : null}
                          />
                          <span>TQM</span>
                        </label>
                      </p>

                      <p className="col s12 m3 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasLearn"
                            value="Kaizen"
                            onChange={(e) => { checkboxOnChange( e, setAreasLearn, areasLearn);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasLearn, areasLearn);
                            }}
                            defaultChecked={inputs.learn === null ? null : 
                              inputs.learn.includes("Kaizen")? true : null}
                              disabled = {multiOption.p11}
                              checked = {multiOption.p11 ? false : null}
                          />
                          <span>Kaizen</span>
                        </label>
                      </p>

                      <p className="col s12 m3 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasLearn"
                            value="Andon"
                            onChange={(e) => { checkboxOnChange( e, setAreasLearn, areasLearn);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasLearn, areasLearn);
                            }}
                            defaultChecked={inputs.learn === null ? null : 
                              inputs.learn.includes("Andon")? true : null}
                              disabled = {multiOption.p11}
                              checked = {multiOption.p11 ? false : null}
                          />
                          <span>Andon</span>
                        </label>
                      </p>

                      <p className="col s12 m3 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasLearn"
                            value="Smed"
                            onChange={(e) => { checkboxOnChange( e, setAreasLearn, areasLearn);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasLearn, areasLearn);
                            }}
                            defaultChecked={inputs.learn === null ? null : 
                              inputs.learn.includes("Smed")? true : null}
                              disabled = {multiOption.p11}
                              checked = {multiOption.p11 ? false : null}
                          />
                          <span>Smed</span>
                        </label>
                      </p>

                      <p className="col s12 m3 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasLearn"
                            value="VSM"
                            onChange={(e) => { checkboxOnChange( e, setAreasLearn, areasLearn);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasLearn, areasLearn);
                            }}
                            defaultChecked={inputs.learn === null ? null : 
                              inputs.learn.includes("VSM")? true : null}
                              disabled = {multiOption.p11}
                              checked = {multiOption.p11 ? false : null}
                          />
                          <span>VSM</span>
                        </label>
                      </p>

                      <p className="col s12 m3 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasLearn"
                            value="TPM"
                            onChange={(e) => { checkboxOnChange( e, setAreasLearn, areasLearn);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasLearn, areasLearn);
                            }}
                            defaultChecked={inputs.learn === null ? null : 
                              inputs.learn.includes("TPM")? true : null}
                              disabled = {multiOption.p11}
                              checked = {multiOption.p11 ? false : null}
                          />
                          <span>TPM</span>
                        </label>
                      </p>

                      <p className="col s12 m3 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasLearn"
                            value="Ninguna"
                            onChange={(e) => { checkboxOnChange( e, setAreasLearn, areasLearn);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasLearn, areasLearn);
                            }}
                            defaultChecked={inputs.learn === null ? null : 
                              inputs.learn.includes("Ninguna")? true : null}
                              
                          />
                          <span>Ninguna</span>
                        </label>
                      </p>

                      <div className="input-field col s12 m6">
                        <input
                          id="leat"
                          name="learntwo"
                          value={inputs.learntwo}
                          type="text"
                          onChange={(e) => onChange(e)}
                          className="materialize-textarea "
                          disabled = {multiOption.p11}
                        ></input>
                        <label htmlFor="leat">Otro</label>
                      </div>
                    </div>
                  </div>

                  <div className="input-field col s12 m12">
                    <i className="material-icons prefix">create</i>
                    <div className="col s12 m12 center-align">
                      <p>
                        12.-¿Tiene contemplado emplear alguna de las siguientes herramientas de la industria 4.0?
                      </p>
                      <br></br>
                      <p className="col s12 m4 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasIndustry"
                            value="Robótica"
                            onChange={(e) => { checkboxOnChange( e, setAreasIndustry, areasIndustry);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasIndustry, areasIndustry);
                            }}
                            defaultChecked={inputs.industry === null ? null : 
                              inputs.industry.includes("Robótica")? true : null}
                              disabled = {multiOption.p12}
                              checked = {multiOption.p12 ? false : null}
                          />
                          <span>Robótica</span>
                        </label>
                      </p>

                      <p className="col s12 m4 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasIndustry"
                            value="Big Data"
                            onChange={(e) => { checkboxOnChange( e, setAreasIndustry, areasIndustry);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasIndustry, areasIndustry);
                            }}
                            defaultChecked={inputs.industry === null ? null : 
                              inputs.industry.includes("Big Data")? true : null}
                              disabled = {multiOption.p12}
                              checked = {multiOption.p12 ? false : null}
                          />
                          <span>Big Data</span>
                        </label>
                      </p>

                      <p className="col s12 m4 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasIndustry"
                            value="IoT"
                            onChange={(e) => { checkboxOnChange( e, setAreasIndustry, areasIndustry);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasIndustry, areasIndustry);
                            }}
                            defaultChecked={inputs.industry === null ? null : 
                              inputs.industry.includes("IoT")? true : null}
                              disabled = {multiOption.p12}
                              checked = {multiOption.p12 ? false : null}
                          />
                          <span>IoT</span>
                        </label>
                      </p>

                      <p className="col s12 m4 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasIndustry"
                            value="Inteligencia Artificial"
                            onChange={(e) => { checkboxOnChange( e, setAreasIndustry, areasIndustry);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasIndustry, areasIndustry);
                            }}
                            defaultChecked={inputs.industry === null ? null : 
                              inputs.industry.includes("Inteligencia Artificial")? true : null}
                              disabled = {multiOption.p12}
                              checked = {multiOption.p12 ? false : null}
                          />
                          <span>Inteligencia Artificial</span>
                        </label>
                      </p>

                      <p className="col s12 m4 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasIndustry"
                            value="Desarrollo de software dedicado"
                            onChange={(e) => { checkboxOnChange( e, setAreasIndustry, areasIndustry);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasIndustry, areasIndustry);
                            }}
                            defaultChecked={inputs.industry === null ? null : 
                              inputs.industry.includes("Desarrollo de software dedicado")? true : null}
                              disabled = {multiOption.p12}
                              checked = {multiOption.p12 ? false : null}
                          />
                          <span>Desarrollo de software dedicado</span>
                        </label>
                      </p>

                      <p className="col s12 m4 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasIndustry"
                            value="Desarrollo de software científico y de ingeniería"
                            onChange={(e) => { checkboxOnChange( e, setAreasIndustry, areasIndustry);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasIndustry, areasIndustry);
                            }}
                            defaultChecked={inputs.industry === null ? null : 
                              inputs.industry.includes("Desarrollo de software científico y de ingeniería")? true : null}
                              disabled = {multiOption.p12}
                              checked = {multiOption.p12 ? false : null}
                          />
                          <span>Desarrollo de software científico y de ingeniería</span>
                        </label>
                      </p>

                      <p className="col s12 m4 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasIndustry"
                            value="Ingeniería de procesos para el desarrollo de proyectos"
                            onChange={(e) => { checkboxOnChange( e, setAreasIndustry, areasIndustry);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasIndustry, areasIndustry);
                            }}
                            defaultChecked={inputs.industry === null ? null : 
                              inputs.industry.includes("Ingeniería de procesos para el desarrollo de proyectos")? true : null}
                              disabled = {multiOption.p12}
                              checked = {multiOption.p12 ? false : null}
                          />
                          <span>Ingeniería de procesos para el desarrollo de proyectos</span>
                        </label>
                      </p>

                      <p className="col s12 m4 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasIndustry"
                            value="Metodologías y herramientas aplicados al desarrollo de software"
                            onChange={(e) => { checkboxOnChange( e, setAreasIndustry, areasIndustry);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasIndustry, areasIndustry);
                            }}
                            defaultChecked={inputs.industry === null ? null : 
                              inputs.industry.includes("Metodologías y herramientas aplicados al desarrollo de software")? true : null}
                              disabled = {multiOption.p12}
                              checked = {multiOption.p12 ? false : null}
                          />
                          <span>Metodologías y herramientas aplicados al desarrollo de software</span>
                        </label>
                      </p>


                      <p className="col s12 m4 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasIndustry"
                            value="Lenguajes para el modelado, simulación de software y procesos"
                            onChange={(e) => { checkboxOnChange( e, setAreasIndustry, areasIndustry);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasIndustry, areasIndustry);
                            }}
                            defaultChecked={inputs.industry === null ? null : 
                              inputs.industry.includes("Lenguajes para el modelado, simulación de software y procesos")? true : null}
                              disabled = {multiOption.p12}
                              checked = {multiOption.p12 ? false : null}
                          />
                          <span>Lenguajes para el modelado, simulación de software y procesos</span>
                        </label>
                      </p>

                      <p className="col s12 m4 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasIndustry"
                            value="Realidad virtual y aumentada"
                            onChange={(e) => { checkboxOnChange( e, setAreasIndustry, areasIndustry);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasIndustry, areasIndustry);
                            }}
                            defaultChecked={inputs.industry === null ? null : 
                              inputs.industry.includes("Realidad virtual y aumentada")? true : null}
                              disabled = {multiOption.p12}
                              checked = {multiOption.p12 ? false : null}
                          />
                          <span>Realidad virtual y aumentada</span>
                        </label>
                      </p>

                      <p className="col s12 m4 left-align">
                        <label>
                          <input
                            type="checkbox"
                            name="setAreasIndustry"
                            value="Ninguno"
                            onChange={(e) => { checkboxOnChange( e, setAreasIndustry, areasIndustry);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasIndustry, areasIndustry);
                            }}
                            defaultChecked={inputs.industry === null ? null : 
                              inputs.industry.includes("Ninguno")? true : null}
                          />
                          <span>Ninguno</span>
                        </label>
                      </p>

                      <div className="input-field col s12 m6">
                        <input
                          id="indust"
                          name="industrytwo"
                          value={inputs.industrytwo}
                          type="text"
                          onChange={(e) => onChange(e)}
                          className="materialize-textarea "
                          disabled = {multiOption.p12}
                        ></input>
                        <label htmlFor="indust">Otro</label>
                      </div>
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
export default Proce;