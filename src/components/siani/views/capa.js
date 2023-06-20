import M from "materialize-css";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../../node_modules/materialize-css/dist/css/materialize.min.css";
import { useHistory } from "react-router-dom";

//New API
import {  advisoryGetByID,
          advisoryPUT
        } from "../services/api";

function Capa() {
  const { t, i18n } = useTranslation("logi");

  const [showResults, setShowResults] = useState(false);

  let history = useHistory();
  
  const [areasServicios, setAreasServicios] = useState({});
  
  const [areasAsesoria, setAreasAsesoria] = useState({});

  const [areasLab, setAreasLab] = useState({});
  
  const [areasImportant, setAreasImportant] = useState({});
  
  const [areasTec, setAreasTec] = useState({});
  
  const [areasPriority, setAreasPriority] = useState({});

  //To disable checkBox
  const [multiOption, setMultiOption] = useState({
    p3: false,
    p7: false,
    p9: false,
    p10: false,
    p11: false,
    p13: false
  });

  //To able the text inputs
  const [inputsFlags,setInputsFlags] = useState({
    p2: false,
    p4: false,
    p5: false,
    p6: false,
    p8: false
  });

  //To validate the text inputs
  const [inputsFlagsFill,setInputsFlagsFill] = useState({
    p2: false,
    p4: false,
    p5: false,
    p6: false,
    p8: false
  });

  const [inputs, setInputs] = useState({
    id: "",
    training: "",
    invest: "",
    investing: "",
    areasS: [],
    servisestwo: "",
    outside: "",
    outsidetwo: "",
    certify: "",
    certifytwo: "",
    advice: "",
    advicetwo: "",
    areasA: [],
    specialtytwo: "",
    i_d: "",
    i_dtwo: "",
    lab: [],
    important: [],
    importantwo: "",
    tec: [],
    tectwo: "",
    conacyt: "",
    priority: [],
    prioritytwo: "",
    labtwo: "",
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
      const inputsFromDB = await advisoryGetByID(dataid);
      console.log("Quiz ID desde GET by ID: "+inputsFromDB.resultado.advisory[0].quiz_id);

      //Set the inputs values for the user visualization
      setInputs({...inputs,
        id: dataid,
        training: inputsFromDB.resultado.advisory[0].adv_training,
        invest: inputsFromDB.resultado.advisory[0].adv_invest,
        investing: inputsFromDB.resultado.advisory[0].adv_investing,
        areasS: inputsFromDB.resultado.advisory[0].adv_servises,
        servisestwo: inputsFromDB.resultado.advisory[0].adv_servisestwo,
        outside: inputsFromDB.resultado.advisory[0].adv_outside,
        outsidetwo: inputsFromDB.resultado.advisory[0].adv_outsidetwo,
        certify: inputsFromDB.resultado.advisory[0].adv_certify,
        certifytwo: inputsFromDB.resultado.advisory[0].adv_certifytwo,
        advice: inputsFromDB.resultado.advisory[0].adv_advice,
        advicetwo: inputsFromDB.resultado.advisory[0].adv_advicetwo,
        areasA: inputsFromDB.resultado.advisory[0].adv_specialty,
        specialtytwo: inputsFromDB.resultado.advisory[0].adv_specialtytwo,
        i_d: inputsFromDB.resultado.advisory[0].adv_i_d,
        i_dtwo: inputsFromDB.resultado.advisory[0].adv_i_dtwo,
        lab: inputsFromDB.resultado.advisory[0].adv_lab,
        important: inputsFromDB.resultado.advisory[0].adv_important,
        importantwo: inputsFromDB.resultado.advisory[0].adv_importantwo,
        tec: inputsFromDB.resultado.advisory[0].adv_tec,
        tectwo: inputsFromDB.resultado.advisory[0].adv_tectwo,
        conacyt: inputsFromDB.resultado.advisory[0].adv_conacyt,
        priority: inputsFromDB.resultado.advisory[0].adv_priority,
        prioritytwo: inputsFromDB.resultado.advisory[0].adv_prioritytwo,
        labtwo: inputsFromDB.resultado.advisory[0].adv_labtwo,
        flag:""
      });

      
      //Set results of Question 3
      setAreasServicios({...areasServicios,
        ["Marketing y ventas"]:inputs.areasS.includes("Marketing y ventas"),
        ["Finanzas y contabilidad"]:inputs.areasS.includes("Finanzas y contabilidad"),
        ["Administración"]:inputs.areasS.includes("Administración"),
        ["Legal"]:inputs.areasS.includes("Legal"),
        ["Software"]:inputs.areasS.includes("Software"),
        ["Diseño y manufactura"]:inputs.areasS.includes("Diseño y manufactura"),
        ["Calidad"]:inputs.areasS.includes("Calidad"),
        ["Seguridad"]:inputs.areasS.includes("Seguridad"),
        ["Innovación"]:inputs.areasS.includes("Innovación"),
        ["Desarrollo Organizacional"]:inputs.areasS.includes("Desarrollo Organizacional"),
        ["Ninguna"]:inputs.areasS.includes("Ninguna"),
      });

      //Set results of Question 7
      setAreasAsesoria({...areasAsesoria,
        ["Marketing y ventas"]:inputs.areasA.includes("Marketing y ventas"),
        ["Finanzas y contabilidad"]:inputs.areasA.includes("Finanzas y contabilidad"),
        ["Administración"]:inputs.areasA.includes("Administración"),
        ["Legal"]:inputs.areasA.includes("Legal"),
        ["Software"]:inputs.areasA.includes("Software"),
        ["Diseño y manufactura"]:inputs.areasA.includes("Diseño y manufactura"),
        ["Calidad"]:inputs.areasA.includes("Calidad"),
        ["Seguridad"]:inputs.areasA.includes("Seguridad"),
        ["Innovación"]:inputs.areasA.includes("Innovación"),
        ["Desarrollo Organizacional"]:inputs.areasA.includes("Desarrollo Organizacional"),
        ["Planeación estrategíca"]:inputs.areasA.includes("Planeación estrategíca"),
        ["Ninguna"]:inputs.areasA.includes("Ninguna"),
      });

      //Set results of Question 9
      setAreasLab({...areasLab,
        ["Análisis de Materiales"]:inputs.lab.includes("Análisis de Materiales"),
        ["Metrología"]:inputs.lab.includes("Metrología"),
        ["Maquinados Avanzados"]:inputs.lab.includes("Maquinados Avanzados"),
        ["Integración I4.0"]:inputs.lab.includes("Integración I4.0"),
        ["Cómputo Avanzado"]:inputs.lab.includes("Cómputo Avanzado"),
        ["Manufactura Aditiva"]:inputs.lab.includes("Manufactura Aditiva"),
        ["Prototipos Electrónicos"]:inputs.lab.includes("Prototipos Electrónicos"),
        ["Pruebas de Compatibilidad Electromagnética"]:inputs.lab.includes("Pruebas de Compatibilidad Electromagnética"),
        ["Ninguno"]:inputs.lab.includes("Ninguno"),
      });

      //Set results of Question 10
      setAreasImportant({...areasImportant,
        ["Prospectiva tecnología y de negocios"]:inputs.important.includes("Prospectiva tecnología y de negocios"),
        ["Estudio de mercado"]:inputs.important.includes("Estudio de mercado"),
        ["Análisis del mercado nacional e internacional"]:inputs.important.includes("Análisis del mercado nacional e internacional"),
        ["Investigación aplicada"]:inputs.important.includes("Investigación aplicada"),
        ["Análisis de patentes"]:inputs.important.includes("Análisis de patentes"),
        ["Benchmarking"]:inputs.important.includes("Benchmarking"),
        ["Ninguno"]:inputs.important.includes("Ninguno"),
      });

      //Set results of Question 11
      setAreasTec({...areasTec,
        ["Pruebas no destructivas"]:inputs.tec.includes("Pruebas no destructivas"),
        ["Servicios de metrología"]:inputs.tec.includes("Servicios de metrología"),
        ["Servicios de diseño CAD / CAM / CAE"]:inputs.tec.includes("Servicios de diseño CAD / CAM / CAE"),
        ["Validación dimensional"]:inputs.tec.includes("Validación dimensional"),
        ["Servicios técnicos fuera del país"]:inputs.tec.includes("Servicios técnicos fuera del país"),
        ["Fabricaciones especiales"]:inputs.tec.includes("Fabricaciones especiales"),
        ["Pruebas de calidad"]:inputs.tec.includes("Pruebas de calidad"),
        ["Servicios especializados"]:inputs.tec.includes("Servicios especializados"),
        ["Ninguno"]:inputs.tec.includes("Ninguno"),
      });

      //Set results of Question 13
      setAreasPriority({...areasPriority,
        ["Incubación de nuevas ideas de negocio"]:inputs.priority.includes("Incubación de nuevas ideas de negocio"),
        ["Programas de aceleración de negocios"]:inputs.priority.includes("Programas de aceleración de negocios"),
        ["Asesoría / Consultoría"]:inputs.priority.includes("Asesoría / Consultoría"),
        ["Desarrollo Tecnológico"]:inputs.priority.includes("Desarrollo Tecnológico"),
        ["Desarrollo de nuevos productos"]:inputs.priority.includes("Desarrollo de nuevos productos"),
        ["Inversión y capital"]:inputs.priority.includes("Inversión y capital"),
        ["Desarrollo de capital humano"]:inputs.priority.includes("Desarrollo de capital humano"),
        ["Innovación"]:inputs.priority.includes("Innovación"),
        ["Certificaciones"]:inputs.priority.includes("Certificaciones"),
        ["Ventas y marketing"]:inputs.priority.includes("Ventas y marketing"),
        ["Desarrollo organizacional"]:inputs.priority.includes("Desarrollo organizacional"),
        ["Ninguna"]:inputs.priority.includes("Ninguna"),
      });

      //Set text inputs on radio buttons
      setInputsFlags({...inputsFlags,
        p2: inputs.invest === "Si",
        p4: inputs.outside === "Si",
        p5: inputs.certify === "Si",
        p6: inputs.advice === "Si",
        p8: inputs.advice === "Si"
      });

      //Set multioptions 
      setMultiOption({...multiOption,
        p3: inputs.areasS.includes("Ninguna"),
        p7: inputs.areasA.includes("Ninguna"),
        p9: inputs.lab.includes("Ninguno"),
        p10: inputs.important.includes("Ninguno"),
        p11: inputs.tec.includes("Ninguno"),
        p13: inputs.priority.includes("Ninguna"),
      });


      M.updateTextFields();
    } catch (err) {
      console.error(err.response);
    }
  };

  // Just save Changes on Inputs
  const onChange = (e) =>{
    setInputs({ ...inputs, [e.target.name]: e.target.value });

    //Rdio Buttons checks if value = "Si", show input text
    if(e.target.value === "Si"){
      if(e.target.name === "invest"){
        setInputsFlags({...inputsFlags,
          p2: true
        });
        setInputsFlagsFill({...inputsFlagsFill,
          p2: true
        });
      }
      if(e.target.name === "outside"){
        setInputsFlags({...inputsFlags,
          p4: true
        });
        setInputsFlagsFill({...inputsFlagsFill,
          p4: true
        });
      }
      if(e.target.name === "certify"){
        setInputsFlags({...inputsFlags,
          p5: true
        });
        setInputsFlagsFill({...inputsFlagsFill,
          p5: true
        });
      }
      if(e.target.name === "advice"){
        setInputsFlags({...inputsFlags,
          p6: true
        });
        setInputsFlagsFill({...inputsFlagsFill,
          p6: true
        });
      }
      if(e.target.name === "i_d"){
        setInputsFlags({...inputsFlags,
          p8: true
        });
        setInputsFlagsFill({...inputsFlagsFill,
          p8: true
        });
      }
    }
    else{
      if(e.target.name === "invest"){
        setInputsFlags({...inputsFlags,
          p2: false
        });
        setInputsFlagsFill({...inputsFlagsFill,
          p2: false
        });
      }
      if(e.target.name === "outside"){
        setInputsFlags({...inputsFlags,
          p4: false
        });
        setInputsFlagsFill({...inputsFlagsFill,
          p4: false
        });
      }
      if(e.target.name === "certify"){
        setInputsFlags({...inputsFlags,
          p5: false
        });
        setInputsFlagsFill({...inputsFlagsFill,
          p5: false
        });
      }
      if(e.target.name === "advice"){
        setInputsFlags({...inputsFlags,
          p6: false
        });
        setInputsFlagsFill({...inputsFlagsFill,
          p6: false
        });
      }
      if(e.target.name === "i_d"){
        setInputsFlags({...inputsFlags,
          p8: false
        });
        setInputsFlagsFill({...inputsFlagsFill,
          p8: false
        });
      }
    }

    if(e.target.name === "investing"){
      setInputsFlagsFill({...inputsFlagsFill,
        p2: false
      });
    }
    if(e.target.name === "outsidetwo"){
      setInputsFlagsFill({...inputsFlagsFill,
        p4: false
      });
    }
    if(e.target.name === "certifytwo"){
      setInputsFlagsFill({...inputsFlagsFill,
        p5: false
      });
    }
    if(e.target.name === "advicetwo"){
      setInputsFlagsFill({...inputsFlagsFill,
        p6: false
      });
    }
    if(e.target.name === "i_dtwo"){
      setInputsFlagsFill({...inputsFlagsFill,
        p8: false
      });
    }

  }
    
  //Save Arrays
  const checkboxOnChange = (e, set, areas) => {
    set({ ...areas, [e.target.value]: e.target.checked });
    console.log("Valor de "+e.target.value+": "+e.target.checked);
    
    //Question 3, if press "Ninguna" disable all
    if(e.target.name === "setAreasServicios"){
      if(e.target.value === "Ninguna"){
        if(e.target.checked){
          setMultiOption({...multiOption,
            p3: true
          });
  
          setAreasServicios({...areasServicios,
            ["Marketing y ventas"]:false,
            ["Finanzas y contabilidad"]:false,
            ["Administración"]:false,
            ["Legal"]:false,
            ["Software"]:false,
            ["Diseño y manufactura"]:false,
            ["Calidad"]:false,
            ["Seguridad"]:false,
            ["Innovación"]:false,
            ["Desarrollo Organizacional"]:false,
            ["Ninguna"]:true,
          });
        }
        else{
          setMultiOption({...multiOption,
            p3: false
          });
        }
      }
    }

    //Question 7, if press "Ninguna" disable all
    if(e.target.name === "setAreasAsesoria"){
      if(e.target.value === "Ninguna"){
        if(e.target.checked){
          setMultiOption({...multiOption,
            p7: true
          });
  
          setAreasAsesoria({...areasAsesoria,
            ["Marketing y ventas"]:false,
            ["Finanzas y contabilidad"]:false,
            ["Administración"]:false,
            ["Legal"]:false,
            ["Software"]:false,
            ["Diseño y manufactura"]:false,
            ["Calidad"]:false,
            ["Seguridad"]:false,
            ["Innovación"]:false,
            ["Desarrollo Organizacional"]:false,
            ["Planeación estrategíca"]:false,
            ["Ninguna"]:true,
          });
        }
        else{
          setMultiOption({...multiOption,
            p7: false
          });
        }
        
      }
    }

    //Question 9, if press "Ninguna" disable all
    if(e.target.name === "setAreasLab"){
      if(e.target.value === "Ninguno"){
        if(e.target.checked){
          setMultiOption({...multiOption,
            p9: true
          });
  
          setAreasLab({...areasLab,
            ["Análisis de Materiales"]:false,
            ["Metrología"]:false,
            ["Maquinados Avanzados"]:false,
            ["Integración I4.0"]:false,
            ["Cómputo Avanzado"]:false,
            ["Manufactura Aditiva"]:false,
            ["Prototipos Electrónicos"]:false,
            ["Pruebas de Compatibilidad Electromagnética"]:false,
            ["Ninguno"]:true,
          });
        }
        else{
          setMultiOption({...multiOption,
            p9: false
          });
        }
        
      }
    }

    //Question 10, if press "Ninguna" disable all
    if(e.target.name === "setAreasImportant"){
      if(e.target.value === "Ninguno"){
        if(e.target.checked){
          setMultiOption({...multiOption,
            p10: true
          });
  
          setAreasImportant({...areasImportant,
            ["Prospectiva tecnología y de negocios"]:false,
            ["Estudio de mercado"]:false,
            ["Análisis del mercado nacional e internacional"]:false,
            ["Investigación aplicada"]:false,
            ["Análisis de patentes"]:false,
            ["Benchmarking"]:false,
            ["Ninguno"]:true,
          });
        }
        else{
          setMultiOption({...multiOption,
            p10: false
          });
        }
        
      }
    }

    //Question 11, if press "Ninguna" disable all
    if(e.target.name === "setAreasTec"){
      if(e.target.value === "Ninguno"){
        if(e.target.checked){
          setMultiOption({...multiOption,
            p11: true
          });
  
          setAreasTec({...areasTec,
            ["Pruebas no destructivas"]:false,
            ["Servicios de metrología"]:false,
            ["Servicios de diseño CAD / CAM / CAE"]:false,
            ["Validación dimensional"]:false,
            ["Servicios técnicos fuera del país"]:false,
            ["Fabricaciones especiales"]:false,
            ["Pruebas de calidad"]:false,
            ["Servicios especializados"]:false,
            ["Ninguno"]:true,
          });
        }
        else{
          setMultiOption({...multiOption,
            p11: false
          });
        }
        
      }
    }

    //Question 13, if press "Ninguna" disable all
    if(e.target.name === "setAreasPriority"){
      if(e.target.value === "Ninguna"){
        if(e.target.checked){
          setMultiOption({...multiOption,
            p13: true
          });
  
          setAreasPriority({...areasPriority,
            ["Incubación de nuevas ideas de negocio"]:false,
            ["Programas de aceleración de negocios"]:false,
            ["Asesoría / Consultoría"]:false,
            ["Desarrollo Tecnológico"]:false,
            ["Desarrollo de nuevos productos"]:false,
            ["Inversión y capital"]:false,
            ["Desarrollo de capital humano"]:false,
            ["Innovación"]:false,
            ["Certificaciones"]:false,
            ["Ventas y marketing"]:false,
            ["Desarrollo organizacional"]:false,
            ["Ninguna"]:true,
          });
        }
        else{
          setMultiOption({...multiOption,
            p13: false
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
    inputs.areasS = addArray(areasServicios);
    inputs.areasA = addArray(areasAsesoria);
    inputs.lab = addArray(areasLab);
    inputs.important = addArray(areasImportant);
    inputs.tec = addArray(areasTec);
    inputs.priority = addArray(areasPriority);

    if(
      inputs.training === null ||
      inputs.invest === null || inputs.areasA.length === 0 ||
      inputs.outside === null || inputs.certify === null ||
      inputs.advice === null || inputs.areasS.length === 0 ||
      inputs.i_d === null || inputs.lab.length === 0 ||
      inputs.important.length === 0 || inputs.tec.length === 0 ||
      inputs.conacyt === null || inputs.priority.length === 0 ||
      inputsFlagsFill.p2 || inputsFlagsFill.p4 || inputsFlagsFill.p5 ||
      inputsFlagsFill.p6 || inputsFlagsFill.p8
    ){
      console.log(inputs);

      if(inputs.training === null){
        M.toast({html: '¡Llenar pregunta 1!'});
      }
      if(inputs.invest === null){
        M.toast({html: '¡Llenar pregunta 2!'});
      }
      if(inputsFlagsFill.p2){
        M.toast({html: '¡Llenar pregunta 2!'});
      }
      
      if(inputs.areasS.length === 0){
        M.toast({html: '¡Llenar pregunta 3!'});
      }
      if(inputs.outside === null){
        M.toast({html: '¡Llenar pregunta 4!'});
      }
      if(inputsFlagsFill.p4){
        M.toast({html: '¡Llenar pregunta 4!'});
      } 
      
      if(inputs.certify === null){
        M.toast({html: '¡Llenar pregunta 5!'});
      }
      if(inputsFlagsFill.p5){
        M.toast({html: '¡Llenar pregunta 5!'});
      }
      if(inputs.advice === null){
        M.toast({html: '¡Llenar pregunta 6!'});
      }
      if(inputsFlagsFill.p6){
        M.toast({html: '¡Llenar pregunta 6!'});
      }
      if(inputs.areasA.length === 0){
        M.toast({html: '¡Llenar pregunta 7!'});
      }
      if(inputs.i_d === null){
        M.toast({html: '¡Llenar pregunta 8!'});
      }
      if(inputsFlagsFill.p8){
        M.toast({html: '¡Llenar pregunta 8!'});
      }
      if(inputs.lab.length === 0){
        M.toast({html: '¡Llenar pregunta 9!'});
      }
      if(inputs.important.length === 0){
        M.toast({html: '¡Llenar pregunta 10!'});
      }
      if(inputs.tec.length === 0){
        M.toast({html: '¡Llenar pregunta 11!'});
      }
      if(inputs.conacyt === null){
        M.toast({html: '¡Llenar pregunta 12!'});
      }
      if(inputs.priority.length === 0){
        M.toast({html: '¡Llenar pregunta 13!'});
      }
      
    }
    else{

      try {
        //Get the Quiz ID from LocalStorage
        inputs.id = window.localStorage.getItem('quizId');
        console.log(inputs);

        //Make an UPDATE to the row in table
        await advisoryPUT(inputs.id,inputs);
        M.toast({html: '¡Guardado Exitoso!'});

        //Flag for button -Next-
        setShowResults(true);
      } catch (error) {
        console.log(error);
        console.log(error.response);
        M.toast({html: '¡Fallo en el guardado!'})
      }
    }
    
  };

  const onSubmitNext = async () => {
      history.push("/pro");
  };
  const onReturn = () => {
    history.push("/inf");
  };

  return (
    <div>
      <div className="col s12">
        <div className="card">
          <div className="card-action light-blue darken-4 white-text center-align">
            <h5>III. Asesoría y capacitación</h5>
          </div>
          <div className="card-content">
            <div className="row">
              <div className="card-panel col s12 m12">
                <div className="input-field col s12 m6">
                  <i className="material-icons prefix">create</i>
                  <select
                    id="trai"
                    name="training"
                    onChange={(e) => onChange(e)}
                    value={inputs.training}>
                    <option value = ""disabled selected>Seleccione su opción</option>
                    <option value="Si">Si</option>
                    <option value="Ninguno">No</option>
                  </select>
                  <label htmlFor="user">
                  1.-¿Cuenta con un plan de capacitación anual?
                  </label>
                </div>

                <div className="input-field col s12 m6">
                  <i className="material-icons prefix">create</i>
                  <div className="col s12 m12 center-align">
                    <p>2.-¿Invierte anualmente en capacitación?</p>
                    <br></br>
                    <p className="col s12 m3">
                      <label>
                        <input
                          id="inv"
                          type="radio"
                          name="invest"
                          value="Si"
                          onChange={(e) => onChange(e)}
                          checked = {inputs.invest === 'Si'}
                        />
                        <span>Si</span>
                      </label>
                    </p>
                    <p className="col s12 m3">
                      <label>
                        <input
                          id="inv"
                          type="radio"
                          name="invest"
                          value="No"
                          onChange={(e) => onChange(e)}
                          checked = {inputs.invest === 'No'}
                        />
                        <span>No</span>
                      </label>
                    </p>
                    {inputsFlags.p2 ?<div className="input-field col s12 m6">
                      <input
                        id="inves"
                        name="investing"
                        value={inputs.investing}
                        type="number"
                        onChange={(e) => onChange(e)}
                        className="materialize-textarea "
                      ></input>
                      <label htmlFor="inves">¿Cuánto? (MXN)</label>
                    </div> : null}
                  </div>
                </div>

                <div className="input-field col s12 m12">
                  <i className="material-icons prefix">create</i>
                  <div className="col s12 m12 center-align">
                    <p>
                    3.-¿Áreas de especialidad donde cree conveniente solicitar
                      servicios de capacitación?
                    </p>
                    <br></br>
                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasServicios"
                          value="Finanzas y contabilidad"
                          onClick={(e) => { checkboxOnChange( e, setAreasServicios, areasServicios);
                          }}
                          onChange={(e) => { checkboxOnChange( e, setAreasServicios, areasServicios);
                          }}
                          defaultChecked={inputs.areasS === null ? null : inputs.areasS.includes("Finanzas y contabilidad")? true : null}
                          disabled = {multiOption.p3}
                          checked = {multiOption.p3 ? false : null}
                        />
                        <span>Finanzas y contabilidad</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasServicios"
                          value="Marketing y ventas"
                          onClick={(e) => { checkboxOnChange( e, setAreasServicios, areasServicios);
                          }}
                          onChange={(e) => { checkboxOnChange( e, setAreasServicios, areasServicios );
                          }}
                          defaultChecked={inputs.areasS === null ? null : inputs.areasS.includes("Marketing y ventas") ? true : null
                            
                          }
                          disabled = {multiOption.p3}
                          checked = {multiOption.p3 ? false : null}
                        />
                        <span>Marketing y ventas</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasServicios"
                          value="Administración"
                          onClick={(e) => { checkboxOnChange( e, setAreasServicios, areasServicios);
                          }}
                          onChange={(e) => { checkboxOnChange( e, setAreasServicios, areasServicios );
                          }}
                          defaultChecked={inputs.areasS === null ? null : inputs.areasS.includes("Administración")? true : null}
                          disabled = {multiOption.p3}
                          checked = {multiOption.p3 ? false : null}
                        />
                        <span>Administración</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasServicios"
                          value="Legal"
                          onClick={(e) => { checkboxOnChange( e, setAreasServicios, areasServicios);
                          }}
                          onChange={(e) => {
                            checkboxOnChange( e, setAreasServicios, areasServicios );
                          }}
                          defaultChecked={inputs.areasS === null ? null : inputs.areasS.includes("Legal")? true : null}
                          disabled = {multiOption.p3}
                          checked = {multiOption.p3 ? false : null}
                        />
                        <span>Legal</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasServicios"
                          value="Software"
                          onClick={(e) => { checkboxOnChange( e, setAreasServicios, areasServicios);
                          }}
                          onChange={(e) => {
                            checkboxOnChange( e, setAreasServicios, areasServicios );
                          }}
                          defaultChecked={inputs.areasS === null ? null : inputs.areasS.includes("Software")? true : null}
                          disabled = {multiOption.p3}
                          checked = {multiOption.p3 ? false : null}
                        />
                        <span>Software</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasServicios"
                          value="Diseño y manufactura"
                          onClick={(e) => { checkboxOnChange( e, setAreasServicios, areasServicios);
                          }}
                          onChange={(e) => {
                            checkboxOnChange( e, setAreasServicios, areasServicios );
                          }}
                          defaultChecked={inputs.areasS === null ? null : inputs.areasS.includes("Diseño y manufactura")? true : null}
                          disabled = {multiOption.p3}
                          checked = {multiOption.p3 ? false : null}
                        />
                        <span>Diseño y manufactura</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasServicios"
                          value="Calidad"
                          onClick={(e) => { checkboxOnChange( e, setAreasServicios, areasServicios);
                          }}
                          onChange={(e) => {
                            checkboxOnChange( e, setAreasServicios, areasServicios );
                          }}
                          defaultChecked={inputs.areasS === null ? null : inputs.areasS.includes("Calidad")? true : null}
                          disabled = {multiOption.p3}
                          checked = {multiOption.p3 ? false : null}
                        />
                        <span>Calidad</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasServicios"
                          value="Seguridad"
                          onClick={(e) => { checkboxOnChange( e, setAreasServicios, areasServicios);
                          }}
                          onChange={(e) => {
                            checkboxOnChange(
                              e,
                              setAreasServicios,
                              areasServicios
                            );
                          }}
                          defaultChecked={inputs.areasS === null ? null : inputs.areasS.includes("Seguridad")? true : null}
                          disabled = {multiOption.p3}
                          checked = {multiOption.p3 ? false : null}
                        />
                        <span>Seguridad</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasServicios"
                          value="Innovación"
                          onClick={(e) => { checkboxOnChange( e, setAreasServicios, areasServicios);
                          }}
                          onChange={(e) => {
                            checkboxOnChange( e, setAreasServicios, areasServicios );
                          }}
                          defaultChecked={inputs.areasS === null ? null : inputs.areasS.includes("Innovación")? true : null}
                          disabled = {multiOption.p3}
                          checked = {multiOption.p3 ? false : null}
                        />
                        <span>Innovación</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasServicios"
                          value="Desarrollo Organizacional"
                          onClick={(e) => { checkboxOnChange( e, setAreasServicios, areasServicios);
                          }}
                          onChange={(e) => {
                            checkboxOnChange( e, setAreasServicios, areasServicios );
                          }}
                          defaultChecked={inputs.areasS === null ? null : inputs.areasS.includes("Desarrollo Organizacional")? true : null}
                          disabled = {multiOption.p3}
                          checked = {multiOption.p3 ? false : null}
                        />
                        <span>Desarrollo Organizacional</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasServicios"
                          value="Ninguna"
                          onClick={(e) => { checkboxOnChange( e, setAreasServicios, areasServicios);
                          }}
                          onChange={(e) => { checkboxOnChange( e, setAreasServicios, areasServicios);
                          }}
                          defaultChecked={inputs.areasS === null ? null : inputs.areasS.includes("Ninguna")? true : null}
                        />
                        <span>Ninguna</span>
                      </label>
                    </p>

                    <div className="input-field col s12 m6">
                      <input
                        id="ser"
                        name="servisestwo"
                        value={inputs.servisestwo}
                        type="text"
                        onChange={(e) => onChange(e)}
                        className="materialize-textarea "
                        disabled = {multiOption.p3}
                      ></input>
                      <label htmlFor="ser">Otro</label>
                    </div>
                  </div>
                </div>

                <div className="input-field col s12 m6">
                  <i className="material-icons prefix">create</i>
                  <div className="col s12 m12 center-align">
                    <p>4.-¿Invierte en capacitaciones fuera del país?</p>
                    <br></br>
                    <p className="col s12 m6">
                      <label>
                        <input
                          id="out"
                          type="radio"
                          name="outside"
                          value="Si"
                          onChange={(e) => onChange(e)}
                          checked={inputs.outside === 'Si'}
                        />
                        <span>Si</span>
                      </label>
                    </p>
                    <p className="col s12 m6">
                      <label>
                        <input
                          id="out"
                          type="radio"
                          name="outside"
                          value="No"
                          onChange={(e) => onChange(e)}
                          checked={inputs.outside === 'No'}
                        />
                        <span>No</span>
                      </label>
                    </p>
                    {inputsFlags.p4 ?<div className="input-field col s12 m8 offset-m2">
                      <input
                        id="outs"
                        name="outsidetwo"
                        value={inputs.outsidetwo}
                        type="text"
                        onChange={(e) => onChange(e)}
                        className="materialize-textarea "
                      ></input>
                      <label htmlFor="outs">¿Cuáles?</label>
                    </div>:null}
                  </div>
                </div>

                <div className="input-field col s12 m6">
                  <i className="material-icons prefix">create</i>
                  <div className="col s12 m12 center-align">
                    <p>5.-¿Invierte en certificaciones?</p>
                    <br></br>
                    <p className="col s12 m6">
                      <label>
                        <input
                          id="cer"
                          type="radio"
                          name="certify"
                          value="Si"
                          onChange={(e) => onChange(e)}
                          checked={inputs.certify === 'Si'}
                        />
                        <span>Si</span>
                      </label>
                    </p>
                    <p className="col s12 m6">
                      <label>
                        <input
                          id="cer"
                          type="radio"
                          name="certify"
                          value="No"
                          onChange={(e) => onChange(e)}
                          checked={inputs.certify === 'No'}
                        />
                        <span>No</span>
                      </label>
                    </p>
                    {inputsFlags.p5 ?<div className="input-field col s12 m8 offset-m2">
                      <input
                        id="certif"
                        name="certifytwo"
                        value={inputs.certifytwo}
                        type="text"
                        onChange={(e) => onChange(e)}
                        className="materialize-textarea "
                      ></input>
                      <label htmlFor="certif">¿Cuáles?</label>
                    </div>:null}
                  </div>
                </div>

                <div className="input-field col s12 m7">
                  <i className="material-icons prefix">create</i>
                  <div className="col s12 m12 center-align">
                    <p>6.-¿Invierte anualmente en asesoría?</p>
                    <br></br>
                    <p className="col s12 m6">
                      <label>
                        <input
                          id="adv"
                          type="radio"
                          name="advice"
                          value="Si"
                          onChange={(e) => onChange(e)}
                          checked={inputs.advice === 'Si'}
                        />
                        <span>Si</span>
                      </label>
                    </p>
                    <p className="col s12 m6">
                      <label>
                        <input
                          id="adv"
                          type="radio"
                          name="advice"
                          value="No"
                          onChange={(e) => onChange(e)}
                          checked={inputs.advice === 'No'}
                        />
                        <span>No</span>
                      </label>
                    </p>
                   {inputsFlags.p6 ? <div className="input-field col s12 m8 offset-m2">
                      <input
                        id="advi"
                        name="advicetwo"
                        value={inputs.advicetwo}
                        type="number"
                        onChange={(e) => onChange(e)}
                        className="materialize-textarea "
                      ></input>
                      <label htmlFor="advi">¿Cuánto? (MXN)</label>
                    </div>:null}
                  </div>
                </div>

                <div className="input-field col s12 m12">
                  <i className="material-icons prefix">create</i>
                  <div className="col s12 m12 center-align">
                    <p>
                    7.-¿En que área de especialidad considera una "Asesoría /
                      Consultoría" más apropiada para su empresa?
                    </p>
                    <br></br>
                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasAsesoria"
                          value="Finanzas y contabilidad"
                          onChange={(e) => { checkboxOnChange( e, setAreasAsesoria, areasAsesoria );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasAsesoria, areasAsesoria);
                          }}
                          defaultChecked={inputs.areasS === null ? null : inputs.areasA.includes("Finanzas y contabilidad")? true : null}
                          disabled = {multiOption.p7}
                          checked = {multiOption.p7 ? false : null}
                        />
                        <span>Finanzas y contabilidad</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasAsesoria"
                          value="Marketing y ventas"
                          onChange={(e) => { checkboxOnChange( e, setAreasAsesoria, areasAsesoria );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasAsesoria, areasAsesoria);
                          }}
                          defaultChecked={inputs.areasS === null ? null : inputs.areasA.includes("Marketing y ventas")? true : null}
                          disabled = {multiOption.p7}
                          checked = {multiOption.p7 ? false : null}
                        />
                        <span>Marketing y ventas</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasAsesoria"
                          value="Administración"
                          onChange={(e) => { checkboxOnChange( e, setAreasAsesoria, areasAsesoria );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasAsesoria, areasAsesoria);
                          }}
                          defaultChecked={inputs.areasS === null ? null : inputs.areasA.includes("Administración")? true : null}
                          disabled = {multiOption.p7}
                          checked = {multiOption.p7 ? false : null}
                        />
                        <span>Administración</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasAsesoria"
                          value="Legal"
                          onChange={(e) => { checkboxOnChange( e, setAreasAsesoria, areasAsesoria );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasAsesoria, areasAsesoria);
                          }}
                          defaultChecked={inputs.areasS === null ? null : inputs.areasA.includes("Legal")? true : null}
                          disabled = {multiOption.p7}
                          checked = {multiOption.p7 ? false : null}
                        />
                        <span>Legal</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasAsesoria"
                          value="Software"
                          onChange={(e) => { checkboxOnChange( e, setAreasAsesoria, areasAsesoria );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasAsesoria, areasAsesoria);
                          }}
                          defaultChecked={inputs.areasS === null ? null : inputs.areasA.includes("Software")? true : null}
                          disabled = {multiOption.p7}
                          checked = {multiOption.p7 ? false : null}
                        />
                        <span>Software</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasAsesoria"
                          value="Diseño y manufactura"
                          onChange={(e) => { checkboxOnChange( e, setAreasAsesoria, areasAsesoria );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasAsesoria, areasAsesoria);
                          }}
                          defaultChecked={inputs.areasS === null ? null : inputs.areasA.includes("Diseño y manufactura")? true : null}
                          disabled = {multiOption.p7}
                          checked = {multiOption.p7 ? false : null}
                        />
                        <span>Diseño y manufactura</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasAsesoria"
                          value="Calidad"
                          onChange={(e) => { checkboxOnChange( e, setAreasAsesoria, areasAsesoria );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasAsesoria, areasAsesoria);
                          }}
                          defaultChecked={inputs.areasS === null ? null : inputs.areasA.includes("Calidad")? true : null}
                          disabled = {multiOption.p7}
                          checked = {multiOption.p7 ? false : null}
                        />
                        <span>Calidad</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasAsesoria"
                          value="Seguridad"
                          onChange={(e) => { checkboxOnChange( e, setAreasAsesoria, areasAsesoria );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasAsesoria, areasAsesoria);
                          }}
                          defaultChecked={inputs.areasS === null ? null : inputs.areasA.includes("Seguridad")? true : null}
                          disabled = {multiOption.p7}
                          checked = {multiOption.p7 ? false : null}
                        />
                        <span>Seguridad</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasAsesoria"
                          value="Innovación"
                          onChange={(e) => { checkboxOnChange( e, setAreasAsesoria, areasAsesoria );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasAsesoria, areasAsesoria);
                          }}
                          defaultChecked={inputs.areasS === null ? null : inputs.areasA.includes("Innovación")? true : null}
                          disabled = {multiOption.p7}
                          checked = {multiOption.p7 ? false : null}
                        />
                        <span>Innovación</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasAsesoria"
                          value="Desarrollo Organizacional"
                          onChange={(e) => { checkboxOnChange( e, setAreasAsesoria, areasAsesoria );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasAsesoria, areasAsesoria);
                          }}
                          defaultChecked={inputs.areasS === null ? null : inputs.areasA.includes("Desarrollo Organizacional")? true : null}
                          disabled = {multiOption.p7}
                          checked = {multiOption.p7 ? false : null}
                        />
                        <span>Desarrollo Organizacional</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasAsesoria"
                          value="Planeación estrategíca"
                          onChange={(e) => { checkboxOnChange( e, setAreasAsesoria, areasAsesoria );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasAsesoria, areasAsesoria);
                          }}
                          defaultChecked={inputs.areasS === null ? null : inputs.areasA.includes("Planeación estrategíca")? true : null}
                          disabled = {multiOption.p7}
                          checked = {multiOption.p7 ? false : null}
                        />
                        <span>Planeación estrategíca</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasAsesoria"
                          value="Ninguna"
                          onChange={(e) => { checkboxOnChange( e, setAreasAsesoria, areasAsesoria );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasAsesoria, areasAsesoria);
                          }}
                          defaultChecked={inputs.areasS === null ? null : inputs.areasA.includes("Ninguna")? true : null}
                          
                        />
                        <span>Ninguna</span>
                      </label>
                    </p>

                    <div className="input-field col s12 m6">
                      <input
                        id="spe"
                        name="specialtytwo"
                        value={inputs.specialtytwo}
                        type="text"
                        onChange={(e) => onChange(e)}
                        className="materialize-textarea "
                        disabled = {multiOption.p7}
                      ></input>
                      <label htmlFor="spe">Otro</label>
                    </div>
                  </div>
                </div>

                <div className="input-field col s12 m10">
                  <i className="material-icons prefix">create</i>
                  <div className="col s12 m12 center-align">
                    <p>8.-¿Invierte anualmente en desarrollo de productos I+D+i (Investigación, Desarrollo e innovación)?</p>
                    <br></br>
                    <p className="col s12 m3">
                      <label>
                        <input
                          id="i"
                          type="radio"
                          name="i_d"
                          value="Si"
                          onChange={(e) => onChange(e)}
                          checked={inputs.i_d === 'Si'}
                        />
                        <span>Si</span>
                      </label>
                    </p>
                    <p className="col s12 m3">
                      <label>
                        <input
                          id="i"
                          type="radio"
                          name="i_d"
                          value="No"
                          onChange={(e) => onChange(e)}
                          checked={inputs.i_d === 'No'}
                        />
                        <span>No</span>
                      </label>
                    </p>
                    {inputsFlags.p8 ?<div className="input-field col s12 m6">
                      <input
                        id="idt"
                        name="i_dtwo"
                        value={inputs.i_dtwo}
                        type="number"
                        onChange={(e) => onChange(e)}
                        className="materialize-textarea "
                      ></input>
                      <label htmlFor="idt">¿Cuánto? (MXN)</label>
                    </div>:null}
                  </div>
                </div>

                <div className="input-field col s12 m12">
                  <i className="material-icons prefix">create</i>
                  <div className="col s12 m12 center-align">
                    <p>
                      9.-¿Cuál laboratorio considera mas relevante para impulsar el crecimiento de su empresa?
                    </p>
                    <br></br>
                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Análisis de Materiales"
                          name="setAreasLab"
                          onChange={(e) => { checkboxOnChange( e, setAreasLab, areasLab );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasLab, areasLab);
                          }}
                          defaultChecked={inputs.lab === null ? null : inputs.lab.includes("Análisis de Materiales")? true : null}
                          disabled = {multiOption.p9}
                          checked = {multiOption.p9 ? false : null}
                        />
                        <span>Análisis de Materiales</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Metrología"
                          name="setAreasLab"
                          onChange={(e) => { checkboxOnChange( e, setAreasLab, areasLab );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasLab, areasLab);
                          }}
                          defaultChecked={inputs.lab === null ? null : inputs.lab.includes("Metrología")? true : null}
                          disabled = {multiOption.p9}
                          checked = {multiOption.p9 ? false : null}
                        />
                        <span>Metrología</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Maquinados Avanzados"
                          name="setAreasLab"
                          onChange={(e) => { checkboxOnChange( e, setAreasLab, areasLab );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasLab, areasLab);
                          }}
                          defaultChecked={inputs.lab === null ? null : inputs.lab.includes("Maquinados Avanzados")? true : null}
                          disabled = {multiOption.p9}
                          checked = {multiOption.p9 ? false : null}
                        />
                        <span>Maquinados Avanzados</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Integración I4.0"
                          name="setAreasLab"
                          onChange={(e) => { checkboxOnChange( e, setAreasLab, areasLab );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasLab, areasLab);
                          }}
                          defaultChecked={inputs.lab === null ? null : inputs.lab.includes("Integración I4.0")? true : null}
                          disabled = {multiOption.p9}
                          checked = {multiOption.p9 ? false : null}
                        />
                        <span>Integración I4.0</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Cómputo Avanzado"
                          name="setAreasLab"
                          onChange={(e) => { checkboxOnChange( e, setAreasLab, areasLab );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasLab, areasLab);
                          }}
                          defaultChecked={inputs.lab === null ? null : inputs.lab.includes("Cómputo Avanzado")? true : null}
                          disabled = {multiOption.p9}
                          checked = {multiOption.p9 ? false : null}
                        />
                        <span>Cómputo Avanzado</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Manufactura Aditiva"
                          name="setAreasLab"
                          onChange={(e) => { checkboxOnChange( e, setAreasLab, areasLab );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasLab, areasLab);
                          }}
                          defaultChecked={inputs.lab === null ? null : inputs.lab.includes("Manufactura Aditiva")? true : null}
                          disabled = {multiOption.p9}
                          checked = {multiOption.p9 ? false : null}
                        />
                        <span>Manufactura Aditiva</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Prototipos Electrónicos"
                          name="setAreasLab"
                          onChange={(e) => { checkboxOnChange( e, setAreasLab, areasLab );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasLab, areasLab);
                          }}
                          defaultChecked={inputs.lab === null ? null : inputs.lab.includes("Prototipos Electrónicos")? true : null}
                          disabled = {multiOption.p9}
                          checked = {multiOption.p9 ? false : null}
                        />
                        <span>Prototipos Electrónicos</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Pruebas de Compatibilidad Electromagnética"
                          name="setAreasLab"
                          onChange={(e) => { checkboxOnChange( e, setAreasLab, areasLab );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasLab, areasLab);
                          }}
                          defaultChecked={inputs.lab === null ? null : inputs.lab.includes("Pruebas de Compatibilidad Electromagnética")? true : null}
                          disabled = {multiOption.p9}
                          checked = {multiOption.p9 ? false : null}
                        />
                        <span>Pruebas de Compatibilidad Electromagnética</span>
                      </label>
                    </p>
                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Ninguno"
                          name="setAreasLab"
                          onChange={(e) => { checkboxOnChange( e, setAreasLab, areasLab );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasLab, areasLab);
                          }}
                          defaultChecked={inputs.lab === null ? null : inputs.lab.includes("Ninguno")? true : null}
                          
                        />
                        <span>Ninguno</span>
                      </label>
                    </p>
                  </div>
                  <div className="input-field col s12 m6">
                      <input
                        id="imtwo11"
                        name="labtwo"
                        value={inputs.labtwo}
                        type="text"
                        onChange={(e) => onChange(e)}
                        className="materialize-textarea "
                        disabled = {multiOption.p9}
                      ></input>
                      <label htmlFor="imtwo11">Otro</label>
                  </div>
                </div>

                <div className="input-field col s12 m12">
                  <i className="material-icons prefix">create</i>
                  <div className="col s12 m12 center-align">
                    <p>
                      10.-¿Cuál de estos aspectos considera importante invertir?
                    </p>
                    <br></br>
                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Prospectiva tecnología y de negocios"
                          name="setAreasImportant"
                          onChange={(e) => { checkboxOnChange( e, setAreasImportant, areasImportant );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasImportant, areasImportant);
                          }}
                          defaultChecked={inputs.important === null ? null : inputs.important.includes("Prospectiva tecnología y de negocios")? true : null}
                          disabled = {multiOption.p10}
                          checked = {multiOption.p10 ? false : null}
                        />
                        <span>Prospectiva tecnología y de negocios</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Estudio de mercado"
                          name="setAreasImportant"
                          onChange={(e) => { checkboxOnChange( e, setAreasImportant, areasImportant );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasImportant, areasImportant);
                          }}
                          defaultChecked={inputs.important === null ? null : inputs.important.includes("Estudio de mercado")? true : null}
                          disabled = {multiOption.p10}
                          checked = {multiOption.p10 ? false : null}
                        />
                        <span>Estudio de mercado</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Análisis del mercado nacional e internacional"
                          name="setAreasImportant"
                          onChange={(e) => { checkboxOnChange( e, setAreasImportant, areasImportant );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasImportant, areasImportant);
                          }}
                          defaultChecked={inputs.important === null ? null : inputs.important.includes("Análisis del mercado nacional e internacional")? true : null}
                          disabled = {multiOption.p10}
                          checked = {multiOption.p10 ? false : null}
                        />
                        <span>
                          Análisis del mercado nacional e internacional
                        </span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Investigación aplicada"
                          name="setAreasImportant"
                          onChange={(e) => { checkboxOnChange( e, setAreasImportant, areasImportant );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasImportant, areasImportant);
                          }}
                          defaultChecked={inputs.important === null ? null : inputs.important.includes("Investigación aplicada")? true : null}
                          disabled = {multiOption.p10}
                          checked = {multiOption.p10 ? false : null}
                        />
                        <span>Investigación aplicada</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Análisis de patentes"
                          name="setAreasImportant"
                          onChange={(e) => { checkboxOnChange( e, setAreasImportant, areasImportant );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasImportant, areasImportant);
                          }}
                          defaultChecked={inputs.important === null ? null : inputs.important.includes("Análisis de patentes")? true : null}
                          disabled = {multiOption.p10}
                          checked = {multiOption.p10 ? false : null}
                        />
                        <span>Análisis de patentes</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Benchmarking"
                          name="setAreasImportant"
                          onChange={(e) => { checkboxOnChange( e, setAreasImportant, areasImportant );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasImportant, areasImportant);
                          }}
                          defaultChecked={inputs.important === null ? null : inputs.important.includes("Benchmarking")? true : null}
                          disabled = {multiOption.p10}
                          checked = {multiOption.p10 ? false : null}
                        />
                        <span>Benchmarking</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Ninguno"
                          name="setAreasImportant"
                          onChange={(e) => { checkboxOnChange( e, setAreasImportant, areasImportant );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasImportant, areasImportant);
                          }}
                          defaultChecked={inputs.important === null ? null : inputs.important.includes("Ninguno")? true : null}
                        />
                        <span>Ninguno</span>
                      </label>
                    </p>

                    <div className="input-field col s12 m6">
                      <input
                        id="imtwo"
                        name="importantwo"
                        value={inputs.importantwo}
                        type="text"
                        onChange={(e) => onChange(e)}
                        className="materialize-textarea "
                        disabled = {multiOption.p10}
                      ></input>
                      <label htmlFor="imtwo">Otro</label>
                    </div>
                  </div>
                </div>

                <div className="input-field col s12 m12">
                  <i className="material-icons prefix">create</i>
                  <div className="col s12 m12 center-align">
                    <p>11.-¿Subcontrata alguno de los siguientes servicios tecnológicos?</p>
                    <br></br>
                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Pruebas no destructivas"
                          name="setAreasTec"
                          onChange={(e) => { checkboxOnChange( e, setAreasTec, areasTec );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasTec, areasTec);
                          }}
                          defaultChecked={inputs.tec === null ? null : inputs.tec.includes("Pruebas no destructivas")? true : null}
                          disabled = {multiOption.p11}
                          checked = {multiOption.p11 ? false : null}
                        />
                        <span>Pruebas no destructivas</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Servicios de metrología"
                          name="setAreasTec"
                          onChange={(e) => { checkboxOnChange( e, setAreasTec, areasTec );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasTec, areasTec);
                          }}
                          defaultChecked={inputs.tec === null ? null : inputs.tec.includes("Servicios de metrología")? true : null}
                          disabled = {multiOption.p11}
                          checked = {multiOption.p11 ? false : null}
                        />
                        <span>Servicios de metrología</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Servicios de diseño CAD / CAM / CAE"
                          name="setAreasTec"
                          onChange={(e) => { checkboxOnChange( e, setAreasTec, areasTec );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasTec, areasTec);
                          }}
                          defaultChecked={inputs.tec === null ? null : inputs.tec.includes("Servicios de diseño CAD / CAM / CAE")? true : null}
                          disabled = {multiOption.p11}
                          checked = {multiOption.p11 ? false : null}
                        />
                        <span>Servicios de diseño CAD / CAM / CAE</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Validación dimensional"
                          name="setAreasTec"
                          onChange={(e) => { checkboxOnChange( e, setAreasTec, areasTec );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasTec, areasTec);
                          }}
                          defaultChecked={inputs.tec === null ? null : inputs.tec.includes("Validación dimensional")? true : null}
                          disabled = {multiOption.p11}
                          checked = {multiOption.p11 ? false : null}
                        />
                        <span>Validación dimensional</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Servicios técnicos fuera del país"
                          name="setAreasTec"
                          onChange={(e) => { checkboxOnChange( e, setAreasTec, areasTec );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasTec, areasTec);
                          }}
                          defaultChecked={inputs.tec === null ? null : inputs.tec.includes("Servicios técnicos fuera del país")? true : null}
                          disabled = {multiOption.p11}
                          checked = {multiOption.p11 ? false : null}
                        />
                        <span>Servicios técnicos fuera del país</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Fabricaciones especiales"
                          name="setAreasTec"
                          onChange={(e) => { checkboxOnChange( e, setAreasTec, areasTec );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasTec, areasTec);
                          }}
                          defaultChecked={inputs.tec === null ? null : inputs.tec.includes("Fabricaciones especiales")? true : null}
                          disabled = {multiOption.p11}
                          checked = {multiOption.p11 ? false : null}
                        />
                        <span>Fabricaciones especiales</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Pruebas de calidad"
                          name="setAreasTec"
                          onChange={(e) => { checkboxOnChange( e, setAreasTec, areasTec );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasTec, areasTec);
                          }}
                          defaultChecked={inputs.tec === null ? null : inputs.tec.includes("Pruebas de calidad")? true : null}
                          disabled = {multiOption.p11}
                          checked = {multiOption.p11 ? false : null}
                        />
                        <span>Pruebas de calidad</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Servicios especializados"
                          name="setAreasTec"
                          onChange={(e) => { checkboxOnChange( e, setAreasTec, areasTec );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasTec, areasTec);
                          }}
                          defaultChecked={inputs.tec === null ? null : inputs.tec.includes("Servicios especializados")? true : null}
                          disabled = {multiOption.p11}
                          checked = {multiOption.p11 ? false : null}
                        />
                        <span>Servicios especializados</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Ninguno"
                          name="setAreasTec"
                          onChange={(e) => { checkboxOnChange( e, setAreasTec, areasTec );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasTec, areasTec);
                          }}
                          defaultChecked={inputs.tec === null ? null : inputs.tec.includes("Ninguno")? true : null}
                          
                        />
                        <span>Ninguno</span>
                      </label>
                    </p>

                    <div className="input-field col s12 m6">
                      <input
                        id="tec"
                        name="tectwo"
                        value={inputs.tectwo}
                        type="text"
                        onChange={(e) => onChange(e)}
                        className="materialize-textarea "
                        disabled = {multiOption.p11}
                      ></input>
                      <label htmlFor="tec">Otros</label>
                    </div>
                  </div>
                </div>

                <div className="input-field col s12 m8">
                  <i className="material-icons prefix">create</i>
                  <select id="con" name="conacyt" value={inputs.conacyt} onChange={(e) => onChange(e)}>
                    <option value=""disabled selected>Seleccione su opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                  </select>
                  <label htmlFor="user">
                    12.-¿Tiene interés por los proyectos tecnológicos de CONACyT?
                  </label>
                </div>

                <div className="input-field col s12 m12">
                  <i className="material-icons prefix">create</i>
                  <div className="col s12 m12 center-align">
                    <p>
                      13.-De las siguientes opciones, ¿Cuál tiene mayor prioridad en
                      su empresa?
                    </p>
                    <br></br>
                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Incubación de nuevas ideas de negocio"
                          name="setAreasPriority"
                          onChange={(e) => { checkboxOnChange( e, setAreasPriority, areasPriority );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasPriority, areasPriority);
                          }}
                          defaultChecked={inputs.priority === null ? null : 
                            inputs.priority.includes("Incubación de nuevas ideas de negocio")? true : null}
                            disabled = {multiOption.p13}
                            checked = {multiOption.p13 ? false : null}
                        />
                        <span>Incubación de nuevas ideas de negocio</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Programas de aceleración de negocios"
                          name="setAreasPriority"
                          onChange={(e) => { checkboxOnChange( e, setAreasPriority, areasPriority );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasPriority, areasPriority);
                          }}
                          defaultChecked={inputs.priority === null ? null : 
                            inputs.priority.includes("Programas de aceleración de negocios")? true : null}
                            disabled = {multiOption.p13}
                            checked = {multiOption.p13 ? false : null}
                        />
                        <span>Programas de aceleración de negocios</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Asesoría / Consultoría"
                          name="setAreasPriority"
                          onChange={(e) => { checkboxOnChange( e, setAreasPriority, areasPriority );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasPriority, areasPriority);
                          }}
                          defaultChecked={inputs.priority === null ? null : 
                            inputs.priority.includes("Asesoría / Consultoría")? true : null}
                            disabled = {multiOption.p13}
                            checked = {multiOption.p13 ? false : null}
                        />
                        <span>Asesoría / Consultoría</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Desarrollo Tecnológico"
                          name="setAreasPriority"
                          onChange={(e) => { checkboxOnChange( e, setAreasPriority, areasPriority );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasPriority, areasPriority);
                          }}
                          defaultChecked={inputs.priority === null ? null : 
                            inputs.priority.includes("Desarrollo Tecnológico")? true : null}
                            disabled = {multiOption.p13}
                            checked = {multiOption.p13 ? false : null}
                        />
                        <span>Desarrollo Tecnológico</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Desarrollo de nuevos productos"
                          name="setAreasPriority"
                          onChange={(e) => { checkboxOnChange( e, setAreasPriority, areasPriority );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasPriority, areasPriority);
                          }}
                          defaultChecked={inputs.priority === null ? null : 
                            inputs.priority.includes("Desarrollo de nuevos productos")? true : null}
                            disabled = {multiOption.p13}
                            checked = {multiOption.p13 ? false : null}
                        />
                        <span>Desarrollo de nuevos productos</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Inversión y capital"
                          name="setAreasPriority"
                          onChange={(e) => { checkboxOnChange( e, setAreasPriority, areasPriority );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasPriority, areasPriority);
                          }}
                          defaultChecked={inputs.priority === null ? null : 
                            inputs.priority.includes("Inversión y capital")? true : null}
                            disabled = {multiOption.p13}
                            checked = {multiOption.p13 ? false : null}
                        />
                        <span>Inversión y capital</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Desarrollo de capital humano"
                          name="setAreasPriority"
                          onChange={(e) => { checkboxOnChange( e, setAreasPriority, areasPriority );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasPriority, areasPriority);
                          }}
                          defaultChecked={inputs.priority === null ? null : 
                            inputs.priority.includes("Desarrollo de capital humano")? true : null}
                            disabled = {multiOption.p13}
                            checked = {multiOption.p13 ? false : null}
                        />
                        <span>Desarrollo de capital humano</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Innovación"
                          name="setAreasPriority"
                          onChange={(e) => { checkboxOnChange( e, setAreasPriority, areasPriority );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasPriority, areasPriority);
                          }}
                          defaultChecked={inputs.priority === null ? null : 
                            inputs.priority.includes("Innovación")? true : null}
                            disabled = {multiOption.p13}
                            checked = {multiOption.p13 ? false : null}
                        />
                        <span>Innovación</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Certificaciones"
                          name="setAreasPriority"
                          onChange={(e) => { checkboxOnChange( e, setAreasPriority, areasPriority );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasPriority, areasPriority);
                          }}
                          defaultChecked={inputs.priority === null ? null : 
                            inputs.priority.includes("Certificaciones")? true : null}
                            disabled = {multiOption.p13}
                            checked = {multiOption.p13 ? false : null}
                        />
                        <span>Certificaciones</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Ventas y marketing"
                          name="setAreasPriority"
                          onChange={(e) => { checkboxOnChange( e, setAreasPriority, areasPriority );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasPriority, areasPriority);
                          }}
                          defaultChecked={inputs.priority === null ? null : 
                            inputs.priority.includes("Ventas y marketing")? true : null}
                            disabled = {multiOption.p13}
                            checked = {multiOption.p13 ? false : null}
                        />
                        <span>Ventas y marketing</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Desarrollo organizacional"
                          name="setAreasPriority"
                          onChange={(e) => { checkboxOnChange( e, setAreasPriority, areasPriority );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasPriority, areasPriority);
                          }}
                          defaultChecked={inputs.priority === null ? null : 
                            inputs.priority.includes("Desarrollo organizacional")? true : null}
                            disabled = {multiOption.p13}
                            checked = {multiOption.p13 ? false : null}
                        />
                        <span>Desarrollo organizacional</span>
                      </label>
                    </p>
                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          value="Ninguna"
                          name="setAreasPriority"
                          onChange={(e) => { checkboxOnChange( e, setAreasPriority, areasPriority );
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasPriority, areasPriority);
                          }}
                          defaultChecked={inputs.priority === null ? null : 
                            inputs.priority.includes("Ninguna")? true : null}
                        />
                        <span>Ninguna</span>
                      </label>
                    </p>

                    <div className="input-field col s12 m6">
                      <input
                        id="pri"
                        name="prioritytwo"
                        value={inputs.prioritytwo}
                        type="text"
                        onChange={(e) => onChange(e)}
                        className="materialize-textarea "
                        disabled = {multiOption.p13}
                      ></input>
                      <label htmlFor="pri">Otro</label>
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
export default Capa;
