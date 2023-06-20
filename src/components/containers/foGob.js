import React from "react";
import img from "../../images/icons/gobierno-logo.png";

function foGob() {
  return (
    <footer className="page-footer grey lighten-2">
      <div className="container">
        <div className="row">
          <div className="col s12 m6 l3">
            <a href="https://www.gob.mx/" className=" brand-logo    ">
              <img
                className="responsive-img"
                src={img}               
                alt="Página de inicio, Gobierno de México"
              ></img>
            </a>
          </div>
          
          <div className="col s12 m6 l3 black-text">
          <h5>Enlaces</h5>
            <ul>
                <li><a className="black-text" href="http://reformas.gob.mx"  alt="Enlace abre en ventana nueva">Reformas</a></li>
                <li><a className="black-text" href="http://portaltransparencia.gob.mx"    alt="Enlace abre en ventana nueva">Portal de Obligaciones de Transparencia</a></li>
                <li><a className="black-text" href="https://www.infomex.org.mx/gobiernofederal/home.action"   alt="Enlace abre en ventana nueva">Sistema Infomex</a></li>
                <li><a className="black-text" href="http://inicio.ifai.org.mx/SitePages/ifai.aspx"    alt="Enlace abre en ventana nueva">INAI</a></li>
            </ul>
          </div>

          <div className="col s12 m6 l3 black-text">
          <h5>¿Qué es gob.mx?</h5>

            <p>Es el portal único de trámites, información y participación ciudadana. <a  className="black-text text-lighten-3" href="https://www.gob.mx/que-es-gobmx">Leer más</a></p>

            <ul>
                <li><a href="https://www.datos.gob.mx"  className="black-text" >Portal de datos abiertos</a></li>
                <li><a href=" https://www.gob.mx/accesibilidad" className="black-text">Declaración de accesibilidad</a></li>
                <li><a href="https://www.gob.mx/aviso_de_privacidad" className="black-text">Aviso de privacidad integral</a></li>
                <li><a href="https://www.gob.mx/privacidadsimplificado" className="black-text">Aviso de privacidad simplificado</a></li>
                <li><a href="https://www.gob.mx/terminos" className="black-text">Términos y Condiciones</a></li>
                <li><a href="https://www.gob.mx/terminos#medidas-seguridad-informacion" className="black-text">Política de seguridad</a></li>
                <li><a href="https://www.gob.mx/sitemap" className="black-text">Mapa de sitio</a></li>
            </ul>
          </div>

          <div className="col s12 m6 l3">
            <p>
                <a className="black-text text-lighten-3" href="https://www.gob.mx/tramites/ficha/presentacion-de-quejas-y-denuncias-en-la-sfp/SFP54">
                    Denuncia contra servidores públicos
                </a>
            </p>
            <h5 className="black-text">Síguenos en</h5>

<ul className="row">
    <li className="col ">
        <a href="https://www.facebook.com/gobmx"  red="Facebook" title="enlace a facebook abre en una nueva ventana">
        <img alt="Facebook" src="https://framework-gb.cdn.gob.mx/assets/images/facebook_footer.png"/>
        </a>
    </li>
    <li className="col ">
        <a href="https://twitter.com/gobmx" red="Twitter" title="Enlace a twitter abre en una nueva ventana">
        <img alt="Twitter" src="https://framework-gb.cdn.gob.mx/assets/images/twitter_footer.png"/>
        </a>
    </li>
</ul>
         </div>
        </div>
      </div>
    </footer>
  );
}

export default foGob;
