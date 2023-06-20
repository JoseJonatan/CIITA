import React, { Component, Fragment } from "react";
import M from "materialize-css";

export default class Offer extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <Fragment>
        <section
          id="ofertaOne"
          className="section  blue-grey lighten-4 scrollspy"
        >
          <div className="container">
            <div className="row">
              <h4 className="center">
                <span className="black-text">Oferta Educativa</span>
              </h4>

              <ul className="collection with-header z-depth-4  ">
                <li className="collection-header light-blue darken-3 white-text">
                  <h5>Cursos, Talleres y Diplomados</h5>
                </li>
                <li className="collection-item flow-text">
                  Capacítate con nosotros en las distintas áreas educativas que
                  ofrecemos.
                </li>
                <li className="collection-item ">
                  Nuestra oferta educativa tiene como principal propósito el
                  satisfacer las demandas que actualmente exige la región en
                  cuanto a formación, capacitación y actualización, comprende
                  cursos, talleres y diplomados en diferentes áreas tanto
                  técnicas, especializadas y de softskills, con el objetivo de
                  promover el desarrollo social y económico de la región.
                </li>

                <li className="collection-item">
                  <i className="fas fa-phone"> Contáctanos: (656) 173 5 989</i>
                </li>
                <li className="collection-item center">
                  <a href="#inscripcion">
                    <button
                      href="#inscripcion"
                      className="btn-large waves-effect waves-light  light-blue darken-3"
                    >
                      Proceso de Inscripción
                      <i className="material-icons right ">assignment</i>
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* ------------------------------------Cursos------------------------------------------ */}
        <section className="section  blue-grey lighten-4 scrollspy">
          <div className="container">
            <div className="row">
              <div className="collection   z-depth-3   ">
                <li className="white-text collection-item light-blue darken-3 flow-text">
                  Oferta de Educación para la Vida (Cursos Presenciales)
                </li>
                <a
                  href="#modal1"
                  className="collection-item blue-text  modal-trigger"
                >
                  <i className="material-icons  left">assignment</i>
                  JavaScript
                </a>
                <a
                  href="#modal2"
                  className="collection-item blue-text modal-trigger"
                >
                  <i className="material-icons  left">assignment</i>
                  Control Estadístico de Procesos SPC
                </a>
                <a
                  href="#modal3"
                  className="collection-item blue-text modal-trigger"
                >
                  <i className="material-icons  left">assignment</i>
                  Dimensiones y Tolerancias Geométricas GD&T
                </a>
                <a
                  href="#modal4"
                  className="collection-item blue-text modal-trigger"
                >
                  <i className="material-icons  left">assignment</i>
                  Estadística Básica BST
                </a>
                <a
                  href="#modal5"
                  className="collection-item blue-text modal-trigger"
                >
                  <i className="material-icons  left">assignment</i>
                  Teoría de Control de Procesos
                </a>
                <a
                  href="#modal6"
                  className="collection-item blue-text modal-trigger"
                >
                  <i className="material-icons  left">assignment</i>
                  Análisis del Modo y Efecto de Fallas FMEA{" "}
                </a>
                <a
                  href="#modal7"
                  className="collection-item blue-text modal-trigger"
                >
                  <i className="material-icons  left">assignment</i>
                  Manufactura Esbelta
                </a>
                <a
                  href="#modal8"
                  className="collection-item blue-text modal-trigger"
                >
                  <i className="material-icons  left">assignment</i>
                  Hypothesis Testings
                </a>
                <a
                  href="#modal9"
                  className="collection-item blue-text modal-trigger"
                >
                  <i className="material-icons  left">assignment</i>
                  Calidad en el Servicios
                </a>
                <a
                  href="#modal10"
                  className="collection-item blue-text modal-trigger "
                >
                  <i className="material-icons  left">assignment</i>
                  Inteligencia Emocionals
                </a>
                <li className="white-text collection-item light-blue darken-3 flow-text">
                  Cursos de Inglés
                </li>
                <a
                  href="#modal11"
                  className="collection-item blue-text modal-trigger "
                >
                  <i className="material-icons  left">language</i>
                  Inglés (Nivel Básico)
                </a>
                <a
                  href="#modal12"
                  className="collection-item blue-text modal-trigger "
                >
                  <i className="material-icons  left">language</i>
                  Inglés (Nivel Intermedio)
                </a>
                <a
                  href="#modal13"
                  className="collection-item blue-text  modal-trigger"
                >
                  <i className="material-icons  left">language</i>
                  Inglés (Nivel Avanzado)
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* ------------------------------------Inscripción----------------------------------------- */}
        <section
          id="inscripcion"
          className="section blue-grey lighten-4  scrollspy"
        >
          <div className="container">
            <div className="row">
              <h4 className="center">
                <span className="black-text ">Proceso de Inscripción</span>
              </h4>
              <div className="collection  z-depth-3  ">
                <li className="collection-item light-blue darken-3 white-text center flow-text">
                  Información que debe considerar para su inscripción
                </li>
                <li className="collection-item">
                  Para obtener un pre-registro al curso de su interés tendrá que
                  hacerlo por correo electrónico o presencial en nuestras &nbsp;
                  instalaciones, con al menos dos semanas previo a la fecha
                  establecida de inicio, a fin de indicarle el proceso de
                  inscripción con las fechas y los horarios del proceso hasta
                  concluir su trámite.
                </li>
                <li className="collection-item">
                  Los pagos de inscripción son por cantidades exactas, no se
                  aceptarán parcialidades, es decir no debe presentar dos
                  comprobantes de pago con fechas diferentes.
                </li>
                <li className="collection-item">
                  No se aceptan cheques ni pagos en efectivo.
                </li>
                <li className="collection-item">
                  Los egresados politécnicos pagarán el precio "comunidad",
                  siendo obligatorio presentar su credencial de EGRESADO (en
                  original y copia), expedida por la DESS - Dirección de
                  Egresado y Servicio Social. Consultar el trámite en la
                  página www.egresados.ipn.mx.
                </li>
                <li className="collection-item">
                  Los alumnos IPN podrán aplicar el descuento de "comunidad",
                  presentando su credencial de alumno vigente y con resello.
                </li>
                <li className="collection-item">
                  Es importante que una vez que realice el pago deberá acudir a
                  las instalaciones del CIITA, y avisar al personal del
                  "Departamento de Servicios Educativos". Para dar continuidad
                  con el trámite de Inscripción.
                </li>
                <li className="collection-item">
                  Los cursos están sujetos a un cupo limitado. El CIITA se
                  reserva el derecho de reprogramar aquellos servicios que no
                  reúnan el cupo mínimo necesario.
                </li>
                <li className="collection-item">
                  La facturación se hará en el momento del pago de inscripción
                  presentando el original en la ventanilla de caja de lunes a
                  viernes en el horario establecido.
                </li>
                <li className="collection-item">
                  Es importante que presente su recibo de inscripción y una
                  identificación vigente para permitirle el acceso vehicular y
                  peatonal a las instalaciones de este Centro.
                </li>
                <li className="collection-item light-blue darken-3 white-text center flow-text">
                  Notas Importantes
                </li>
                <li className="collection-item">
                  Debido a las políticas de acceso de seguridad a nuestras
                  instalaciones, es importante que presente una copia de su
                  recibo de pago vigente.
                </li>
                <li className="collection-item">
                  El horario para atenderle es de lunes a viernes en un horario
                  de 8:30 a 16:00 horas.
                </li>
                <li className="collection-item">
                  Todos los cursos están sujetos a un cupo limitado. Por lo que
                  este departamento se reserva el derecho de cancelar un curso
                  considerando la demanda de los usuarios con un día de
                  anticipación.
                </li>
                <li className="collection-item">
                  El interesado deberá respetar las fechas del pago de su
                  inscripción y el procedimiento indicado por correo
                  electrónico.
                </li>
                <li className="collection-item">
                  No se harán devoluciones si el curso ya inicio. Cualquier
                  solicitud de devolución se deberá de realizar dentro del mismo
                  mes en que se haya efectuado el pago de inscripción del curso.
                </li>
                <li className="collection-item">
                  No se reciben pagos en nuestras instalaciones.
                </li>
                <li className="collection-item">
                  No se reservan los lugares por teléfono, es importante
                  concluir el trámite de inscripción.
                </li>
                <li className="collection-item">
                  En caso de no poder asistir a realizar su trámite de
                  inscripción, podrá realizarlo a través de una persona de su
                  confianza.s
                </li>
                <li className="collection-item light-blue darken-3 white-text center flow-text">
                  Constancias
                </li>
                <li className="collection-item">
                  Para ser acreedor a su constancia del curso deberá cumplir con
                  el 80% de asistencia y calificación mínima de 8.00. <br />
                  La constancia se entrega el ultimo día de asistencia al curso.
                </li>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------Modales------------------------------------------ */}
        <div id="modal1" className="modal  ">
          <div className="modal-content">
            {/* <nav>
              <div className="nav-wrapper light-blue darken-3 ">
                <div className="col s12">
                  <a href="#!" className="breadcrumb">
                    Oferta Educativa
                  </a>
                  <a href="#!" className="breadcrumb">
                    Presencial
                  </a>
                  <a href="#!" className="breadcrumb">
                    Javascript
                  </a>
                </div>
              </div>
            </nav> */}
            <ul>
              <li className="white-text  light-blue darken-3 flow-text center">
                JavaScript
              </li>
              <li className=" light-blue-text text-darken-3">
                Competencia General:
              </li>
              <li className=" ">
                Desarrollar aplicaciones en JavaScript que permitan ampliar la
                funcionalidad e interactividad de las páginas web. Poder
                rastrear las modificaciones realizadas en la programación
                JavaScript
              </li>
              <li className="divider "></li>
              <li className="  light-blue-text text-darken-3  ">Temas: </li>
              <li className=" ">
                1. JavaScript – Fundamentos <br />
                2. Objetos en JavaScript <br />
                3. Tipos de datos en JavaScript <br />
                4. JavaScript avanzado <br />
                5. Aspectos adicionales de JavaScript <br />
                Duración : 20 horas
              </li>
              <li className="divider"></li>
              <li className=" light-blue-text text-darken-3  ">Dirigido a: </li>
              <li className=" ">
                Este curso está dirigido a personal de programación de
                aplicaciones Web como Profesionistas en áreas de sistemas e
                informática, dedicados al desarrollo de aplicaciones Web,
                Personas que trabajen en área de sistemas y desarrollo de
                páginas Web, Desarrolladores de aplicaciones Web, programadores
                de aplicaciones y Desarrolladores de aplicaciones
              </li>
              <li className=" light-blue-text text-darken-3">Requisitos:</li>
              <li className=" ">
                El participante deberá contar con estudios mínimos de desarrollo
                de aplicaciones, conocer al menos un lenguaje de programación.
                Debe tener conocimiento de lenguajes de programación orientado a
                objetos, manejo de clases, métodos, atributos. Conocimiento
                básico de aplicaciones Web, HTML.
              </li>
            </ul>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">
              Cerrar
            </a>
          </div>
        </div>
        <div id="modal2" className="modal  ">
          <div className="modal-content">
            <ul>
              <li className="white-text  light-blue darken-3 flow-text center">
                Control Estadístico de Procesos SPC
              </li>
              <li className=" light-blue-text text-darken-3">
                Competencia General:
              </li>
              <li className=" ">
                Implantar cartas de control describiendo los aspectos relevantes
                de un proceso para aplicarlas en la prevención de errores y
                defectos fundamentados en la mejora continua de calidad. de un
                proceso para aplicarlas en la prevención de errores y defectos
                fundamentados en la mejora continua de calidad.
              </li>
              <li className="divider"></li>
              <li className="  light-blue-text text-darken-3  ">Temas: </li>
              <li className=" ">
                1. Control Estadístico de Procesos SPC <br />
                2. SPC para datos variables <br />
                3. Cartas para datos de atributos <br />
                Duración : 16 horas
              </li>
              <li className="divider"></li>
              <li className=" light-blue-text text-darken-3  ">Dirigido a: </li>
              <li className=" ">
                Personal a cargo de la implantación de la metodología del
                control estadístico del proceso, para monitoreo de los procesos
                y reducción de su variabilidad, así como personal involucrado e
                interesado en la aplicación de esta metodología de mejora
                continua en las empresas.
              </li>
              <li className=" light-blue-text text-darken-3">Requisitos:</li>
              <li className=" ">
                El participante deberá contar con estudios mínimos de nivel
                medio superior o de licenciatura en las ramas de Ingeniería, o
                áreas afines, por ejemplo (pero no limitado a): administración
                de empresas, ingeniería industrial en cualquier especialidad,
                ténicos, o carreras relacionadas con el área de producción para
                la mejora y/o diseño en los procesos.
              </li>
            </ul>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">
              Cerrar
            </a>
          </div>
        </div>
        <div id="modal3" className="modal  ">
          <div className="modal-content">
            <ul>
              <li className="white-text  light-blue darken-3 flow-text center">
                Dimensiones y Tolerancias Geométricas GD&T
              </li>
              <li className=" light-blue-text text-darken-3">
                Competencia General:
              </li>
              <li className=" ">
                Reconocer el sistema de Tolerancias Dimensionales y Geométricas
                (GD&T) para aplicar de forma correcta la inspección de piezas y
                tener la capacidad de elaborar patrones Go-No-Go, de acuerdo a
                los estándares establecidos para la industria maquiladora
              </li>
              <li className="divider"></li>
              <li className="  light-blue-text text-darken-3  ">Temas: </li>
              <li className=" ">
                1. Introducción <br />
                2. Definiciones <br />
                &nbsp; &nbsp; 2.1 La norma ASME Y 14.5 - 2009
                <br />
                &nbsp; &nbsp; 2.2 El plano de Ingeniería <br />
                &nbsp; &nbsp; 2.3 Principios de dimensionamiento <br />
                3. Tolerancias dimensionales <br />
                4. Ajustes <br />
                5. Tolerancias geométricas
                <br />
                &nbsp; &nbsp; 5.1 Simbología en GD & T <br />
                &nbsp; &nbsp; 5.2 Elementos geométricos <br />
                &nbsp; &nbsp; 5.3 Modificadores <br />
                &nbsp; &nbsp; 5.4 Cuadro de control de rasgos <br />
                &nbsp; &nbsp; 5.5 Requisitos de Material Máximo y Mínimo <br />
                &nbsp; &nbsp; 5.6 Sistemas de referencia (Datums) <br />
                6. Tolerancias geométricas de forma <br />
                &nbsp; &nbsp;6.1 Rectitud <br />
                &nbsp; &nbsp;6.2 Redondez <br />
                &nbsp; &nbsp;6.3 Planitud <br />
                &nbsp; &nbsp;6.4 Cilindricidad <br />
                7. Tolerancias geométricas de orientación <br />
                &nbsp; &nbsp;7.1 Paralelismo <br />
                &nbsp; &nbsp;7.2 Perpendicularidad <br />
                &nbsp; &nbsp;7.3 Angularidad <br />
                8. Tolerancias geométricas de perfil <br />
                &nbsp; &nbsp;8.1 Perfil de una línea <br />
                &nbsp; &nbsp;8.2 Perfil de una superficie v9. Tolerancias
                geométricas de localización <br />
                &nbsp; &nbsp;9.1 Simetría <br />
                &nbsp; &nbsp;9.2 Concentricidad <br />
                &nbsp; &nbsp;9.3 Posición real <br />
                10. Tolerancias geométricas de cabeceo 10.1Cabeceo circular{" "}
                <br />
                &nbsp; &nbsp;10.2 Cabeceo total <br />
                11. Aplicaciones prácticas <br />
                &nbsp; &nbsp;11.1Método para determinar si la pieza es
                conformante <br />
                &nbsp; &nbsp;11.2 Bonus y Datum shift <br />
                &nbsp; &nbsp;11.3 Intensión de diseño <br />
                &nbsp; &nbsp;11.4 Métodos de medición para cada control <br />
                &nbsp; &nbsp;11.5 Interpretación de planos – casos prácticos
                <br />
                Duración : 16 horas
              </li>
              <li className="divider"></li>
              <li className=" light-blue-text text-darken-3  ">Dirigido a: </li>
              <li className=" ">
                Ingenieros de diseño, Ingenieros de manufactura, supervisores de
                línea, Inspectores, dibujantes, metrologístas, personal con
                necesidad de leer e interpretar dibujos con tolerancias
                geométricas, asi como las que laboran en control de calidad,
                operadores de maquinas -herramientas y supervisores en general y
                al público en general interesado
              </li>
              <li className=" light-blue-text text-darken-3">Requisitos:</li>
              <li className=" ">
                Contar con estudios mínimos de bachillerato y conocimientos de
                Dibujo técnico.
              </li>
            </ul>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">
              Cerrar
            </a>
          </div>
        </div>
        <div id="modal4" className="modal  ">
          <div className="modal-content">
            <ul>
              <li className="white-text  light-blue darken-3 flow-text center">
                Estadística Básica BST
              </li>
              <li className=" light-blue-text text-darken-3">
                Competencia General:
              </li>
              <li className=" ">
                Aplicar la recolección, organización, interpretación y
                presentación de los datos estadísticos, de manera acertada y
                rápida para la solución de problemas, que contribuya a una toma
                de decisiones basadas en datos con fundamentos en las
                herramientas estadísticas básicas.
              </li>
              <li className="divider"></li>
              <li className="  light-blue-text text-darken-3  ">Temas: </li>
              <li className=" ">
                1.- Introducción al proceso de análisis estadístico <br />
                2.- Organización y tabulación de los datos. <br />
                3.-Medidas de centralidad de localización no central de
                disperción <br />
                4.- Distribución normal <br />
                5.-Presentación gráfica de los datos . <br />
                Duración : 16 horas
              </li>
              <li className="divider"></li>
              <li className=" light-blue-text text-darken-3  ">Dirigido a: </li>
              <li className=" ">
                Gerentes de operaciones,Ing de calidad, Ing. de pruebas, Ing de
                manufactura,Ing Industrales o personal que esté relacionado con
                el área de producción par el diseño y/o mejora de los procesos.
              </li>
              <li className=" light-blue-text text-darken-3">Requisitos:</li>
              <li className=" ">
                El participante deberá contar con estudios mínimos de nivel
                superior.
              </li>
            </ul>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">
              Cerrar
            </a>
          </div>
        </div>
        <div id="modal5" className="modal  ">
          <div className="modal-content">
            <ul>
              <li className="white-text  light-blue darken-3 flow-text center">
                Teoría de Control de Procesos
              </li>
              <li className=" light-blue-text text-darken-3">
                Competencia General:
              </li>
              <li className=" ">
                Conocimiento, aplicación y utilización de los conceptos
                involucrados en la “teoría de control de proceso” incluidos:
                estadística descriptiva e inferencial, control y capacidad de
                proceso; al mismo tiempo que se desarrollan habilidades de
                trabajo en equipo, uso y manejo de software especializado para
                toma de decisiones y la necesidad constante de aprender por
                cuenta propia.
              </li>
              <li className="divider"></li>
              <li className="  light-blue-text text-darken-3  ">Temas: </li>
              <li className=" ">
                1-. Estadística básica para el control de procesos <br />
                2.- Gráficos de control estadístico de procesos <br />
                3.-Estudios de capacidad del proceso <br />
                Duración : 8 horas
              </li>
              <li className="divider"></li>
              <li className=" light-blue-text text-darken-3  ">Dirigido a: </li>
              <li className=" ">
                Este curso está dirigido a cualquier personal que esté dentro de
                las siguientes categorías: A cargo de la implementación de la
                metodología del control estadístico del proceso. Monitoreo de
                los procesos y reducción de su variabilidad. Interesado en la
                aplicación de la teoría de control de procesos en proyectos de
                mejora continua.
              </li>
              <li className=" light-blue-text text-darken-3">Requisitos:</li>
              <li className=" ">
                El participante deberá contar con estudios mínimos de nivel
                medio superior o de licenciatura en las ramas de Ingeniería, o
                áreas afines, por ejemplo (pero no limitado a): administración
                de empresas, ingeniería industrial en cualquier especialidad,
                ténicos, o carreras relacionadas con el área de producción para
                la mejora y/o diseño en los procesos.
              </li>
            </ul>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">
              Cerrar
            </a>
          </div>
        </div>
        <div id="modal6" className="modal  ">
          <div className="modal-content">
            <ul>
              <li className="white-text  light-blue darken-3 flow-text center">
                Análisis del Modo y Efecto de Fallas FMEA
              </li>
              <li className=" light-blue-text text-darken-3">
                Competencia General:
              </li>
              <li className=" ">
                Las competencias a desarrollar a través de las dinámicas
                diseñadas para este curso es trabajo en equipo, así como la
                necesidad constante de seguir aprendiendo por su cuenta para
                mantenerse actualizado en los temas indicados. Como resultado de
                este curso se espera que el asistente tenga la habilidad de
                conocer los conceptos indicados y además que sea capaz de
                aplicarlos utilizando una metodología estructurada para
                reconocer y/o identificar las fallas potenciales de un proceso o
                diseño de un producto, y la importancia de hacerlo en la
                planificación (antes que éstas ocurran) con el propósito de
                eliminarlas o de minimizar el riesgo asociado a las mismas.
              </li>
              <li className="divider"></li>
              <li className="  light-blue-text text-darken-3  ">Temas: </li>
              <li className=" ">
                1. AMEF/PFMEA – Análisis de Modo y Efecto de la Falla de Proceso
                <br />
                2. Conceptos y definiciones <br />
                3. Estimación y análisis de riesgo
                <br />
                4. Características especiales de producto / proceso
                <br />
                Duración : 16 horas
              </li>
              <li className="divider"></li>
              <li className=" light-blue-text text-darken-3  ">Dirigido a: </li>
              <li className=" ">
                Profesionistas en áreas de calidad, manufactura, diseño,
                ingeniería, nuevos productos, compras, de empresas
                pertenecientes a la cadena de suministro automotriz y
                aeroespacial. Personas que trabajen en área de calidad,
                producción, mantenimiento y manufactura en cualquier tipo de
                industria. Coordinadores internos del sistema de calidad ISO
                9000, ISO/TS 9000, etc. Profesionistas interesados en
                metodologías y herramientas actuales para el desarrollo del
                sistema de calidad
              </li>
              <li className=" light-blue-text text-darken-3">Requisitos:</li>
              <li className=" ">
                El participante deberá contar con estudios mínimos de nivel
                medio superior o de licenciatura en las ramas de Ingeniería, o
                áreas afines, por ejemplo (pero no limitado a): administración
                de empresas, ingeniería industrial en cualquier especialidad,
                ténicos, o carreras relacionadas con el área de producción para
                la mejora y/o diseño en los procesos.
              </li>
            </ul>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">
              Cerrar
            </a>
          </div>
        </div>
        <div id="modal7" className="modal  ">
          <div className="modal-content">
            <ul>
              <li className="white-text  light-blue darken-3 flow-text center">
                Manufactura Esbelta
              </li>
              <li className=" light-blue-text text-darken-3">
                Competencia General:
              </li>
              <li className=" ">
                Reconocer el sistema de manufactura esbeltabasad en la
                eliminación planeada de cuaqluier tipo de desperdicio, mejora
                continua y beneficio consistente de la productividad y calidad.
              </li>
              <li className="divider"></li>
              <li className="  light-blue-text text-darken-3  ">Temas: </li>
              <li className=" ">
                1.-Culture Change v2.- Visual systems <br />
                3. 5s <br />
                4. TPM I <br />
                5. Skill Matrix I <br />
                6. Siete desperdicios +1
                <br />
                Duración : 8 horas
              </li>
              <li className="divider"></li>
              <li className=" light-blue-text text-darken-3  ">Dirigido a: </li>
              <li className=" ">
                Dirigido a la estructura organizacional: Directivos,
                gerentes,mandos intermedios, personal operativo, servicios de
                apoyo.
              </li>
              <li className=" light-blue-text text-darken-3">Requisitos:</li>
              <li className=" ">
                Estudios básicos de primaria y experiencia mínima laboral
                abierta a cualquier ramo de la industria y comercio.
              </li>
            </ul>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">
              Cerrar
            </a>
          </div>
        </div>
        <div id="modal8" className="modal  ">
          <div className="modal-content">
            <ul>
              <li className="white-text  light-blue darken-3 flow-text center">
                Hypothesis Testing
              </li>
              <li className=" light-blue-text text-darken-3">
                Competencia General:
              </li>
              <li className=" ">
                La aplicación correcta del procedimiento sistemático prueba de
                hipótesis en la solución de problemas que enfrentan las
                organizaciones en cada uno de los diefrentes procesos
                involucrados en la producción de bienes y servicios,
                contribuyendo a mejorar la toma de decisiones, fortaleciendo el
                aspecto cuantitativo, contribuyendo a la mejora contínua.
              </li>
              <li className="divider"></li>
              <li className="  light-blue-text text-darken-3  ">Temas: </li>
              <li className=" ">
                1. Antecedentes <br />
                2. Premisas e hipótesis <br />
                3. Pruebas para la media
                <br />
                4. Valor de p <br />
                5. pruebas de u para muestras pequeñas <br />
                6. Paruebas para la proporción <br />
                7. Pruebas para dos poblaciones <br />
                8. Comparación de la varianza de dos poblaciones normales
                <br />
                Duración : 8 horas
              </li>
              <li className="divider"></li>
              <li className=" light-blue-text text-darken-3">Requisitos:</li>
              <li className=" ">Ninguno</li>
            </ul>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">
              Cerrar
            </a>
          </div>
        </div>
        <div id="modal9" className="modal  ">
          <div className="modal-content">
            <ul>
              <li className="white-text  light-blue darken-3 flow-text center">
                Calidad en el Servicio
              </li>
              <li className=" light-blue-text text-darken-3">
                Competencia General:
              </li>
              <li className=" ">
                Proporcionar a los usuarios los conceptos básicos para lograr
                que la atención y el servicio que se brinda a los clientes sea
                de calidad excelente.
              </li>
              <li className="divider"></li>
              <li className="  light-blue-text text-darken-3  ">Temas: </li>
              <li className=" ">
                1. Las instituciones y el desarrollo organizacional <br />
                2. Los servicios y la calidad. <br />
                3. ¿Qué es para ti el servicio? <br />
                4. ¿Qué tipo de servicio ofrezco? <br />
                5. Ciclo de servicio <br />
                6. Actitud en el servicio 6.1 Técnica de actitud al usuario 6.2
                Técnica para para evitar el agotamiento <br />
                7. Satisfacción de mi cliente <br />
                8. Personas difíciles
                <br />
                Duración : 20 horas
              </li>
              <li className="divider"></li>
              <li className=" light-blue-text text-darken-3  ">Dirigido a: </li>
              <li className=" ">
                Todo el personal de organizaciones del sector público o privado
                que tenga como meta la plena satisfacción de sus clientes
                (externos e internos).
              </li>
              <li className=" light-blue-text text-darken-3">Requisitos:</li>
              <li className=" ">Ninguno</li>
            </ul>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">
              Cerrar
            </a>
          </div>
        </div>
        <div id="modal10" className="modal  ">
          <div className="modal-content">
            <ul>
              <li className="white-text  light-blue darken-3 flow-text center">
                Inteligencia Emocional
              </li>
              <li className=" light-blue-text text-darken-3">
                Competencia General:
              </li>
              <li className=" ">
                Aplicar el concepto de inteligencia emocional para entender las
                dificultades de maduración en las diferentes áreas de sí mismo o
                de otras personas y contar con el conocimiento de algunas
                herramientas que le permitan al participante modificar o
                revertir tales dificultades.
              </li>
              <li className="divider"></li>
              <li className="  light-blue-text text-darken-3  ">Temas: </li>
              <li className=" ">
                1.-Fundamentos el ser humano desde una perspectiva
                holístico-cuántica <br />
                2.- La inteligencia emocional
                <br />
                3.-Autoconocimiento <br />
                4.-Area 2 de la IE Auto-control <br />
                5.-Area 3 Auto-motivación <br />
                6.-La conexión emocional con los otros <br />
                7.- Las relaciones sociales e inteligencia social.
                <br />
                Duración : 8 horas
              </li>
              <li className="divider"></li>
              <li className=" light-blue-text text-darken-3  ">Dirigido a: </li>
              <li className=" ">
                Dirigido a todas a quellas personas que deseen lograr un mayor
                conocimiento y control emocional de sí mismo. Todos aquellos que
                buscan mejorar sus relaciones familiares, de amistas, laborales
                y por ende, maximizar su eficiencia en sus relaciones y en el
                trabajo. Todas aquéllas personas que deseen incrementar sus
                habilidades para enfrentar con éxito las dificultades de un
                entorno social cada vez más complejo y retador.
              </li>
              <li className=" light-blue-text text-darken-3">Requisitos:</li>
              <li className=" ">
                El participante deberá contar con estudios mínimos de
                preparatoría o licenciatura
              </li>
            </ul>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">
              Cerrar
            </a>
          </div>
        </div>
        <div id="modal11" className="modal  ">
          <div className="modal-content">
            <ul>
              <li className="white-text  light-blue darken-3 flow-text center">
                Inglés (Nivel Básico)
              </li>
              <li className=" light-blue-text text-darken-3">
                Competencia General:
              </li>
              <li className=" ">
                El objetivo del programa es formar alumnos que alcancen el
                dominio práctico del idioma, que les permita comprender
                situaciones cotidianas y a su vez, poder expresarse de manera
                fluida.
              </li>
              <li className="divider"></li>
              <li className="  light-blue-text text-darken-3  ">Duración: </li>
              <li className=" ">5 Módulos de 40 horas cada uno</li>
              <li className="divider"></li>
              <li className=" light-blue-text text-darken-3  ">Dirigido a: </li>
              <li className=" ">Público en General</li>
              <li className=" light-blue-text text-darken-3">Requisitos:</li>
              <li className=" ">Ninguno</li>
            </ul>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">
              Cerrar
            </a>
          </div>
        </div>
        <div id="modal12" className="modal  ">
          <div className="modal-content">
            <ul>
              <li className="white-text  light-blue darken-3 flow-text center">
                Inglés (Nivel Intermedio)
              </li>
              <li className=" light-blue-text text-darken-3">
                Competencia General:
              </li>
              <li className=" ">
                El objetivo del programa es formar alumnos que alcancen el
                dominio práctico del idioma, que les permita comprender
                situaciones cotidianas y a su vez, poder expresarse de manera
                fluida.
              </li>
              <li className="divider"></li>
              <li className="  light-blue-text text-darken-3  ">Duración: </li>
              <li className=" ">5 Módulos de 40 horas cada uno</li>
              <li className="divider"></li>
              <li className=" light-blue-text text-darken-3  ">Dirigido a: </li>
              <li className=" ">Público en General</li>
              <li className=" light-blue-text text-darken-3">Requisitos:</li>
              <li className=" ">Nivel A1</li>
            </ul>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">
              Cerrar
            </a>
          </div>
        </div>
        <div id="modal13" className="modal  ">
          <div className="modal-content">
            <ul>
              <li className="white-text  light-blue darken-3 flow-text center">
                Inglés (Nivel Avanzado)
              </li>
              <li className=" light-blue-text text-darken-3">
                Competencia General:
              </li>
              <li className=" ">
                El objetivo del programa es formar alumnos que alcancen el
                dominio práctico del idioma, que les permita comprender
                situaciones cotidianas y a su vez, poder expresarse de manera
                fluida.
              </li>
              <li className="divider"></li>
              <li className="  light-blue-text text-darken-3  ">Duración: </li>
              <li className=" ">5 Módulod de 40 horas cada uno</li>
              <li className="divider"></li>
              <li className=" light-blue-text text-darken-3  ">Dirigido a: </li>
              <li className=" ">Público en General</li>
              <li className=" light-blue-text text-darken-3">Requisitos:</li>
              <li className=" ">Nivel A2</li>
            </ul>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">
              Cerrar
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}
