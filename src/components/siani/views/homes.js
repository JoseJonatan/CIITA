import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import InfoSIANI from "../../../images/SIANI/siani_infografia.jpg";
import M from 'materialize-css';

import { home } from "../services/api";

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");

  const getProfile = async () => {
    try {
      const dataHome = await home();
      console.log(dataHome.user_name);
      setName(dataHome.user_name);
      //return dataHome;
      //dataUser2 = dataHome;
    } catch (err) {
      console.error(err.response);
    }
  };

  useEffect(() => {
    getProfile();
    window.scrollTo(0, 0);
    M.AutoInit();
  }, []);

  return (
      <div>
        <h4 className="center light-blue-text text-darken-4">¡Bienvenido, {name}!</h4>
        <div className="card">
          <div className="card-content">
            {localStorage.setItem('Folio','')}
              <img className="materialboxed" src={InfoSIANI} width="1080"/>
          </div>
        </div>
      </div>
      
      
  );
};

export default Dashboard;
