import M from "materialize-css";
import React, { useEffect, useState } from "react";

//Api
import { home } from "../services/api";
import { generalBusqueda } from "../services/api";

function SurView(){

    const [dataTablesOn, setDataTablesOn] = useState([]);

    let isAdmin_ = false;
    let dataUser_ = {
        isAdmin: false,
        user_name: ""
    }

    let aux = [];
    //let aux0 = [{gen_title: "Hola",gen: "Jajajaja"},{gen_title: "Hola"},{gen_title: "Hola"}];

    useEffect(() => {
        M.AutoInit();
        getDataUser();
        window.scrollTo(0, 0);
    }, []);

    const getDataUser = async () => {
        try {
          const datauser = await home();
          console.log("Datos de usuario:");
          console.log(datauser);
          if(datauser.user_role === "Admin" || datauser.user_role === "Master")
          {
              console.log("Es Admin! :O");
              //setIsAdmin(true);
              isAdmin_ = true;
          }

          dataUser_.user_name = datauser.user_name;
          dataUser_.isAdmin = isAdmin_;

          /*setDataUser({
              isAdmin: isAdmin_,
              user_name: datauser.user_name
          });*/

          getDataTable();
          
        } catch (err) {
          console.error(err.response);
        }
    };

    const getDataTable = async () => {
        try {
            const datatable = await generalBusqueda(dataUser_);
            console.log("Encuestas encontradas: ");
            console.log(datatable);
            setDataTablesOn([...datatable]);
            aux = [...datatable];
            //dataTables_ = [...datatable];
            console.log("Se guardo?");
            console.log(dataTablesOn);

          } catch (err) {
            console.error(err.response);
          }
    }


    return(
        <div className="card">
            <div className="card-action light-blue darken-4 white-text center-align">
              <h5>Encuestas</h5>
            </div>
            <div className="card-content">
                <div className="row">
                    <table>
                        <thead>
                            <tr>
                                <th>Folio</th>
                                <th>Nombre de la Empresa</th>
                                <th>Persona de Contacto</th>
                                <th>Correo</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                dataTablesOn.map((dataTablesOn,index) => (
                                    <tr key={index}>
                                        <td>{dataTablesOn.gen_title}</td>
                                        <td>{dataTablesOn.gen_name}</td>
                                        <td>{dataTablesOn.gen_contact}</td>
                                        <td>{dataTablesOn.gen_email}</td>
                                        <td>{dataTablesOn.gen_fecha.slice(0, 10)}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default SurView;