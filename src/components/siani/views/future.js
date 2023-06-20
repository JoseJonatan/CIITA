import M from "materialize-css";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../../node_modules/materialize-css/dist/css/materialize.min.css";
import { useHistory } from "react-router-dom";

//New API
import {
  futurePUT,
  futureGetByID
} from "../services/api";

function Future() {
  const { t, i18n } = useTranslation("logi");

  const [showResults, setShowResults] = React.useState(false);

  let history = useHistory();

  const [areasPro, setAreasPro] = useState({});
  const [areasSel, setAreasSel] = useState({});
  const [areasWish, setAreasWish] = useState({});
  const [areasItem, setAreasItem] = useState({});
  const [areasTech, setAreasTech] = useState({});

  const [multiOption, setMultiOption] = useState({
    p7: false,
    p8: false,
  });

  const [inputs, setInputs] = useState({
    id: "",
    next: "",
    process: [],
    processtwo: "",
    tool: "",
    select: [],
    selectwo: "",
    learn: "",
    wish: [],
    wishtwo: "",
    item: [],
    itemtwo: "",
    tech: [],
    techtwo: "",
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
      const inputsFromDB = await futureGetByID(dataid);
      console.log("Quiz ID desde GET by ID: "+inputsFromDB.resultado.future[0].quiz_id);

      //Set the inputs values for the user visualization
      setInputs({...inputs,
        id: dataid,
        next: inputsFromDB.resultado.future[0].fut_next,
        process: inputsFromDB.resultado.future[0].fut_process,
        processtwo: inputsFromDB.resultado.future[0].fut_processtwo,
        tool: inputsFromDB.resultado.future[0].fut_tool,
        select: inputsFromDB.resultado.future[0].fut_select,
        selectwo: inputsFromDB.resultado.future[0].fut_selectwo,
        learn: inputsFromDB.resultado.future[0].fut_learn,
        wish: inputsFromDB.resultado.future[0].fut_wish,
        wishtwo: inputsFromDB.resultado.future[0].fut_wishtwo,
        item: inputsFromDB.resultado.future[0].fut_item,
        itemtwo: inputsFromDB.resultado.future[0].fut_itemtwo,
        tech: inputsFromDB.resultado.future[0].fut_tech,
        techtwo: inputsFromDB.resultado.future[0].fut_techtwo,
        flag:""
      });

      //Set results of Question 2
      setAreasPro({...areasPro,
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
      });

      //Set results of Question 4
      setAreasSel({...areasSel,
        ["Realidad Virtual"]:inputs.select.includes("Realidad Virtual"),
        ["Robótica"]:inputs.select.includes("Robótica"),
        ["Big Data"]:inputs.select.includes("Big Data"),
        ["IoT"]:inputs.select.includes("IoT"),
        ["Inteligencia Artificial"]:inputs.select.includes("Inteligencia Artificial"),
        ["Desarrollo de software dedicado"]:inputs.select.includes("Desarrollo de software dedicado"),
        ["Desarrollo de software científico y de ingeniería"]:inputs.select.includes("Desarrollo de software científico y de ingeniería"),
        ["Ingeniería de procesos para el desarrollo de proyectos"]:inputs.select.includes("Ingeniería de procesos para el desarrollo de proyectos"),
        ["Metodologías y herramientas aplicados al desarrollo de software"]:inputs.select.includes("Metodologías y herramientas aplicados al desarrollo de software"),
        ["Lenguajes para el modelado, simulación de software y procesos"]:inputs.select.includes("Lenguajes para el modelado, simulación de software y procesos"),
        ["Realidad virtual y aumentada"]:inputs.select.includes("Realidad virtual y aumentada"),
      });

      //Set results of Question 6
      setAreasWish({...areasWish,
        ["5s"]:inputs.wish.includes("5s"),
        ["Poka Yoke"]:inputs.wish.includes("Poka Yoke"),
        ["Kan Ben"]:inputs.wish.includes("Kan Ben"),
        ["Six Sigma"]:inputs.wish.includes("Six Sigma"),
        ["JIT"]:inputs.wish.includes("JIT"),
        ["TQM"]:inputs.wish.includes("TQM"),
        ["Kaizen"]:inputs.wish.includes("Kaizen"),
        ["Andon"]:inputs.wish.includes("Andon"),
        ["Smed"]:inputs.wish.includes("Smed"),
        ["VSM"]:inputs.wish.includes("VSM"),
        ["TPM"]:inputs.wish.includes("TPM"),
      });

      //Set results of Question 7
      setAreasItem({...areasItem,
        ["Prospectiva tecnología y de negocios"]:inputs.item.includes("Prospectiva tecnología y de negocios"),
        ["Estudio de mercado"]:inputs.item.includes("Estudio de mercado"),
        ["Análisis del mercado nacional e internacional"]:inputs.item.includes("Análisis del mercado nacional e internacional"),
        ["Investigación aplicada"]:inputs.item.includes("Investigación aplicada"),
        ["Análisis de patentes"]:inputs.item.includes("Análisis de patentes"),
        ["Benchmarking"]:inputs.item.includes("Benchmarking"),
        ["Ninguno"]:inputs.item.includes("Ninguno"),
      });

      //Set results of Question 8
      setAreasTech({...areasTech,
        ["Manufactura y prototipado (CAD/CAE/CAM)"]:inputs.tech.includes("Manufactura y prototipado (CAD/CAE/CAM)"),
        ["Metrología"]:inputs.tech.includes("Metrología"),
        ["Análisis de materiales"]:inputs.tech.includes("Análisis de materiales"),
        ["Desarrollo de software e integración de tecnologías de cómputo"]:inputs.tech.includes("Desarrollo de software e integración de tecnologías de cómputo"),
        ["Prototipado electrónico"]:inputs.tech.includes("Prototipado electrónico"),
        ["Pruebas de compatibilidad electromagnética"]:inputs.tech.includes("Pruebas de compatibilidad electromagnética"),
        ["Ninguno"]:inputs.tech.includes("Ninguno"),
      });

      //Set multioptions 
      setMultiOption({...multiOption,
        p7: inputs.item.includes("Ninguno"),
        p8: inputs.tech.includes("Ninguno"),
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

    //Question 7, if press "Ninguna" disable all
    if(e.target.name === "setAreasItem"){
      if(e.target.value === "Ninguno"){
        if(e.target.checked){
          setMultiOption({...multiOption,
            p7: true
          });
  
          setAreasItem({...areasItem,
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
            p7: false
          });
        }
        
      }
    }

    //Question 8, if press "Ninguna" disable all
    if(e.target.name === "setAreasTech"){
      if(e.target.value === "Ninguno"){
        if(e.target.checked){
          setMultiOption({...multiOption,
            p8: true
          });
  
          setAreasTech({...areasTech,
            ["Manufactura y prototipado (CAD/CAE/CAM)"]:false,
            ["Metrología"]:false,
            ["Análisis de materiales"]:false,
            ["Desarrollo de software e integración de tecnologías de cómputo"]:false,
            ["Prototipado electrónico"]:false,
            ["Pruebas de compatibilidad electromagnética"]:false,
            ["Ninguno"]:true,
          });
        }
        else{
          setMultiOption({...multiOption,
            p8: false
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
    inputs.process = addArray(areasPro);
    inputs.select = addArray(areasSel);
    inputs.wish = addArray(areasWish);
    inputs.item = addArray(areasItem);
    inputs.tech = addArray(areasTech);

    if(
      inputs.next === null || inputs.tool === null ||
      inputs.learn === null || inputs.item.length === 0 ||
      inputs.tech.length === 0
    ){
      
      console.log(inputs);
      if(inputs.next === null){
        M.toast({html: '¡Llenar pregunta 1!'});
      }
      if(inputs.tool === null){
        M.toast({html: '¡Llenar pregunta 3!'});
      }
      if(inputs.learn === null){
        M.toast({html: '¡Llenar pregunta 5!'});
      }
      if(inputs.item.length === 0){
        M.toast({html: '¡Llenar pregunta 7!'});
      }
      if(inputs.tech.length === 0){
        M.toast({html: '¡Llenar pregunta 8!'});
      }
    }
    else{
      try {
        //Get the Quiz ID from LocalStorage
        inputs.id = window.localStorage.getItem('quizId');
        console.log(inputs);
  
        //Make an UPDATE to the row in table
        await futurePUT(inputs.id,inputs);
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
      history.push("/forta");
  };
  const onReturn = () => {
    history.push("/mark");
  };


  return (
    <div>
      <div className="col s12">
        <div className="card">
          <div className="card-action light-blue darken-4 white-text center-align">
            <h5>VI. Estado Futuro</h5>
          </div>
          <div className="card-content">
            <div className="row">
              <div className="card-panel col s12 m12">
                <div className="input-field col s12 m10">
                  <i className="material-icons prefix">create</i>
                  <div className="col s12 m12 center-align">
                    <p>
                      1.-En los próximos 3 años, ¿Tiene contemplado invertir en
                      nuevos procesos y/o tecnologías?
                    </p>
                    <br></br>
                    <p className="col s12 m3">
                      <label>
                        <input
                          id="ne"
                          type="radio"
                          name="next"
                          value="Si"
                          onChange={(e) => onChange(e)}
                          checked = {inputs.next === 'Si'}
                          
                        />
                        <span>Si</span>
                      </label>
                    </p>
                    <p className="col s12 m3">
                      <label>
                        <input
                          id="ne"
                          type="radio"
                          name="next"
                          value="No"
                          onChange={(e) => onChange(e)}
                          checked = {inputs.next === 'No'}
                        />
                        <span>No</span>
                      </label>
                    </p>
                  </div>
                </div>

                <div className="input-field col s12 m12">
                  <i className="material-icons prefix">create</i>
                  <div className="col s12 m12 center-align">
                    <p>2.-Seleccione en que procesos desearia invertir:</p>
                    <br></br>
                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasPro"
                          value="Maquinado Convencional"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasPro, areasPro);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasPro, areasPro);
                          }}
                          defaultChecked={inputs.process === null ? null : 
                            inputs.process.includes("Maquinado Convencional")? true : null}
                            disabled = {inputs.next === 'No'}
                            checked = {inputs.next === 'No' ? false : null}
                        />
                        <span>Maquinado Convencional</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasPro"
                          value="Troquelado"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasPro, areasPro);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasPro, areasPro);
                          }}
                          defaultChecked={inputs.process === null ? null : 
                            inputs.process.includes("Troquelado")? true : null}
                            disabled = {inputs.next === 'No'}
                            checked = {inputs.next === 'No' ? false : null}
                        />
                        <span>Troquelado</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasPro"
                          value="Diseño"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasPro, areasPro);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasPro, areasPro);
                          }}
                          defaultChecked={inputs.process === null ? null : 
                            inputs.process.includes("Diseño")? true : null}
                            disabled = {inputs.next === 'No'}
                            checked = {inputs.next === 'No' ? false : null}
                        />
                        <span>Diseño</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasPro"
                          value="Recubrimiento"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasPro, areasPro);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasPro, areasPro);
                          }}
                          defaultChecked={inputs.process === null ? null : 
                            inputs.process.includes("Recubrimiento")? true : null}
                            disabled = {inputs.next === 'No'}
                            checked = {inputs.next === 'No' ? false : null}
                        />
                        <span>Recubrimiento</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasPro"
                          value="Tratamiento térmico"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasPro, areasPro);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasPro, areasPro);
                          }}
                          defaultChecked={inputs.process === null ? null : 
                            inputs.process.includes("Tratamiento térmico")? true : null}
                            disabled = {inputs.next === 'No'}
                            checked = {inputs.next === 'No' ? false : null}
                        />
                        <span>Tratamiento térmico</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasPro"
                          value="Inyección de Plástico"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasPro, areasPro);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasPro, areasPro);
                          }}
                          defaultChecked={inputs.process === null ? null : 
                            inputs.process.includes("Inyección de Plástico")? true : null}
                            disabled = {inputs.next === 'No'}
                            checked = {inputs.next === 'No' ? false : null}
                        />
                        <span>Inyección de Plástico</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasPro"
                          value="Automatización"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasPro, areasPro);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasPro, areasPro);
                          }}
                          defaultChecked={inputs.process === null ? null : 
                            inputs.process.includes("Automatización")? true : null}
                            disabled = {inputs.next === 'No'}
                            checked = {inputs.next === 'No' ? false : null}
                        />
                        <span>Automatización</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasPro"
                          value="TIG / MIG"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasPro, areasPro);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasPro, areasPro);
                          }}
                          defaultChecked={inputs.process === null ? null : 
                            inputs.process.includes("TIG / MIG")? true : null}
                            disabled = {inputs.next === 'No'}
                            checked = {inputs.next === 'No' ? false : null}
                        />
                        <span>TIG / MIG</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasPro"
                          value="Dimensionado"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasPro, areasPro);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasPro, areasPro);
                          }}
                          defaultChecked={inputs.process === null ? null : 
                            inputs.process.includes("Dimensionado")? true : null}
                            disabled = {inputs.next === 'No'}
                            checked = {inputs.next === 'No' ? false : null}
                        />
                        <span>Dimensionado</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasPro"
                          value="Maquinado CNC"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasPro, areasPro);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasPro, areasPro);
                          }}
                          defaultChecked={inputs.process === null ? null : 
                            inputs.process.includes("Maquinado CNC")? true : null}
                            disabled = {inputs.next === 'No'}
                            checked = {inputs.next === 'No' ? false : null}
                        />
                        <span>Maquinado CNC</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasPro"
                          value="Tratamiento Químico"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasPro, areasPro);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasPro, areasPro);
                          }}
                          defaultChecked={inputs.process === null ? null : 
                            inputs.process.includes("Tratamiento Químico")? true : null}
                            disabled = {inputs.next === 'No'}
                            checked = {inputs.next === 'No' ? false : null}
                        />
                        <span>Tratamiento Químico</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasPro"
                          value="Moldes y troqueles"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasPro, areasPro);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasPro, areasPro);
                          }}
                          defaultChecked={inputs.process === null ? null : 
                            inputs.process.includes("Moldes y troqueles")? true : null}
                            disabled = {inputs.next === 'No'}
                            checked = {inputs.next === 'No' ? false : null}
                        />
                        <span>Moldes y troqueles</span>
                      </label>
                    </p>

                    <div className="input-field col s12 m6">
                      <input
                        id="proc"
                        name="processtwo"
                        value={inputs.processtwo}
                        type="text"
                        onChange={(e) => onChange(e)}
                        className="materialize-textarea "
                        disabled = {inputs.next === 'No'}
                      ></input>
                      <label htmlFor="proc">Otro</label>
                    </div>
                  </div>
                </div>

                <div className="input-field col s12 m6">
                  <i className="material-icons prefix">create</i>
                  <div className="col s12 m12 center-align">
                    <p>
                      3.-En los próximos 3 años, ¿Tiene contemplado emplear alguna
                      herramientas de la Industria 4.0?
                    </p>
                    <br></br>
                    <p className="col s12 m3">
                      <label>
                        <input
                          id="too"
                          type="radio"
                          name="tool"
                          value="Si"
                          onChange={(e) => onChange(e)}
                          checked = {inputs.tool === 'Si'}
                        />
                        <span>Si</span>
                      </label>
                    </p>
                    <p className="col s12 m3">
                      <label>
                        <input
                          id="to"
                          type="radio"
                          name="tool"
                          value="No"
                          onChange={(e) => onChange(e)}
                          checked = {inputs.tool === 'No'}
                        />
                        <span>No</span>
                      </label>
                    </p>
                  </div>
                </div>

                <div className="input-field col s12 m12">
                  <i className="material-icons prefix">create</i>
                  <div className="col s12 m12 center-align">
                    <p>
                      4.-Seleccione en que herramientas de la Industria 4.0
                      desearia invertir o emplear:
                    </p>
                    <br></br>
                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasSel"
                          value="Realidad Virtual"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasSel, areasSel);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasSel, areasSel);
                          }}
                          defaultChecked={inputs.select === null ? null : 
                            inputs.select.includes("Realidad Virtual")? true : null}
                            disabled = {inputs.tool === 'No'}
                            checked = {inputs.tool === 'No' ? false : null}
                        />
                        <span>Realidad Virtual</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasSel"
                          value="Robótica"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasSel, areasSel);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasSel, areasSel);
                          }}
                          defaultChecked={inputs.select === null ? null : 
                            inputs.select.includes("Robótica")? true : null}
                            disabled = {inputs.tool === 'No'}
                            checked = {inputs.tool === 'No' ? false : null}
                        />
                        <span>Robótica</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasSel"
                          value="Big Data"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasSel, areasSel);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasSel, areasSel);
                          }}
                          defaultChecked={inputs.select === null ? null : 
                            inputs.select.includes("Big Data")? true : null}
                            disabled = {inputs.tool === 'No'}
                            checked = {inputs.tool === 'No' ? false : null}
                        />
                        <span>Big Data</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasSel"
                          value="IoT"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasSel, areasSel);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasSel, areasSel);
                          }}
                          defaultChecked={inputs.select === null ? null : 
                            inputs.select.includes("IoT")? true : null}
                            disabled = {inputs.tool === 'No'}
                            checked = {inputs.tool === 'No' ? false : null}
                        />
                        <span>IoT</span>
                      </label>
                    </p>

                    <p className="col s12 m4 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasSel"
                          value="Inteligencia Artificial"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasSel, areasSel);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasSel, areasSel);
                          }}
                          defaultChecked={inputs.select === null ? null : 
                            inputs.select.includes("Inteligencia Artificial")? true : null}
                            disabled = {inputs.tool === 'No'}
                            checked = {inputs.tool === 'No' ? false : null}
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
                            onChange={(e) => { checkboxOnChange( e, setAreasSel, areasSel);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasSel, areasSel);
                            }}
                            defaultChecked={inputs.select === null ? null : 
                              inputs.select.includes("Desarrollo de software dedicado")? true : null}
                              disabled = {inputs.tool === 'No'}
                              checked = {inputs.tool === 'No' ? false : null}
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
                            onChange={(e) => { checkboxOnChange( e, setAreasSel, areasSel);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasSel, areasSel);
                            }}
                            defaultChecked={inputs.select === null ? null : 
                              inputs.select.includes("Desarrollo de software científico y de ingeniería")? true : null}
                              disabled = {inputs.tool === 'No'}
                              checked = {inputs.tool === 'No' ? false : null}
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
                            onChange={(e) => { checkboxOnChange( e, setAreasSel, areasSel);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasSel, areasSel);
                            }}
                            defaultChecked={inputs.select === null ? null : 
                              inputs.select.includes("Ingeniería de procesos para el desarrollo de proyectos")? true : null}
                              disabled = {inputs.tool === 'No'}
                              checked = {inputs.tool === 'No' ? false : null}
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
                            onChange={(e) => { checkboxOnChange( e, setAreasSel, areasSel);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasSel, areasSel);
                            }}
                            defaultChecked={inputs.select === null ? null : 
                              inputs.select.includes("Metodologías y herramientas aplicados al desarrollo de software")? true : null}
                              disabled = {inputs.tool === 'No'}
                              checked = {inputs.tool === 'No' ? false : null}
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
                            onChange={(e) => { checkboxOnChange( e, setAreasSel, areasSel);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasSel, areasSel);
                            }}
                            defaultChecked={inputs.select === null ? null : 
                              inputs.select.includes("Lenguajes para el modelado, simulación de software y procesos")? true : null}
                              disabled = {inputs.tool === 'No'}
                              checked = {inputs.tool === 'No' ? false : null}
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
                            onChange={(e) => { checkboxOnChange( e, setAreasSel, areasSel);
                            }}
                            onClick={(e) => { checkboxOnChange( e, setAreasSel, areasSel);
                            }}
                            defaultChecked={inputs.select === null ? null : 
                              inputs.select.includes("Realidad virtual y aumentada")? true : null}
                              disabled = {inputs.tool === 'No'}
                              checked = {inputs.tool === 'No' ? false : null}
                          />
                          <span>Realidad virtual y aumentada</span>
                        </label>
                      </p>

                    <div className="input-field col s12 m6">
                      <input
                        id="select"
                        name="selectwo"
                        value={inputs.selectwo}
                        type="text"
                        onChange={(e) => onChange(e)}
                        className="materialize-textarea "
                        disabled = {inputs.tool === 'No'}
                      ></input>
                      <label htmlFor="select">Otro</label>
                    </div>
                  </div>
                </div>

                <div className="input-field col s12 m9">
                  <i className="material-icons prefix">create</i>
                  <div className="col s12 m12 center-align">
                    <p>
                      5.-En los próximos 3 años, ¿Tiene contemplado emplear alguna
                      herramientas de Lean Manufacturing?
                    </p>
                    <br></br>
                    <p className="col s12 m3">
                      <label>
                        <input
                          id="lea"
                          type="radio"
                          name="learn"
                          value="Si"
                          onChange={(e) => onChange(e)}
                          checked = {inputs.learn === 'Si'}
                        />
                        <span>Si</span>
                      </label>
                    </p>
                    <p className="col s12 m3">
                      <label>
                        <input
                          id="lea"
                          type="radio"
                          name="learn"
                          value="No"
                          onChange={(e) => onChange(e)}
                          checked = {inputs.learn === 'No'}
                        />
                        <span>No</span>
                      </label>
                    </p>
                  </div>
                </div>

                <div className="input-field col s12 m12">
                  <i className="material-icons prefix">create</i>
                  <div className="col s12 m12 center-align">
                    <p>
                      6.-Seleccione las herramienta de Lean Manufacturing que
                      desearia emplear:
                    </p>
                    <br></br>
                    <p className="col s12 m3 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasWish"
                          value="5s"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasWish, areasWish);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasWish, areasWish );
                          }}
                          defaultChecked={inputs.wish === null ? null : 
                            inputs.wish.includes("5s")? true : null}
                            disabled = {inputs.learn === 'No'}
                            checked = {inputs.learn === 'No' ? false : null}
                        />
                        <span>5s</span>
                      </label>
                    </p>

                    <p className="col s12 m3 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasWish"
                          value="Poka Yoke"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasWish, areasWish);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasWish, areasWish );
                          }}
                          defaultChecked={inputs.wish === null ? null : 
                            inputs.wish.includes("Poka Yoke")? true : null}
                            disabled = {inputs.learn === 'No'}
                            checked = {inputs.learn === 'No' ? false : null}
                        />
                        <span>Poka Yoke</span>
                      </label>
                    </p>

                    <p className="col s12 m3 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasWish"
                          value="Kan Ban"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasWish, areasWish);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasWish, areasWish );
                          }}
                          defaultChecked={inputs.wish === null ? null : 
                            inputs.wish.includes("Kan Ban")? true : null}
                            disabled = {inputs.learn === 'No'}
                            checked = {inputs.learn === 'No' ? false : null}
                        />
                        <span>Kan Ban</span>
                      </label>
                    </p>

                    <p className="col s12 m3 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasWish"
                          value="Six Sigma"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasWish, areasWish);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasWish, areasWish );
                          }}
                          defaultChecked={inputs.wish === null ? null : 
                            inputs.wish.includes("Six Sigma")? true : null}
                            disabled = {inputs.learn === 'No'}
                            checked = {inputs.learn === 'No' ? false : null}
                        />
                        <span>Six Sigma</span>
                      </label>
                    </p>

                    <p className="col s12 m3 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasWish"
                          value="JIT"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasWish, areasWish);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasWish, areasWish );
                          }}
                          defaultChecked={inputs.wish === null ? null : 
                            inputs.wish.includes("JIT")? true : null}
                            disabled = {inputs.learn === 'No'}
                            checked = {inputs.learn === 'No' ? false : null}
                        />
                        <span>JIT</span>
                      </label>
                    </p>

                    <p className="col s12 m3 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasWish"
                          value="TQM"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasWish, areasWish);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasWish, areasWish );
                          }}
                          defaultChecked={inputs.wish === null ? null : 
                            inputs.wish.includes("TQM")? true : null}
                            disabled = {inputs.learn === 'No'}
                            checked = {inputs.learn === 'No' ? false : null}
                        />
                        <span>TQM</span>
                      </label>
                    </p>

                    <p className="col s12 m3 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasWish"
                          value="Kaizen"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasWish, areasWish);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasWish, areasWish );
                          }}
                          defaultChecked={inputs.wish === null ? null : 
                            inputs.wish.includes("Kaizen")? true : null}
                            disabled = {inputs.learn === 'No'}
                            checked = {inputs.learn === 'No' ? false : null}
                        />
                        <span>Kaizen</span>
                      </label>
                    </p>

                    <p className="col s12 m3 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasWish"
                          value="Andon"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasWish, areasWish);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasWish, areasWish );
                          }}
                          defaultChecked={inputs.wish === null ? null : 
                            inputs.wish.includes("Andon")? true : null}
                            disabled = {inputs.learn === 'No'}
                            checked = {inputs.learn === 'No' ? false : null}
                        />
                        <span>Andon</span>
                      </label>
                    </p>

                    <p className="col s12 m3 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasWish"
                          value="Smed"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasWish, areasWish);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasWish, areasWish );
                          }}
                          defaultChecked={inputs.wish === null ? null : 
                            inputs.wish.includes("Smed")? true : null}
                            disabled = {inputs.learn === 'No'}
                            checked = {inputs.learn === 'No' ? false : null}
                        />
                        <span>Smed</span>
                      </label>
                    </p>

                    <p className="col s12 m3 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasWish"
                          value="VSM"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasWish, areasWish);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasWish, areasWish );
                          }}
                          defaultChecked={inputs.wish === null ? null : 
                            inputs.wish.includes("VSM")? true : null}
                            disabled = {inputs.learn === 'No'}
                            checked = {inputs.learn === 'No' ? false : null}
                        />
                        <span>VSM</span>
                      </label>
                    </p>

                    <p className="col s12 m3 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasWish"
                          value="TPM"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasWish, areasWish);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasWish, areasWish );
                          }}
                          defaultChecked={inputs.wish === null ? null : 
                            inputs.wish.includes("TPM")? true : null}
                            disabled = {inputs.learn === 'No'}
                            checked = {inputs.learn === 'No' ? false : null}
                        />
                        <span>TPM</span>
                      </label>
                    </p>

                    <div className="input-field col s12 m6">
                      <input
                        id="wisht"
                        name="wishtwo"
                        value={inputs.wishtwo}
                        type="text"
                        onChange={(e) => onChange(e)}
                        className="materialize-textarea "
                        disabled = {inputs.learn === 'No'}
                      ></input>
                      <label htmlFor="wisht">Otro</label>
                    </div>
                  </div>
                </div>

                <div className="input-field col s12 m12">
                  <i className="material-icons prefix">create</i>
                  <div className="col s12 m12 center-align">
                    <p>
                      7.-En los próximos 3 años, ¿Tiene contemplado invertir en alguno de los siguientes servicios de mejora a la organización?
                    </p>
                    <br></br>
                    <p className="col s12 m3 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasItem"
                          value="Prospectiva tecnológica y de negocios"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasItem, areasItem);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasItem, areasItem );
                          }}
                          defaultChecked={inputs.item === null ? null : 
                            inputs.item.includes("Prospectiva tecnológica y de negocios")? true : null}
                            disabled = {multiOption.p7}
                            checked = {multiOption.p7 ? false : null}
                        />
                        <span>Prospectiva tecnológica y de negocios</span>
                      </label>
                    </p>

                    <p className="col s12 m3 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasItem"
                          value="Estudio de mercado"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasItem, areasItem);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasItem, areasItem );
                          }}
                          defaultChecked={inputs.item === null ? null : 
                            inputs.item.includes("Estudio de mercado")? true : null}
                            disabled = {multiOption.p7}
                            checked = {multiOption.p7 ? false : null}
                        />
                        <span>Estudio de mercado</span>
                      </label>
                    </p>

                    <p className="col s12 m3 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasItem"
                          value="Análisis de mercado nacional e internacional"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasItem, areasItem);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasItem, areasItem );
                          }}
                          defaultChecked={inputs.item === null ? null : 
                            inputs.item.includes("Análisis de mercado nacional e internacional")? true : null}
                            disabled = {multiOption.p7}
                            checked = {multiOption.p7 ? false : null}
                        />
                        <span>
                          Análisis de mercado nacional e internacional
                        </span>
                      </label>
                    </p>

                    <p className="col s12 m3 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasItem"
                          value="Investigación tecnológica"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasItem, areasItem);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasItem, areasItem );
                          }}
                          defaultChecked={inputs.item === null ? null : 
                            inputs.item.includes("Investigación tecnológica")? true : null}
                            disabled = {multiOption.p7}
                            checked = {multiOption.p7 ? false : null}
                        />
                        <span>Investigación tecnológica</span>
                      </label>
                    </p>

                    <p className="col s12 m3 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasItem"
                          value="Análisis de patentes"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasItem, areasItem);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasItem, areasItem );
                          }}
                          defaultChecked={inputs.item === null ? null : 
                            inputs.item.includes("Análisis de patentes")? true : null}
                            disabled = {multiOption.p7}
                            checked = {multiOption.p7 ? false : null}
                        />
                        <span>Análisis de patentes</span>
                      </label>
                    </p>

                    <p className="col s12 m3 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasItem"
                          value="Benchmarking"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasItem, areasItem);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasItem, areasItem );
                          }}
                          defaultChecked={inputs.item === null ? null : 
                            inputs.item.includes("Benchmarking")? true : null}
                            disabled = {multiOption.p7}
                            checked = {multiOption.p7 ? false : null}
                        />
                        <span>Benchmarking</span>
                      </label>
                    </p>

                    <p className="col s12 m3 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasItem"
                          value="Ninguno"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasItem, areasItem);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasItem, areasItem );
                          }}
                          defaultChecked={inputs.item === null ? null : 
                            inputs.item.includes("Ninguno")? true : null}
                            
                        />
                        <span>Ninguno</span>
                      </label>
                    </p>

                    <div className="input-field col s12 m6">
                      <input
                        id="itemt"
                        name="itemtwo"
                        value={inputs.itemtwo}
                        type="text"
                        onChange={(e) => onChange(e)}
                        className="materialize-textarea "
                        disabled = {multiOption.p7}
                      ></input>
                      <label htmlFor="itemt">Otro</label>
                    </div>
                  </div>
                </div>

                <div className="input-field col s12 m12">
                  <i className="material-icons prefix">create</i>
                  <div className="col s12 m12 center-align">
                    <p>
                      8.-En los próximos 3 años ¿Tiene contemplado subcontratar algúno de los siguientes servicios tecnológicos?
                    </p>
                    <br></br>
                    <p className="col s12 m3 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasTech"
                          value="Manufactura y prototipado (CAD/CAE/CAM)"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasTech, areasTech);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasTech, areasTech );
                          }}
                          defaultChecked={inputs.tech === null ? null : 
                            inputs.tech.includes("Manufactura y prototipado (CAD/CAE/CAM)")? true : null}
                            disabled = {multiOption.p8}
                            checked = {multiOption.p8 ? false : null}
                        />
                        <span>Manufactura y prototipado (CAD/CAE/CAM)</span>
                      </label>
                    </p>

                    <p className="col s12 m3 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasTech"
                          value="Metrología"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasTech, areasTech);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasTech, areasTech );
                          }}
                          defaultChecked={inputs.tech === null ? null : 
                            inputs.tech.includes("Metrología")? true : null}
                            disabled = {multiOption.p8}
                            checked = {multiOption.p8 ? false : null}
                        />
                        <span>Metrología</span>
                      </label>
                    </p>

                    <p classNameName="col s12 m3 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasTech"
                          value="Desarrollo de software e integración de tecnologías de cómputo"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasTech, areasTech);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasTech, areasTech );
                          }}
                          defaultChecked={inputs.tech === null ? null : 
                            inputs.tech.includes("Desarrollo de software e integración de tecnologías de cómputo")? true : null}
                            disabled = {multiOption.p8}
                            checked = {multiOption.p8 ? false : null}
                        />
                        <span>Desarrollo de software e integración de tecnologías de cómputo</span>
                      </label>
                    </p>

                    <p className="col s12 m3 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasTech"
                          value="Análisis de materiales"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasTech, areasTech);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasTech, areasTech );
                          }}
                          defaultChecked={inputs.tech === null ? null : 
                            inputs.tech.includes("Análisis de materiales")? true : null}
                            disabled = {multiOption.p8}
                            checked = {multiOption.p8 ? false : null}
                        />
                        <span>Análisis de materiales</span>
                      </label>
                    </p>

                    <p className="col s12 m3 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasTech"
                          value="Prototipado electrónico"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasTech, areasTech);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasTech, areasTech );
                          }}
                          defaultChecked={inputs.tech === null ? null : 
                            inputs.tech.includes("Prototipado electrónico")? true : null}
                            disabled = {multiOption.p8}
                            checked = {multiOption.p8 ? false : null}
                        />
                        <span>Prototipado electrónico</span>
                      </label>
                    </p>

                    <p className="col s12 m3 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasTech"
                          value="Pruebas de compatibilidad electromagnética"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasTech, areasTech);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasTech, areasTech );
                          }}
                          defaultChecked={inputs.tech === null ? null : 
                            inputs.tech.includes("Pruebas de compatibilidad electromagnética")? true : null}
                            disabled = {multiOption.p8}
                            checked = {multiOption.p8 ? false : null}
                        />
                        <span>Pruebas de compatibilidad electromagnética</span>
                      </label>
                    </p>

                    <p className="col s12 m3 left-align">
                      <label>
                        <input
                          type="checkbox"
                          name="setAreasTech"
                          value="Ninguno"
                          onChange={(e) => {
                            checkboxOnChange(e, setAreasTech, areasTech);
                          }}
                          onClick={(e) => { checkboxOnChange( e, setAreasTech, areasTech );
                          }}
                          defaultChecked={inputs.tech === null ? null : 
                            inputs.tech.includes("Ninguno")? true : null}
                        />
                        <span>Ninguno</span>
                      </label>
                    </p>

                    <div class="input-field col s12 m6">
                      <input
                        id="techt"
                        name="techtwo"
                        value={inputs.techtwo}
                        type="text"
                        onChange={(e) => onChange(e)}
                        className="materialize-textarea "
                        disabled = {multiOption.p8}
                      ></input>
                      <label htmlFor="techt">Otros</label>
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
export default Future;
