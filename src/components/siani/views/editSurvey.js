import React, { useEffect, useState } from "react";
import M from "materialize-css"; 
import { useTranslation } from "react-i18next";
import "../../../../node_modules/materialize-css/dist/css/materialize.min.css";
import { useHistory, Link } from "react-router-dom";
import '../../styles/tabs.css';

//pdf
import { pdf } from '@react-pdf/renderer';
import DocumentoPDF from '../utils/DocumentoPDF';

//Api
import { findN } from "../services/api";
import { findE } from "../services/api";
import { view } from "../services/api";
import { home } from "../services/api";
import { getRoleUser } from "./sideBar";

// Funciones que renderizan el archivo pdf
//===================================================
const saveBlob = (blob, filename) => {
  var a = document.createElement("a");
  document.body.appendChild(a);
  a.style.display = "none";
  let url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
};

export const savePdf = async (document, filename) => {
  saveBlob(await pdf(document).toBlob(), filename);
};
//====================================================
//====================================================

function EditS() {
  const { t, i18n } = useTranslation("logi");

  const [inputs, setInputs] = useState({ title: "" });
  const [datageneral, setdatageneral] = useState({ 
    quiz_id: "",
    user_name: "",
    gen_title: "", 
    gen_company: "", 
    gen_contact: "", 
    gen_tel: "", 
    gen_email: "", 
    gen_years: "", 
    gen_number: "", 
    gen_market: "",
    gen_other: ""
  });

  const [dataReport, setReport] = useState({
    comp_profile: "",
    comp_annual: "",
    comp_rate: "",
    comp_develop: "",
    comp_skill: "",
    comp_plan: "",
    comp_planning: "",
    comp_senior: "",
    comp_financial: "",
    comp_pay: "",
    comp_other: "",

    adv_training: "",
    adv_invest: "",
    adv_investing: "",
    adv_servises: "",
    adv_servisestwo: "",
    adv_outside: "",
    adv_outsidetwo: "",
    adv_certify: "",
    adv_certifytwo: "",
    adv_advice: "",
    adv_advicetwo: "",
    adv_specialty: "",
    adv_specialtytwo: "",
    adv_i_d: "",
    adv_i_dtwo: "",
    adv_lab: "",
    adv_important: "",
    adv_importantwo: "",
    adv_tec: "",
    adv_tectwo: "",
    adv_conacyt: "",
    adv_priority: "",
    adv_prioritytwo: "",

    pro_soft: "",
    pro_indicators: "",
    pro_quality: "",
    pro_qualitytwo: "",
    pro_control: "",
    pro_bottle: "",
    pro_method: "",
    pro_methodtwo: "",
    pro_process: "",
    pro_processtwo: "",
    pro_technical: "",
    pro_plan: "",
    pro_securiry: "",
    pro_learn: "",
    pro_learntwo: "",
    pro_industry: "",
    pro_industrytwo: "",

    mark_capture: "",
    mark_other: "",
    mark_mark: "",
    mark_feedback: "",
    mark_client: "",
    mark_sales: "",
    mark_export: "",

    fut_next: "",
    fut_process: "",
    fut_processtwo: "",
    fut_tool: "",
    fut_select: "",
    fut_selectwo: "",
    fut_learn: "",
    fut_wish: "",
    fut_wishtwo: "",
    fut_item: "",
    fut_itemtwo: "",
    fut_tech: "",
    fut_techtwo: "",

    fort_one: "",
    fort_two: "",
    fort_three: "",
    fort_four: "",
    fort_five: "",
    fort_six: ""
    
  });

  const [searchByCompany,setSearchByCompany] = useState(false);
  const [genReport, setGenReport] = useState(false);
  const [onFindQuiz, setOnFindQuiz] = useState(false);
  const [seeData, setSeeData] = useState(false);
  

  const getRole = async () => {
    try {
      const dataHome = await home();
      console.log(dataHome);

      if(dataHome.user_role==="Admin" || dataHome.user_role==="Master")
      {
        console.log("Es admin!!");
        setSearchByCompany(true);
      }

      M.updateTextFields();
      
    } catch (err) {
      console.error(err.response);
    }
  };

  useEffect( () => {
    M.AutoInit();
    getRole();
    window.scrollTo(0, 0);
  }, []);

  

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  const onSubmitFindName = async () => {
    try {
      const smart = {"gtitle": inputs.title};
      console.log(smart);
      const dataG = await findN(smart);
      console.log(dataG);
      if(dataG.gen_title != undefined){
        setdatageneral(dataG);
        setSeeData(true);
        setOnFindQuiz(false);
      }
      else{
        setOnFindQuiz(true);
      }
    } catch (error) {
        console.log(error)
    }
    
  }

  const onSubmitFindComp = async () => {
    try {
      const smart = {"gname": inputs.title};
      console.log(smart);
      const dataG = await findE(smart);
      if(dataG.gen_title != undefined){
        setdatageneral(dataG);
        setSeeData(true);
        setOnFindQuiz(false);
      }
      else{
        setOnFindQuiz(true);
      }
      console.log(dataG);
      
    } catch (error) {
        console.log(error)
    }
    
    
  }

  const onSubmitView = async () => {
    try {
      const qid = {"qid": datageneral.quiz_id};
      console.log(qid);
      const dataV = await view(qid);
      console.log(dataV);
      setReport(dataV);
    } catch (error) {
        console.log(error)
    }
    //getRole();
    setGenReport(true);
    
  }

  //Generar PDF!
  const onClickGeneratePDF = (event) =>{

    //Ver DocumentPDF.js
    savePdf(<DocumentoPDF
            NomEncuesta={""+datageneral.gen_title}
            NomEmpresa={""+datageneral.gen_name}
            PerContact={""+datageneral.gen_contact}
            Telefono={""+datageneral.gen_tel}
            Correo={""+datageneral.gen_email}
            AnCos={""+datageneral.gen_years}
            NumEmpleados={""+datageneral.gen_number}
            MercadoAt={""+String(datageneral.gen_market)
            .replace("{", "")  
            .replace("}", "")
            .replaceAll('"', "")  }
            Otros={""+datageneral.gen_other}
            InfoOrg1={""+dataReport.comp_profile}
            InfoOrg2={""+dataReport.comp_annual}
            InfoOrg3={""+dataReport.comp_rate}
            InfoOrg4={""+dataReport.comp_develop}
            InfoOrg5={""+dataReport.comp_skill}
            InfoOrg6={""+dataReport.comp_plan}
            InfoOrg7={""+dataReport.comp_planning}
            InfoOrg8={""+dataReport.comp_senior}
            InfoOrg9={""+dataReport.comp_financial}
            InfoOrg10={""+dataReport.comp_pay}
            InfoOrg11={""+dataReport.comp_other}
            AseCap1={""+dataReport.adv_training}
            AseCap2={""+dataReport.adv_invest+", "+dataReport.adv_investing}
            AseCap3={""+String(dataReport.adv_servises)
            .replace("{", "")  
            .replace("}", "")
            .replaceAll('"', "") +", "+dataReport.adv_servisestwo}
            AseCap4={""+dataReport.adv_outside+", "+dataReport.adv_outsidetwo}
            AseCap5={""+dataReport.adv_certify+", "+dataReport.adv_certifytwo}
            AseCap6={""+dataReport.adv_advice+", "+dataReport.adv_advicetwo}
            AseCap7={""+String(dataReport.adv_specialty)
            .replace("{", "")  
            .replace("}", "")
            .replaceAll('"', "") +", "+dataReport.adv_specialtytwo}
            AseCap8={""+dataReport.adv_i_d+", "+dataReport.adv_i_dtwo}
            AseCap9={""+String(dataReport.adv_lab)
            .replace("{", "")  
            .replace("}", "")
            .replaceAll('"', "") }
            AseCap10={""+String(dataReport.adv_important)
            .replace("{", "")  
            .replace("}", "")
            .replaceAll('"', "")  +", "+dataReport.adv_importantwo}
            AseCap11={""+String(dataReport.adv_tec)
            .replace("{", "")  
            .replace("}", "")
            .replaceAll('"', "") +", "+dataReport.adv_tectwo}
            AseCap12={""+dataReport.adv_conacyt}
            AseCap13={""+String(dataReport.adv_priority)
            .replace("{", "")  
            .replace("}", "")
            .replaceAll('"', "")  +", "+dataReport.adv_prioritytwo}
            Proc1={""+String(dataReport.pro_soft)
            .replace("{", "")  
            .replace("}", "")
            .replaceAll('"', "") }
            Proc2={""+dataReport.pro_indicators}
            Proc3={""+dataReport.pro_quality+", "+dataReport.pro_qualitytwo}
            Proc4={""+dataReport.pro_control}
            Proc5={""+String(dataReport.pro_method)
            .replace("{", "")  
            .replace("}", "")
            .replaceAll('"', "")+", "+dataReport.pro_methodtwo}
            Proc6={""+dataReport.pro_bottle}
            Proc7={""+String(dataReport.pro_process)
            .replace("{", "")  
            .replace("}", "")
            .replaceAll('"', "")+", "+dataReport.pro_processtwo}
            Proc8={""+dataReport.pro_technical }
            Proc9={""+dataReport.pro_plan}
            Proc10={""+dataReport.pro_securiry}
            Proc11={""+String(dataReport.pro_learn)
            .replace("{", "")  
            .replace("}", "")
            .replaceAll('"', "") }
            Proc12={""+String(dataReport.pro_industry)
            .replace("{", "")  
            .replace("}", "")
            .replaceAll('"', "") +", "+dataReport.pro_industrytwo}
            MarkVent1={""+String(dataReport.mark_capture)
            .replace("{", "")  
            .replace("}", "")
            .replaceAll('"', "")  }
            MarkVent2={""+dataReport.mark_mark}
            MarkVent3={""+dataReport.mark_feedback}
            MarkVent4={""+dataReport.mark_client}
            MarkVent5={""+dataReport.mark_sales}
            MarkVent6={""+dataReport.mark_export}
            MarkVent7={""+dataReport.mark_other}
            EstFut1={""+dataReport.fut_next+", "+String(dataReport.fut_process)
            .replace("{", "")  
            .replace("}", "")
            .replaceAll('"', "") +", "+dataReport.fut_processtwo}
            EstFut2={""+dataReport.fut_tool+", "+String(dataReport.fut_select)
            .replace("{", "")  
            .replace("}", "")
            .replaceAll('"', "") +", "+dataReport.fut_selectwo}
            EstFut3={""+dataReport.fut_learn+", "+String(dataReport.fut_wish)
            .replace("{", "")  
            .replace("}", "")
            .replaceAll('"', "") +", "+dataReport.fut_wishtwo}
            EstFut4={""+String(dataReport.fut_item)
            .replace("{", "")  
            .replace("}", "")
            .replaceAll('"', "")+", "+dataReport.fut_itemtwo}
            EstFut5={""+String(dataReport.fut_tech)
            .replace("{", "")  
            .replace("}", "")
            .replaceAll('"', "")  +", "+dataReport.fut_techtwo}
            Fort1={""+dataReport.fort_one}
            Fort2={""+dataReport.fort_two}
            Fort3={""+dataReport.fort_three}
            AreaOp1={""+dataReport.fort_four}
            AreaOp2={""+dataReport.fort_five}
            AreaOp3={""+dataReport.fort_five}
            />, "Encuesta-"+datageneral.gen_title+".pdf")
  } 

  return (
    <div>
      <div className="col s12">
        <div className="card">
          <div className="card-action light-blue darken-4 white-text center-align">
            <h5>Reportes</h5>
          </div>
          <div className="card-content">
            <div className="row">

              <div className="card-panel col s12 m5">

                <div className="input-field col s12 m12">
                  <i className="material-icons prefix">search</i>
                    <input
                      id="tit"
                      name="title"
                      value={inputs.title}
                      type="text"
                      onChange={(e) => onChange(e)}
                      className="materialize-textarea "
                    ></input>
                    <label htmlFor="tit">Folio de la Encuesta o Empresa</label>
                </div>

                {onFindQuiz ? <div className="center">
                  <h5 className="red-text text-darken-4">No se encontró la encuesta</h5>
                </div>:null}

                <div className="input-field col s12 m12 left">
                    <button
                        className="btn waves-effect waves-light light-blue darken-4"
                        type="submit"
                        onClick={onSubmitFindName}
                        name="action">
                    Buscar Encuesta
                    <i className="material-icons right">search</i>
                  </button>
                </div>

                {searchByCompany ? <div className="input-field col s12 m12 left">
                    <button
                        className="btn waves-effect waves-light light-blue darken-4"
                        type="submit"
                        onClick={onSubmitFindComp}
                        name="action">
                    Buscar Empresa
                    <i className="material-icons right">saved_search</i>
                  </button>
                </div>: null}

                

                {seeData ? <div className="input-field col s12 m4 left">
                <button
                        className="btn waves-effect waves-light light-blue darken-4"
                        type="submit"
                        onClick={onSubmitView}
                        name="action">
                    Ver
                    <i className="material-icons right">visibility</i>
                  </button>
                </div>: null}

                {genReport ? <div className="input-field col s12 m8 right">
                  <button
                    className="btn waves-effect waves-light light-blue darken-4"
                    type="submit"
                    name="action"
                    onClick={onClickGeneratePDF}
                    >
                    Descargar Reporte
                    <i className="material-icons right">file_download</i>
                  </button>
                </div> : null}
              </div>

              <div className="col s12 m7" style={{ paddingBottom: '30px'}}>

                <div className="input-field col s12 m6">
                  <i className="material-icons prefix">assignment</i>
                  <label htmlFor="user" className="blue-text text-darken-4 name">Folio de la Encuesta</label>
                </div>

                <div className="input-field col s12 m6">
                  <label htmlFor="user" className="black-text name">{datageneral.gen_title}</label>
                </div>

                <div className="input-field col s12 m6">
                  <i className="material-icons prefix">business</i>
                  <label htmlFor="user" className="blue-text text-darken-4 name">Nombre de la Empresa</label>
                </div>

                <div className="input-field col s12 m6">
                  <label htmlFor="user" className="black-text name">{datageneral.gen_name}</label>
                </div>

                <div className="input-field col s12 m6">
                  <i className="material-icons prefix">contact_phone</i>
                  <label htmlFor="pass" className="blue-text text-darken-4 name">Persona de Contacto</label>
                </div>

                <div className="input-field col s12 m6">
                  <label htmlFor="user" className="black-text name">{datageneral.gen_contact}</label>
                </div>

                <div className="input-field col s12 m6">
                  <i className="material-icons prefix">phone</i>
                  <label htmlFor="pass" className="blue-text text-darken-4 name">Teléfono</label>
                </div>

                <div className="input-field col s12 m6">
                  <label htmlFor="user" className="black-text name">{datageneral.gen_tel}</label>
                </div>

                <div className="input-field col s12 m6">
                  <i className="material-icons prefix">alternate_email</i>
                  <label htmlFor="pass" className="blue-text text-darken-4 name">Correo Electrónico</label>
                </div>

                <div className="input-field col s12 m6">
                  <label htmlFor="user" className="black-text name">{datageneral.gen_email}</label>
                </div>

                <div className="input-field col s12 m6">
                  <i className="material-icons prefix">av_timer</i>
                  <label htmlFor="pass" className="blue-text text-darken-4 name">Años de haberse constituido</label>
                </div>

                <div className="input-field col s12 m6">
                  <label htmlFor="user" className="black-text name">{datageneral.gen_years}</label>
                </div>

                <div className="input-field col s12 m6">
                  <i className="material-icons prefix">people</i>
                  <label htmlFor="pass" className="blue-text text-darken-4 name">Número de Empleados</label>
                </div>

                <div className="input-field col s12 m6">
                  <label htmlFor="user" className="black-text name">{datageneral.gen_number}</label>
                </div>

                <div className="input-field col s12 m6">
                    <i className="material-icons prefix">work</i>
                    <label htmlFor="pass" className="blue-text text-darken-4 name">Mercado al que atiende:</label>
                </div>

                <div className="input-field col s12 m6">
                  <label htmlFor="user" className="black-text name">{datageneral.gen_market.toString()
                  .replace("{", "")  
                  .replace("}", "")
                  .replaceAll('"', "") }</label>
                </div>

                <div className="input-field col s12 m6">
                    <i className="material-icons prefix">construction</i>
                    <label htmlFor="pass" className="blue-text text-darken-4 name">Otros</label>
                </div>

                <div className="input-field col s12 m6">
                  <label htmlFor="user" className="black-text name">{datageneral.gen_other}</label>
                </div>

              </div>

              <div className="card-panel col s12 m12 center-align">
                <div className="row">
                  <div className="col s12">
                    <ul className="tabs">
                      <li className="tab col s2">
                        <a href="#test1">Organizacional</a>
                      </li>
                      <li className="tab col s2">
                        <a href="#test2">Asesoría</a>
                      </li>
                      <li className="tab col s2">
                        <a href="#test3">Procesos</a>
                      </li>
                      <li className="tab col s2">
                        <a href="#test4">Marketing</a>
                      </li>
                      <li className="tab col s2">
                        <a href="#test5">Estado futuro</a>
                      </li>
                      <li className="tab col s2">
                        <a href="#test6">Fortalezas</a>
                      </li>
                    </ul>
                  </div>
                  <div id="test1" className="col s12 m12">

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Cuenta con perfiles de puesto?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.comp_profile}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Realiza evaluaciones anuales de desempeño?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.comp_annual}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Mide el indice de rotación de la empresa?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.comp_rate}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Cuenta con un plan de desarrollo para sus empleados?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.comp_develop}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Cuenta con matriz de habilidades?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.comp_skill}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Cuenta con un plan de inducción?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.comp_plan}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Realiza planeación estrategica?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.comp_planning}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">Seleccione la estrategia de la alta gerencia:</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.comp_senior}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Cuáles son los términos de pago que maneja con los clientes? (Días) </label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.comp_pay}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Analiza las razones financieras de su empresa?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.comp_financial}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Otro término de pago que maneje con sus clientes?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.comp_other}</label>
                      </div>

                  </div>

                  <div id="test2" className="col s12 m12">

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Cuenta con un plan de capacitación anual?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.adv_training}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Invierte anualmente en capacitación? (MXN) </label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.adv_invest}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Cuánto?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.adv_investing}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m7">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Áreas de especialidad donde cree conveniente solicitar servicios de capacitación?</label>
                      </div>

                      <div className="input-field col s12 m12 offset-l1">
                        <label htmlFor="user" className="black-text name">{ !(dataReport.adv_servises) === null ?
                                                                            dataReport.adv_servises.toString()
                                                                            .replace("{", "")  
                                                                            .replace("}", "")
                                                                            .replaceAll('"', ""): ""
                                                                          }</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">Otro:</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.adv_servisestwo}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Invierte en capacitaciones fuera del país?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.adv_outside}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Cuáles?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.adv_outsidetwo}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Invierte en certificaciones?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.adv_certify}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Cuáles?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.adv_certifytwo}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Invierte anualmente en asesoría?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.adv_advice}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Cuánto?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.adv_advicetwo}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m9">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿En qué área de especialidad considera una "Asesoría / Consultoría" más apropiada para su empresa?</label>
                      </div>

                      <div className="input-field col s12 m12 offset-l1">
                        <label htmlFor="user" className="black-text name">{!(dataReport.adv_specialty === null) ?
                                                                            dataReport.adv_specialty.toString()
                                                                            .replace("{", "")  
                                                                            .replace("}", "")
                                                                            .replaceAll('"', "") : "" }</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">Otro:</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.adv_specialtytwo}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m9">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Invierte anualmente en desarrollo de productos I+D+i (Investigación, Desarrollo e innovación)?</label>
                      </div>

                      <div className="input-field col s12 m12 offset-l1">
                        <label htmlFor="user" className="black-text name">{dataReport.adv_i_d}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Cuánto?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.adv_i_dtwo}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m9">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Cuál laboratorio considera mas relevante para impulsar el crecimiento de su empresa?</label>
                      </div>

                      <div className="input-field col s12 m12 offset-l1">
                        <label htmlFor="user" className="black-text name">{!(dataReport.adv_lab === null) ? 
                                                                            dataReport.adv_lab.toString()
                                                                            .replace("{", "")  
                                                                            .replace("}", "")
                                                                            .replaceAll('"', "") : "" }</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Cuál de estos aspectos considera importante invertir?</label>
                      </div>

                      <div className="input-field col s12 m12 offset-l1">
                        <label htmlFor="user" className="black-text name">{!(dataReport.adv_important === null) ?
                                                                            dataReport.adv_important.toString()
                                                                            .replace("{", "")  
                                                                            .replace("}", "")
                                                                            .replaceAll('"', ""): "" }</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">Otro:</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.adv_importantwo}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Subcontrata alguno de los siguientes servicios tecnológicos?</label>
                      </div>

                      <div className="input-field col s12 m12 offset-l1">
                        <label htmlFor="user" className="black-text name">{!(dataReport.adv_tec === null) ?
                                                                            dataReport.adv_tec.toString()
                                                                            .replace("{", "")  
                                                                            .replace("}", "")
                                                                            .replaceAll('"', "") : "" }</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">Otro:</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.adv_tectwo}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Tiene interés por los proyectos tecnológicos de CONACyT?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.adv_conacyt}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">De las siguientes opciones, ¿Cuál tiene mayor prioridad en su empresa?</label>
                      </div>

                      <div className="input-field col s12 m12 offset-l1">
                        <label htmlFor="user" className="black-text name">{!(dataReport.adv_priority === null)?
                                                                            dataReport.adv_priority.toString()
                                                                            .replace("{", "")  
                                                                            .replace("}", "")
                                                                            .replaceAll('"', "") : "" }</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">Otro</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.adv_prioritytwo}</label>
                      </div>

                  </div>

                  <div id="test3" className="col s12 m12">

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Utiliza alguna de las siguientes herramientas de software especializado en su empresa?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{!(dataReport.pro_soft === null) ?
                                                                            dataReport.pro_soft.toString()
                                                                            .replace("{", "")  
                                                                            .replace("}", "")
                                                                            .replaceAll('"', ""): "" }</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">Otro:</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.pro_softtwo}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Cuenta con indicadores de desempeño?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.pro_indicators}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Cuenta con un sistema de gestión de calidad?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.pro_quality}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Cuál?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.pro_qualitytwo}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Cuenta con controles de calidad?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.pro_control}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Conoce las restricciones de su proceso de producción 'cuellos de botella'?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.pro_bottle}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Cuáles métodos de inspección de calidad emplea?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{!(dataReport.pro_method === null) ?
                                                                            dataReport.pro_method.toString()
                                                                            .replace("{", "")  
                                                                            .replace("}", "")
                                                                            .replaceAll('"', "") : "" }</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">Otro</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.pro_methodtwo}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Qué procesos y tecnologías utiliza en su empresa?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{!(dataReport.pro_process === null) ?
                                                                            dataReport.pro_process.toString()
                                                                            .replace("{", "")  
                                                                            .replace("}", "")
                                                                            .replaceAll('"', ""): "" }</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">Otro:</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.pro_processtwo}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Utiliza alguna técnica de control de inventarios?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.pro_technical}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Utiliza algún método para planear la producción?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.pro_plan}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Cuenta con un sistema de seguridad industrial?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.pro_securiry}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Emplea alguna herramienta de Lean Manufacturing?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{!(dataReport.pro_learn === null) ?
                                                                            dataReport.pro_learn.toString()
                                                                            .replace("{", "")  
                                                                            .replace("}", "")
                                                                            .replaceAll('"', "") : "" }</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">Otro</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{ dataReport.pro_learntwo }</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Tiene contemplado emplear alguna de las siguientes herramientas de la industria 4.0?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{!(dataReport.pro_industry === null) ?
                                                                            dataReport.pro_industry.toString()
                                                                            .replace("{", "")  
                                                                            .replace("}", "")
                                                                            .replaceAll('"', "") : ""}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">Otro</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.pro_industrytwo}</label>
                      </div>

                  </div>

                  <div id="test4" className="col s12 m12">

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Cómo capta a sus clientes?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{!(dataReport.mark_capture === null) ?
                                                                            dataReport.mark_capture.toString()
                                                                            .replace("{", "")  
                                                                            .replace("}", "")
                                                                            .replaceAll('"', "") : "" }</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">Escriba otra forma</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.mark_other}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Le interesa invertir en una estrategia de marketing?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.mark_mark}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Recibe retroalimentación del cliente?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.mark_feedback}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Mide la satisfacción del cliente?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.mark_client}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Ofrece algún programa de servicio post-venta?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.mark_sales}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Exporta su producto?</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.mark_export}</label>
                      </div>

                  </div>

                  <div id="test5" className="col s12 m12">

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m9">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">En los próximos 3 años, ¿Tiene contemplado invertir en nuevos procesos y/o tecnologías?</label>
                      </div>

                      <div className="input-field col s12 m2">
                        <label htmlFor="user" className="black-text name">{dataReport.fut_next}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m7">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">Seleccione en que procesos desearia invertir:</label>
                      </div>

                      <div className="input-field col s12 m12 offset-l1">
                        <label htmlFor="user" className="black-text name">{!(dataReport.fut_process === null) ?
                                                                            dataReport.fut_process.toString()
                                                                            .replace("{", "")  
                                                                            .replace("}", "")
                                                                            .replaceAll('"', ""): "" }</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">Otro:</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.fut_processtwo}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m9">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">En los próximos 3 años, ¿Tiene contemplado emplear alguna herramientas de la Industria 4.0?</label>
                      </div>

                      <div className="input-field col s12 m2">
                        <label htmlFor="user" className="black-text name">{dataReport.fut_tool}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m7">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">Seleccione en que herramientas de la Industria 4.0 desearia invertir o emplear:</label>
                      </div>

                      <div className="input-field col s12 m12 offset-l1">
                        <label htmlFor="user" className="black-text name">{!(dataReport.fut_select === null) ?
                                                                            dataReport.fut_select.toString()
                                                                            .replace("{", "")  
                                                                            .replace("}", "")
                                                                            .replaceAll('"', ""): "" }</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">Otro:</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.fut_selectwo}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m9">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">En los próximos 3 años, ¿Tiene contemplado emplear alguna herramientas de Lean Manufacturing?</label>
                      </div>

                      <div className="input-field col s12 m2">
                        <label htmlFor="user" className="black-text name">{dataReport.fut_learn}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">Seleccione las herramienta de Lean Manufacturing que desearia emplear:</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{!(dataReport.fut_wish === null) ?
                                                                            dataReport.fut_wish.toString()
                                                                            .replace("{", "")  
                                                                            .replace("}", "")
                                                                            .replaceAll('"', "") : "" }</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">Otro:</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.fut_wishtwo}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m11">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">En los próximos 3 años, ¿Tiene contemplado invertir en alguno de los siguientes servicios de mejora a la organización?</label>
                      </div>

                      <div className="input-field col s12 m12 offset-l1">
                        <label htmlFor="user" className="black-text name">{!(dataReport.fut_item === null) ?
                                                                            dataReport.fut_item.toString()
                                                                            .replace("{", "")  
                                                                            .replace("}", "")
                                                                            .replaceAll('"', "") : null }</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">Otro:</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.fut_itemtwo}</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m11">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">En los próximos 3 años ¿Tiene contemplado subcontratar algúno de los siguientes servicios tecnológicos?</label>
                      </div>

                      <div className="input-field col s12 m12 offset-l1">
                        <label htmlFor="user" className="black-text name">{!(dataReport.fut_tech === null) ?
                                                                            dataReport.fut_tech.toString()
                                                                            .replace("{", "")  
                                                                            .replace("}", "")
                                                                            .replaceAll('"', "") : "" }</label>
                      </div>

                      <div className="input-field col s12 m1">
                        <i className="material-icons prefix">chevron_right</i>
                      </div>

                      <div className="input-field col s12 m6">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">Otros:</label>
                      </div>

                      <div className="input-field col s12 m5">
                        <label htmlFor="user" className="black-text name">{dataReport.fut_techtwo}</label>
                      </div>

                  </div>
                  
                  <div id="test6" className="col s12 m12">

                      <div className="input-field col s12 m12 offset-l1">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">1.-</label>
                      </div>

                      <div className="input-field col s12 m12 offset-l1">
                        <label htmlFor="user" className="black-text name">{dataReport.fort_one}</label>
                      </div>

                      <div className="input-field col s12 m12 offset-l1">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">2.-</label>
                      </div>

                      <div className="input-field col s12 m12 offset-l1">
                        <label htmlFor="user" className="black-text name">{dataReport.fort_two}</label>
                      </div>

                      <div className="input-field col s12 m12 offset-l1">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">3.-</label>
                      </div>

                      <div className="input-field col s12 m12 offset-l1">
                        <label htmlFor="user" className="black-text name">{dataReport.fort_three}</label>
                      </div>

                      <div className="input-field col s12 m12 offset-l1">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">4.-</label>
                      </div>

                      <div className="input-field col s12 m12 offset-l1">
                        <label htmlFor="user" className="black-text name">{dataReport.fort_four}</label>
                      </div>

                      <div className="input-field col s12 m12 offset-l1">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">5.-</label>
                      </div>

                      <div className="input-field col s12 m12 offset-l1">
                        <label htmlFor="user" className="black-text name">{dataReport.fort_five}</label>
                      </div>

                      <div className="input-field col s12 m12 offset-l1">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">6.-</label>
                      </div>

                      <div className="input-field col s12 m12 offset-l1">
                        <label htmlFor="user" className="black-text name">{dataReport.fort_six}</label>
                      </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditS;
