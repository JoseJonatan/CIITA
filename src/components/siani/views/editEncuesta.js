import React, { useEffect, useState } from "react";
import M from "materialize-css";
import { useTranslation } from "react-i18next";
import "../../../../node_modules/materialize-css/dist/css/materialize.min.css";
import { useHistory} from "react-router-dom";

//New API
import {generalPUT} from "../services/api"; 
import {findN} from "../services/api"; 
import { home } from "../services/api";


function EditEncuesta () {
  
  const { t, i18n } = useTranslation("logi");

  const [showResults, setShowResults] = useState(false);

  const [isAbleToEdit, setIsAbleToEdit] = useState(false);

  const [cantEdit, setCantEdit] = useState(false);

  const [princMark, setPrincMark] = useState({});

  let history = useHistory();


  const [inputs, setInputs] = useState({
    user: "",
    title: "", 
    company: "", 
    contact: "", 
    tel: "", 
    email: "", 
    years: "", 
    number: "", 
    market: "",
    other: ""
  });


  useEffect(() => {
    M.AutoInit();
    window.scrollTo(0, 0);
  }, [inputs.flag]);

 const addArray = (object) => {
  const arr = [];
  for (const property in object) {
    if (object[property] === true) {
      arr.push(property);
    }
  }
  return arr;
  };

  const getRole = async (user) => {
    try {
      const dataHome = await home();
      console.log(dataHome);
      
      if(dataHome.user_role==="Admin" || dataHome.user_role==="Master")
      {
        console.log("Es admin!!");
        setIsAbleToEdit(true);
      }
      else if(user === dataHome.user_name){
        setIsAbleToEdit(true);
      }
      else{
        setCantEdit(true);
      }

      M.updateTextFields();
      
    } catch (err) {
      console.error(err.response);
    }
  };

  const searchSur = async () => {
    try {
        const smart = {"gtitle": inputs.title};
        console.log(smart);
        const dataSurvet = await findN(smart);
        console.log(dataSurvet);
        localStorage.setItem('quizId', dataSurvet.quiz_id);
        getRole(dataSurvet.user_name);

        setInputs({...inputs,
            user: dataSurvet.user_name,
            company: dataSurvet.gen_name, 
            contact: dataSurvet.gen_contact, 
            tel: dataSurvet.gen_tel, 
            email: dataSurvet.gen_email, 
            years: dataSurvet.gen_years, 
            number: dataSurvet.gen_number, 
            market: dataSurvet.gen_market,
            other: dataSurvet.gen_other,
            flag: ""
        });

        setPrincMark({...princMark,
            ["Médico"]:inputs.market.includes("Médico"),
            ["Mecánico"]:inputs.market.includes("Mecánico"),
            ["Automotríz"]:inputs.market.includes("Automotríz"),
            ["Electrónico"]:inputs.market.includes("Electrónico"),
            ["Metalmecánico"]:inputs.market.includes("Metalmecánico"),
            ["Aeroespacial"]:inputs.market.includes("Aeroespacial"),
            ["Agroindustria"]:inputs.market.includes("Agroindustria"),
            ["Minero"]:inputs.market.includes("Minero"),

        });
        
      } catch (err) {
        console.error(err.response);
      }
    

    M.updateTextFields();
  }
  
  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const checkboxOnChange = (e, set, areas) => {
    set({ ...areas, [e.target.value]: e.target.checked });
  };
  
  //When the button Save is pressed
  const onSubmitSave = async () => {
    if (inputs.title === "" || inputs.company === "" || inputs.contact === "" || inputs.tel === "" || inputs.email === "" || inputs.years === "" || inputs.number === "") {
      console.log("llenar campos solicitados");
      M.toast({html: '¡Llenar campos solicitados!'});
    } else {
      try {
        //inputs.user=dataUser_.user_name;
        inputs.market = addArray(princMark);
        console.log(inputs);

        const quizID = localStorage.getItem('quizId')
        await generalPUT(quizID,inputs);

        M.toast({html: '¡Guardado Exitoso!'});

        //Vision to Next Button
        setShowResults(true);
      } catch (error) {
        console.log(error);
        console.log(error.response);
        M.toast({html: '¡Fallo en el Guardado!'});
      }
    }
  };

  //Route to the Next Section of the Survey
  const onSubmitNext = () => {
      history.push("/inf");
  }

    return (
      <div>
          <div className="col s12">
            <div className="card">
                <div className="card-action light-blue darken-4 white-text center-align">
                    <h5>Editar Encuesta</h5>
                </div>
              <div className="card-content">
                  
                  <div className="row">
                  <div className="card-panel col s12" style={{paddingTop: '15px'}}>

                    <div className="input-field col s6 offset-s2">
                      <i className="material-icons prefix">assignment</i>
                      <input
                      id="tit"
                      name="title"
                      value={inputs.title}
                      type="text"
                      onChange={(e) => onChange(e)}
                      className="materialize-textarea validate"
                      ></input>
                      <label htmlFor="tit">Folio de la Encuesta</label>
                    </div>

                    <div className="col s2" style={{paddingTop: '20px'}}>
                      <button 
                        className="waves-effect waves-light btn  light-blue darken-4" 
                        onClick={() => searchSur()}
                      >
                        <i className="material-icons left">
                        search
                        </i>
                        Buscar
                      </button>
                    </div>
                    {cantEdit ? <div className="center col s12">
                      <h5 className="red-text text-darken-4">Lo sentimos, no puede editar esta encuesta</h5>
                    </div>:null}
                {isAbleToEdit ? <div>
                    <div className="input-field col s6">
                      <i className="material-icons prefix">business</i>
                      <input
                      id="comp"
                      name="company"
                      value={inputs.company}
                      type="text"
                      onChange={(e) => onChange(e)}
                      className="materialize-textarea "
                      ></input>
                      <label htmlFor="comp">Nombre de la Empresa</label>
                    </div>

                    <div className="input-field col s12 m6">
                      <i className="material-icons prefix">contact_phone</i>
                      <input
                      id="cont"
                      name="contact"
                      value={inputs.contact}
                      type="text"
                      onChange={(e) => onChange(e)}
                      className="materialize-textarea "
                      ></input>
                      <label htmlFor="cont">Persona de Contacto</label>
                    </div>

                    <div className="input-field col s12 m6">
                      <i className="material-icons prefix">phone</i>
                      <input
                      id="telephone"
                      name="tel"
                      value={inputs.tel}
                      type="text"
                      onChange={(e) => onChange(e)}
                      className="materialize-textarea "
                      ></input>
                      <label htmlFor="telephone">Teléfono</label>
                    </div>

                    <div className="input-field col s12 m6">
                      <i className="material-icons prefix">alternate_email</i>
                      <input
                      id="mail"
                      name="email"
                      value={inputs.email}
                      type="text"
                      onChange={(e) => onChange(e)}
                      className="materialize-textarea "
                      ></input>
                      <label htmlFor="mail">Correo Electrónico</label>
                    </div>

                    <div className="input-field col s12 m6">
                      <h6>Años de haberse constituido</h6>
                      <p>
                        <label>
                          <input 
                            name="years" 
                            type="radio" 
                            value="Menor a 3 años" 
                            onChange={(e) => onChange(e)}
                            checked={inputs.years === "Menor a 3 años"}
                        />
                          <span>Menor a 3 años</span>
                        </label>
                      </p>
                      <p>
                        <label>
                          <input 
                            name="years" 
                            type="radio" 
                            value="De 3 a 6 años" 
                            onChange={(e) => onChange(e)}
                            checked={inputs.years === "De 3 a 6 años"}
                            />
                          <span>De 3 a 6 años</span>
                        </label>
                      </p>
                      <p>
                        <label>
                          <input 
                            name="years" 
                            type="radio" 
                            value="De 6 a 10 años" 
                            onChange={(e) => onChange(e)}
                            checked={inputs.years === "De 6 a 10 años"  }
                            />
                          <span>De 6 a 10 años</span>
                        </label>
                      </p>
                      <p>
                        <label>
                          <input 
                            name="years" 
                            type="radio" 
                            value="Mayor a 10 años" 
                            onChange={(e) => onChange(e)}
                            checked={inputs.years === "Mayor a 10 años"}
                            />
                          <span>Mayor a 10 años</span>
                        </label>
                      </p>
                    </div>

                    <div className="col s12 m6">
                      <h6>Número de Empleados</h6>
                      <p>
                        <label>
                          <input 
                            name="number" 
                            type="radio" 
                            value="De 1 a 10" 
                            onChange={(e) => onChange(e)}
                            checked={inputs.number === "De 1 a 10" }
                            />
                          <span>De 1 a 10</span>
                        </label>
                      </p>
                      <p>
                        <label>
                          <input 
                            name="number" 
                            type="radio" 
                            value="De 11 a 20" 
                            onChange={(e) => onChange(e)}
                            checked={inputs.number === "De 11 a 20" }
                            />
                          <span>De 11 a 20</span>
                        </label>
                      </p>
                      <p>
                        <label>
                          <input 
                            name="number" 
                            type="radio" 
                            value="De 21 a 50" 
                            onChange={(e) => onChange(e)}
                            checked={inputs.number === "De 21 a 50"  }
                            />
                          <span>De 21 a 50</span>
                        </label>
                      </p>
                      <p>
                        <label>
                          <input 
                            name="number" 
                            type="radio" 
                            value="51 o más" 
                            onChange={(e) => onChange(e)}
                            checked={inputs.number === "51 o más"   }
                            />
                          <span>51 o más</span>
                        </label>
                      </p>
                      </div>
                    </div>:null}
                  </div>
                

                    {isAbleToEdit ? <div className="card-panel col s12 m12 center-align">
                      <p>Mercado principal al que atiende:</p>
                        <br></br>
                      <p className="col s12 m3">
                        <label>
                            <input 
                                type="checkbox"  
                                name="market" 
                                value="Médico" 
                                onChange={(e) => { checkboxOnChange( e, setPrincMark, princMark);}}
                                onClick={(e) => { checkboxOnChange( e, setPrincMark, princMark);
                                }}
                                defaultChecked={inputs.market === null ? null : 
                                  inputs.market.includes("Médico")? true : null}
                                />
                            <span>Médico</span>
                        </label>
                      </p>

                      <p className="col s12 m3">
                        <label>
                          <input 
                            type="checkbox"  
                            name="market" 
                            value="Mecánico" 
                            onChange={(e) => { checkboxOnChange( e, setPrincMark, princMark);}}
                            onClick={(e) => { checkboxOnChange( e, setPrincMark, princMark);
                            }}
                            defaultChecked={inputs.market === null ? null : 
                              inputs.market.includes("Mecánico" )? true : null}
                            />
                            <span>Mecánico</span>
                        </label>
                      </p>

                      <p className="col s12 m3">
                        <label>
                            <input 
                                type="checkbox"  
                                name="market" 
                                value="Automotríz" 
                                onChange={(e) => { checkboxOnChange( e, setPrincMark, princMark);}}
                                onClick={(e) => { checkboxOnChange( e, setPrincMark, princMark);
                                }}
                                defaultChecked={inputs.market === null ? null : 
                                  inputs.market.includes("Automotríz" )? true : null}
                                />
                            <span>Automotríz</span>
                        </label>
                      </p>

                      <p className="col s12 m3">
                        <label>
                            <input 
                            type="checkbox"  
                            name="market" 
                            value="Electrónico" 
                            onChange={(e) => { checkboxOnChange( e, setPrincMark, princMark);}}
                            onClick={(e) => { checkboxOnChange( e, setPrincMark, princMark);
                            }}
                            defaultChecked={inputs.market === null ? null : 
                              inputs.market.includes("Electrónico" )? true : null}
                            />
                            <span>Electrónico</span>
                        </label>
                      </p>

                      <p className="col s12 m3">
                        <label>
                            <input 
                                type="checkbox"  
                                name="market" 
                                value="Metalmecánico" 
                                onChange={(e) => { checkboxOnChange( e, setPrincMark, princMark);}}
                                onClick={(e) => { checkboxOnChange( e, setPrincMark, princMark);
                                }}
                                defaultChecked={inputs.market === null ? null : 
                                  inputs.market.includes("Metalmecánico" )? true : null}
                            />
                            <span>Metalmecánico</span>
                        </label>
                      </p>

                      <p className="col s12 m3">
                        <label>
                            <input 
                                type="checkbox"  
                                name="market" 
                                value="Aeroespacial" 
                                onChange={(e) => { checkboxOnChange( e, setPrincMark, princMark);}}
                                onClick={(e) => { checkboxOnChange( e, setPrincMark, princMark);
                                }}
                                defaultChecked={inputs.market === null ? null : 
                                  inputs.market.includes("Aeroespacial" )? true : null}
                            />
                            <span>Aeroespacial</span>
                        </label>
                      </p>

                      <p className="col s12 m3">
                        <label>
                            <input 
                                type="checkbox"  
                                name="market" 
                                value="Agroindustria" 
                                onChange={(e) => { checkboxOnChange( e, setPrincMark, princMark);}}
                                onClick={(e) => { checkboxOnChange( e, setPrincMark, princMark);
                                }}
                                defaultChecked={inputs.market === null ? null : 
                                  inputs.market.includes("Agroindustria" )? true : null}
                            />
                            <span>Agroindustria</span>
                        </label>
                      </p>

                      <p className="col s12 m3">
                        <label>
                            <input 
                                type="checkbox"  
                                name="market" 
                                value="Minero" 
                                onChange={(e) => { checkboxOnChange( e, setPrincMark, princMark);}}
                                onClick={(e) => { checkboxOnChange( e, setPrincMark, princMark);
                                }}
                                defaultChecked={inputs.market === null ? null : 
                                  inputs.market.includes("Minero" )? true : null}
                            />
                            
                            <span>Minero</span>
                        </label>
                      </p>

                      <div className="input-field col s12 m6">
                        <i className="material-icons prefix">construction</i>
                          <input
                            id="othe"
                            name="other"
                            value={inputs.other}
                            type="text"
                            onChange={(e) => onChange(e)}
                            className="materialize-textarea "
                          ></input>
                        <label htmlFor="othe">Otros</label>
                      </div>

                    </div>:null}
                    {isAbleToEdit ? <div className="input-field col s12 m5 center">
                      <button
                        className="btn waves-effect waves-light light-blue darken-4" 
                        type="submit"
                        onClick={onSubmitSave}
                        name="action">
                        <i className="material-icons left">save</i>
                        Guardar
                        
                      </button>
                    </div> : null}
                    { showResults ? <div className="input-field col s12 m5 center">
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
export default EditEncuesta;