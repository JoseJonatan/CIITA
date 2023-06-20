import React, { Component } from "react";
import { Link } from "react-router-dom";
import Excel from '../../doc/orden..xlsx';
import Stop from "../../images/covid/stop-2.jpg";
import Care from "../../images/covid/careta.jpg";
import Tape from "../../images/covid/tapete.jpg";
import M from "materialize-css";

export default class Covid extends Component {
  componentDidMount() {
    M.AutoInit();
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className="Covid white" id="proy">
        <div className="container">
          <div className="row">
            <h4 className="center">
              <span className="black-text">
                Careta Protectora y Tapetes Sanitizantes
              </span>
            </h4>

            <div className="col s12 m4 l4 lab">
              <div className="lab">
                <div className="card">
                  <div className="card-image">
                    <img src={Care} alt="Render" className=" responsive-img" />
                    <span className="card-title">Careta Protectora</span>
                    <Link
                      to="#"
                      className="btn-floating activator halfway-fab waves-effect 
                                            waves-light blue darken-4">
                      <i className="material-icons">add</i>
                    </Link>
                  </div>
                  <div className="card-content">
                    <p>
                      VISOR PP/PC - 0.25 <br />
                      (Careta protectora)
                    </p>
                    <p>$48.93 c/u * ** Venta por caja de 50 piezas</p>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-daken 4">
                      Descripción
                      <i className="material-icons right">close</i>
                    </span>
                    <p>
                      Visor (careta protectora) integrada por: Una diadema de
                      polipropileno color gris; Soportes laterales de POM color
                      negro, Liga ajustable en elastómero termoplástico natural.
                      <br />
                      Componentes fabricados por el proceso de inyección,
                      protección lámina de POLICARBONATO con un espesor de 0.25
                      mm con PELÍCULA PROTECTORA POR AMBAS CARAS (calidad óptica
                      alta).
                    </p>
                  </div>
                </div>
              </div>

              <div className="lab">
                <div className="card">
                  <div className="card-image">
                    <img src={Tape} alt="Render" className=" responsive-img" />
                    <span className="card-title">Tapete Sanitizante</span>
                    <Link
                      to="#"
                      className="btn-floating activator halfway-fab waves-effect 
                                            waves-light blue darken-4"
                    >
                      <i className="material-icons">add</i>
                    </Link>
                  </div>
                  <div className="card-content">
                    <p>
                      TAPETE PP/PVC 6040 <br />
                      (Charola rígida)
                    </p>
                    <p>$329.67 c/u * ** Venta por caja de 10 piezas</p>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-daken 4">
                      Descripción
                      <i className="material-icons right">close</i>
                    </span>
                    <p>
                      Tapete sanitizante de calzado; integrado de charola rígida
                      fabricada por el proceso de inyección en material PVC con
                      dimensiones de 605 x 403 x 23 mm, incluye un tapete
                      removible con postes que permite un mojado uniforme y
                      profundo en el calzado, incluye ocho redondos
                      antiderrapantes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col s12 m8">
              <div className="card">
                <div className="card-image">
                  <img src={Stop} alt="Render" className=" responsive-img" />
                </div>
              </div>

              <div className="card-panel cyan lighten-4 black-text center">
                <i className="fas fa-hand-holding-usd fa-3x"></i>
                <h5>Instrucciones de compra</h5>
                <p>
                  <strong>- Descarga el formato de orden de compra.</strong>
                </p>
                <p>
                  - Enviar a los correo electrónicos
                  <strong>nfloress@ipn.mx y aponceg@ipn.mx </strong>
                  la orden de compra, adjuntando datos fiscales en caso de
                  requerir CFDI seleccionando una de las siguientes opciones:
                </p>
                <p>
                  a) Factura con IVA desglosado (los productos vienen
                  detallados)
                  <br />
                  b) Recibo de donativo, no se desglosa IVA, no se detallan los
                  productos – Concepto: Donativo, 100% deducible
                </p>
                <p>
                  - Recibirán confirmación del pedido en 24 horas de lunes a
                  viernes, donde se indicara las cuentas para el pago (es
                  mediante convenio CIE a través de Bancomer, en caso de usar
                  otro banco, favor especificar).
                </p>
                <p>
                  - Enviar el comprobante de pago al correo:
                  <strong>edelatorres@ipn.mx</strong>
                </p>
                <p>
                  - Recibirán su factura y se coloca su pedido informándoles su
                  numero de guía.
                </p>
                <Link
                  to= {Excel} target = "_blank"
                  className="btn btn-waves light-blue darken-4"
                  download="orden.xlsx">
                   Descargar orden de compra
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}
