import React, { useEffect } from 'react';
import CIITAIcon from '../Images/ciita_icon.png';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import M from 'materialize-css';

const NavBar = () => {

    useEffect(()=>{
        M.AutoInit();
    },[])
    
    return (
        <div className="navbar-fixed">
            <nav className='grey lighten-5 navBar '>
                <div className="nav-wrapper">
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <a href="/" className="brand-logo">
                        <img src={CIITAIcon} alt='Icon' className="icon"/>
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><HashLink to="/#inicio" className='black-text'>Inicio</HashLink></li>
                        <li><HashLink to="/#quienesomos" className='black-text'>Quienes Somos</HashLink></li>
                        <li><HashLink to="/#objetivos" className='black-text'>Objetivos</HashLink></li>
                        <li><HashLink to="/#proxima" className='black-text'>Proxima Mision</HashLink></li>
                        <li><Link to="/misiones" className='black-text'>Misiones de Negocio</Link></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><HashLink to="/#inicio" className='black-text'>Inicio</HashLink></li>
                <li><HashLink to="/#quienesomos" className='black-text'>Quienes Somos</HashLink></li>
                <li><HashLink to="/#objetivos" className='black-text'>Objetivos</HashLink></li>
                <li><HashLink to="/#proxima" className='black-text'>Proxima Mision</HashLink></li>
                <li><Link to="/misiones" className='black-text'>Misiones de Negocio</Link></li>
            </ul>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </div>
    );
  }
  
  export default NavBar;