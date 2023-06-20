import React, { useEffect, useState } from "react";
import M from "materialize-css"; 
import { useTranslation } from "react-i18next";
import "../../../../node_modules/materialize-css/dist/css/materialize.min.css";
import { useHistory, Link } from "react-router-dom";
import '../../styles/tabs.css';


//Api
import { findN } from "../services/api";
import { findE } from "../services/api";
import { view } from "../services/api";

function Review() {
  const { t, i18n } = useTranslation("logi");

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

  useEffect( () => {
    M.AutoInit();
    window.scrollTo(0, 0);
    getData();
  }, []);

  
  const getData = async () => {
    try {
        const smart = {"gtitle": localStorage.getItem('Folio')};
        console.log(smart);
        const dataG = await findN(smart);
        console.log(dataG);
        if(dataG.gen_title != undefined){
          setdatageneral(dataG);
        }
      } catch (error) {
          console.log(error)
      }

      try {
        const qid = {"qid": localStorage.getItem('quizId')};
        console.log(qid);
        const dataV = await view(qid);
        console.log(dataV);
        setReport(dataV);
      } catch (error) {
          console.log(error)
      }
      localStorage.setItem('Folio','');
  }

  return (
    <div>
      <div className="col s12">
        <div className="card">
          <div className="card-action light-blue darken-4 white-text center-align">
            <h5>{"Encuesta "+datageneral.gen_title}</h5>
          </div>
          <div className="card-content">
            <div className="row">

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

                      <div className="input-field col s12 m7">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Utiliza alguna de las siguientes herramientas de software especializado en su empresa?</label>
                      </div>

                      <div className="input-field col s12 m4">
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

                      <div className="input-field col s12 m7">
                        <label htmlFor="pass" className="blue-text text-darken-4 name">¿Tiene contemplado emplear alguna de las siguientes herramientas de la industria 4.0?</label>
                      </div>

                      <div className="input-field col s12 m4">
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
export default Review;
