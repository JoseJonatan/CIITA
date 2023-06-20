import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import "../styles/header.css"
import '../../../node_modules/materialize-css/dist/css/materialize.css';
import Render from "../../images/icons/mini.jpg";
import mex from "../../images/icons/mex.png";
import eua from "../../images/icons/eua.png";
import { useTranslation } from 'react-i18next';

const SmoothScroll = () =>{

    const [t, i18n] = useTranslation('navb');

    return(
        <section>
            <div id="navbar">
                <nav className="navBar_">
                    <div className="container-for-navbar">
                    <ul id="dropdown1" className="dropdown-content pink darken-4">
                        <li><Link to="/deve" className="white-text">{t("navbar.local")}</Link></li>
                        <li><Link to="/train" className="white-text">{t("navbar.talent")}</Link></li>
                        <li><Link to="/network" className="white-text">{t("navbar.projects")}</Link></li>
                        <li><Link to="/trans" className="white-text">{t("navbar.transfer")}</Link></li>
                    </ul>
                    <ul id="dropdown2" className="dropdown-content pink darken-4">
                        <li><Link to="/bri" className="white-text">{t("navbar.bri")}</Link></li>
                        <li><Link to="/sus" className="white-text">{t("navbar.sus")}</Link></li>
                        <li><Link to="/uma" className="white-text">{t("navbar.uma")}</Link></li>
                    </ul>
                        <div className="nav-wrapper">
                            <Link to="/" className="brand-logo">CIITA</Link>
                            <Link data-target="mobile-demo" className="sidenav-trigger">    
                                <i className="material-icons">menu</i></Link>
                            <ul className="right hide-on-med-and-down">
                                <li><Link to="/error">{t("navbar.meet")}</Link></li>
                                <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">
                                {t("navbar.business")}<i className="material-icons right">arrow_drop_down</i></a></li>
                                <li><Link to="/lab">{t("navbar.lab")}</Link></li>
                                <li><a className="dropdown-trigger" href="#!" data-target="dropdown2">
                                {t("navbar.sos")}<i className="material-icons right">arrow_drop_down</i></a></li>
                                <li><Link to="/mision-virtual">{t("navbar.mis")}</Link></li>
                                <li><Link to="/advice">{t("navbar.gob")}</Link></li>
                                <li><Link to="/log">SIANI</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <ul className="sidenav" id="mobile-demo">
                <div className="background">
                    <img src={Render} alt="img-nav"/>
                </div>
                <li><Link to="/">{t("navbar.main")}</Link></li>
                <li><Link to="/meet">{t("navbar.meet")}</Link></li>
                <li><Link to="/deve">{t("navbar.local")}</Link></li>
                <li><Link to="/train">{t("navbar.talent")}</Link></li>
                <li><Link to="/network">{t("navbar.projects")}</Link></li>
                <li><Link to="/trans">{t("navbar.transfer")}</Link></li>
                <li><Link to="/lab">{t("navbar.lab")}</Link></li>
                <li><Link to="/bri">{t("navbar.bri")}</Link></li>
                <li><Link to="/sus">{t("navbar.sus")}</Link></li>
                <li><Link to="/uma">{t("navbar.uma")}</Link></li>
                <li><Link to="/advice">{t("navbar.gob")}</Link></li>
                <div className="center-align switch">
                            <p>
                                <label>
                                    <input name="group2" type="radio"
                                        onChange={() => i18n.changeLanguage('es')}/>
                                    <img src={mex} alt="Imgmex" />
                                </label>
                                <label>
                                    <input name="group2" type="radio" 
                                        onChange={() => i18n.changeLanguage('en')}/>
                                    <img src={eua} alt="Imgeua" />
                                </label>
                             </p>
                        </div>
            </ul>
        </section>
    )
}

export default withRouter(SmoothScroll); 