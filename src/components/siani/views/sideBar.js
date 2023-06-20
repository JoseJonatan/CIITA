import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../styles/header.css";
import "../../../../node_modules/materialize-css/dist/css/materialize.css";
//Api
import { home } from "../services/api";

const Sidebar = () => {
  const [datauser, setdatauser] = useState({user_name: "", user_email:""})

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, []);

  const getData = async () => {
    try {
      const dataHome = await home();
      console.log(dataHome);
      setdatauser(dataHome);
      //return dataHome;
      //dataUser2 = dataHome;
    } catch (err) {
      console.error(err.response);
    }
  };

  return (
    <>
      <div className="section">
        <div className="section center">
          <a href="#user">
            <img
              alt=" "
              className="circle"
              src={"https://picsum.photos/150/150?random=3"}
            />
          </a>
        </div>
        <div className="center">
          <a href="#name">
            <span className="black-text name center">{datauser.user_name}</span>
          </a>
          <div>
            <a href="#email">
              <span className="black-text email">{datauser.user_email}</span>
            </a>
          </div>
        </div>
        
        <div className="collection" style={{border: 'none'}}>
            <Link to="/sian" className="collapsible-header">
              <i className="material-icons">home</i>
              <span>{"‏‏Inicio‎‏‏‎‎"}</span>
            </Link>
          
            <Link to="/gen" className="collapsible-header">
              <i className="material-icons">playlist_add</i>
              <span>{"‎Nueva encuesta‎‏‏‎‎"}</span>
            </Link>

            <Link to="/edit" className="collapsible-header">
              <i className="material-icons">description</i>
              <span>{"‏‏‎Generar reporte"}</span>
            </Link>

            <Link to="/surv" className="collapsible-header">
              <i className="material-icons">view_list</i>
              <span>{"‏‏‎Encuestas"}</span>
            </Link>

            <Link to="/editEn" className="collapsible-header">
              <i className="material-icons">edit</i>
              <span>{"Editar encuesta"}</span>
            </Link>

            

            <Link to="/perfil" className="collapsible-header">
              <i className="material-icons">person_pin</i>
              <span>{"‏‏‎Editar Usuario"}</span>
            </Link>

            <Link to="/log" className="collapsible-header">
              <i className="tiny material-icons">exit_to_app</i>
              <span>{"Salir‎‏‏‎‎"}</span>
            </Link>

        </div>
      </div>
    </>
  );
};

export default withRouter(Sidebar);
