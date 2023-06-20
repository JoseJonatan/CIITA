import React, { useEffect, useState } from "react";
import M from "materialize-css";
import { useTranslation } from "react-i18next";
import "../../../../node_modules/materialize-css/dist/css/materialize.min.css";
import { useHistory} from "react-router-dom";

//Api
import { home } from "../services/api";

//New API
import {generalPOST,generalPUT} from "../services/api";


function General () {
  
  const { t, i18n } = useTranslation("logi");

  const [princMark, setPrincMark] = useState({});

  const [showBtnSave, setShowBtnSave] = useState({
    p1: false,
    p2: false,
    p3: false
  });

  let history = useHistory();

  const dataUser_ = {
    user_email: "",
    user_id: "",
    user_job: "",
    user_name: "",
    user_role: "",
    user_tel: ""
  };

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
    //Modal for INFO
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {preventScrolling: false});

    //Modal for finish Section
    var elems2 = document.querySelectorAll('#modal2');
    M.Modal.init(elems2, {preventScrolling: false,dismissible: false});
    window.scrollTo(0, 0);

    //Get the User Data
    getData();
    
  }, []);

  //Set the User Data
  const setDataUser = (data) =>
  {
    dataUser_.user_email = data.user_email;
    dataUser_.user_id = data.user_id;
    dataUser_.user_job = data.user_job;
    dataUser_.user_name = data.user_name;
    dataUser_.user_role = data.user_role;
    dataUser_.user_tel = data.user_tel;

    var nomEncue = "";

    //Generate a new Quiz Folio
    if(localStorage.getItem('Folio') != ''){
      nomEncue = localStorage.getItem('Folio');
    }
    else{
      nomEncue = "E-"+makeid(4);
    }

    console.log("titulo: "+inputs.title);

    //Set User data on Inputs for User Visualization
    setInputs({
      title: nomEncue,
      company: dataUser_.user_job,
      contact: dataUser_.user_name,
      tel: dataUser_.user_tel,
      email: dataUser_.user_email,
      user: dataUser_.user_name
    });

    M.updateTextFields();
  };

  //Get Random Chars
  const makeid = (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
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

  //Get the User Data
  const getData = async () => {
    try {
      const datauser = await home();
      console.log("Datos de usuario:");
      console.log(datauser);
      //Set the User Data
      setDataUser(datauser);
      
    } catch (err) {
      console.error(err.response);
    }
  };
  
  const onChange = (e) =>{
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    if(e.target.name === "years"){
      setShowBtnSave({...showBtnSave,
        p1: true
      });
    }
    if(e.target.name === "number"){
      setShowBtnSave({...showBtnSave,
        p2: true
      });
    }
  }
    

  const checkboxOnChange = (e, set, areas) => {
    set({ ...areas, [e.target.value]: e.target.checked });
    if(e.target.checked === true){
        setShowBtnSave({...showBtnSave,
          p3: true

        }); 
      
    }
  };
  
  //When the button Save is pressed
  const onSubmitSave = async () => {
    inputs.market = addArray(princMark);

    if (inputs.title === "" || inputs.company === "" 
    || inputs.contact === "" || inputs.tel === "" 
    || inputs.email === "" || inputs.years === undefined 
    || inputs.number === undefined || inputs.market.length === 0) {
      console.log("llenar campos solicitados");
      M.toast({html: '¡Llenar campos solicitados!'});
    } else {
      if(localStorage.getItem('Folio') != ''){
        try {
          const quizID = localStorage.getItem('quizId')
          await generalPUT(quizID,inputs);
  
          M.toast({html: '¡Guardado Exitoso!'});

        } catch (error) {
          console.log(error);
          console.log(error.response);
          M.toast({html: '¡Fallo en el Guardado!'});
        }
      }
      else{
        try {
          //inputs.user=dataUser_.user_name;
          
          console.log("INPUTS :>");
          console.log(inputs);
  
          //Call New API
          //Method POST is called, building a new Quiz
          const response = await generalPOST(inputs);
  
          //Get the QUIZ ID for save on localStorage
          console.log("Quiz ID: ");
          console.log(response.resultado.company[0].quiz_id);
          localStorage.setItem('quizId', response.resultado.company[0].quiz_id);
  
          //Save the folio for the end
          localStorage.setItem('Folio', inputs.title);
  
          M.toast({html: '¡Guardado Exitoso!'});
  
        } catch (error) {
          console.log(error);
          console.log(error.response);
          M.toast({html: '¡Fallo en el Guardado!'});
        }

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
                    <h5>I. Información General de la Empresa</h5>
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
                      disabled
                      ></input>
                      <label htmlFor="tit">Folio de la Encuesta</label>
                    </div>
                    <div className="col s2" style={{paddingTop: '20px'}}>
                      <a 
                      className="waves-effect waves-light btn modal-trigger light-blue darken-4" 
                      href="#modal1"
                      >
                        <i class="material-icons left">
                        help
                        </i>
                        Info
                      </a>
                    </div>
                      <div id="modal1" className="modal">
                        <div className="modal-content">
                          <h5>¿Qué es el Folio de la Encuesta?</h5>
                          <p>
                            Este es el identificador único para que posteriormente
                            encuentres más facilmente tus resultados.

                          </p>
                        </div>
                        <div className="modal-footer">
                          <a href="#!" className="modal-close waves-effect waves-green btn light-blue darken-4">De acuerdo</a>
                        </div>
                      </div>

                      <div id="modal2" className="modal">
                        <div className="modal-content">
                          <h4>Folio de Encuesta</h4>
                          <p>
                            Su folio de encuesta es: 
                            <br></br>
                            <h5>{inputs.title}</h5>
                            <br></br>
                            Por favor, guarde este folio para encontrar su encuesta posteriormente.
                          </p>
                        </div>
                        <div className="modal-footer">
                          <a 
                            className="modal-close waves-effect waves-blue btn light-blue darken-4"
                            onClick={onSubmitNext}>
                              De acuerdo
                            </a>
                        </div>
                      </div>

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
                      {/*<i className="material-icons prefix">av_timer</i>
                      <input
                      id="year"
                      name="years"
                      value={inputs.years}
                      type="text"
                      onChange={(e) => onChange(e)}
                      className="materialize-textarea "
                      ></input>
                      <label htmlFor="year">Años de haberse constituido</label>*/}
                      <h6>Años de haberse constituido</h6>
                      <p>
                        <label>
                          <input name="years" type="radio" value="Menor a 3 años" onChange={(e) => onChange(e)}/>
                          <span>Menor a 3 años</span>
                        </label>
                      </p>
                      <p>
                        <label>
                          <input name="years" type="radio" value="De 3 a 6 años" onChange={(e) => onChange(e)}/>
                          <span>De 3 a 6 años</span>
                        </label>
                      </p>
                      <p>
                        <label>
                          <input name="years" type="radio" value="De 6 a 10 años" onChange={(e) => onChange(e)}/>
                          <span>De 6 a 10 años</span>
                        </label>
                      </p>
                      <p>
                        <label>
                          <input name="years" type="radio" value="Mayor a 10 años" onChange={(e) => onChange(e)}/>
                          <span>Mayor a 10 años</span>
                        </label>
                      </p>
                    </div>

                    <div className="col s12 m6">
                      {/*<i className="material-icons prefix">people</i>
                      <input
                      id="numb"
                      name="number"
                      value={inputs.number}
                      type="text"
                      onChange={(e) => onChange(e)}
                      className="materialize-textarea "
                      ></input>
                      <label htmlFor="numb">Número de Empleados</label>
                      */}
                      <h6>Número de Empleados</h6>
                      <p>
                        <label>
                          <input name="number" type="radio" value="De 1 a 10" onChange={(e) => onChange(e)}/>
                          <span>De 1 a 10</span>
                        </label>
                      </p>
                      <p>
                        <label>
                          <input name="number" type="radio" value="De 11 a 20" onChange={(e) => onChange(e)}/>
                          <span>De 11 a 20</span>
                        </label>
                      </p>
                      <p>
                        <label>
                          <input name="number" type="radio" value="De 21 a 50" onChange={(e) => onChange(e)}/>
                          <span>De 21 a 50</span>
                        </label>
                      </p>
                      <p>
                        <label>
                          <input name="number" type="radio" value="51 o más" onChange={(e) => onChange(e)}/>
                          <span>51 o más</span>
                        </label>
                      </p>
                      </div>
                  </div>

                    <div className="card-panel col s12 m12 center-align">
                      <p>Mercado principal al que atiende:</p>
                        <br></br>
                      <p className="col s12 m3">
                        <label>
                            <input type="checkbox"  name="market" value="Médico" onChange={(e) => { checkboxOnChange( e, setPrincMark, princMark);}}/>
                            <span>Médico</span>
                        </label>
                      </p>

                      <p className="col s12 m3">
                        <label>
                          <input type="checkbox"  name="market" value="Mecánico" onChange={(e) => { checkboxOnChange( e, setPrincMark, princMark);}}/>
                            <span>Mecánico</span>
                        </label>
                      </p>

                      <p className="col s12 m3">
                        <label>
                            <input type="checkbox"  name="market" value="Automotríz" onChange={(e) => { checkboxOnChange( e, setPrincMark, princMark);}}/>
                            <span>Automotríz</span>
                        </label>
                      </p>

                      <p className="col s12 m3">
                        <label>
                            <input type="checkbox"  name="market" value="Electrónico" onChange={(e) => { checkboxOnChange( e, setPrincMark, princMark);}}/>
                            <span>Electrónico</span>
                        </label>
                      </p>

                      <p className="col s12 m3">
                        <label>
                            <input type="checkbox"  name="market" value="Metalmecánico" onChange={(e) => { checkboxOnChange( e, setPrincMark, princMark);}}/>
                            <span>Metalmecánico</span>
                        </label>
                      </p>

                      <p className="col s12 m3">
                        <label>
                            <input type="checkbox"  name="market" value="Aeroespacial" onChange={(e) => { checkboxOnChange( e, setPrincMark, princMark);}}/>
                            <span>Aeroespacial</span>
                        </label>
                      </p>

                      <p className="col s12 m3">
                        <label>
                            <input type="checkbox"  name="market" value="Agroindustria" onChange={(e) => { checkboxOnChange( e, setPrincMark, princMark);}}/>
                            <span>Agroindustria</span>
                        </label>
                      </p>

                      <p className="col s12 m3">
                        <label>
                            <input type="checkbox"  name="market" value="Minero" onChange={(e) => { checkboxOnChange( e, setPrincMark, princMark);}}/>
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

                    </div>
                    {showBtnSave.p1 && showBtnSave.p2 && showBtnSave.p3 ? <div className="input-field col s12 m5 center">
                      <button
                        className="btn modal-trigger waves-effect waves-light light-blue darken-4" 
                        type="submit"
                        onClick={onSubmitSave}
                        name="action"
                        href="#modal2">
                        <i className="material-icons left">save</i>
                        Guardar
                        
                      </button>
                    </div>:null}
                    
                  </div>
              </div>
            </div>
          </div>
        </div>
    );
}
export default General;