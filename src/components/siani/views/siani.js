import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Render from "../../../images/icons/mini.jpg";
import { authValidation } from "../services/api";

import SideBar from "../views/sideBar";

function Siani(props) {
  let history = useHistory();

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const checkAuthenticated = async () => {
    try {
      const res = await authValidation();
       console.log(res);
      if (!res) {
          history.push("/log");
      }  
    } catch (err) {
      console.log("error en autenticacaion")
      console.log(err.response)
      history.push("/log");
     }
  };
  return (
    <div className="row">
      <div className="col s12 m2">
        <SideBar />
      </div>
      <div className="col s12 m10 ">
        <div className="section">{props.children}</div>
      </div>
    </div>
  );
}
export default Siani;