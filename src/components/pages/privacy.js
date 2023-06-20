import React , {useEffect}from 'react';
import Banner from '../../images/icons/bannerPRIV1.jpg'
import PDF1 from '../../doc/privacy/privacidad-general.pdf'
import PDF2 from '../../doc/privacy/simplificado-aspirantes.pdf'
import PDF3 from '../../doc/privacy/aspirantes.pdf'
import PDF4 from '../../doc/privacy/simplificado-control-gestion-escolar-alumnos.pdf'
import PDF5 from '../../doc/privacy/integral-control-gestionescolar-alumnos.pdf'
import PDF6 from '../../doc/privacy/simplificado-control-gestion-personal.pdf'
import PDF7 from '../../doc/privacy/integral-control-gestion-personal.pdf'
import PDF8 from '../../doc/privacy/simplificado-contrataciones.pdf'
import PDF9 from '../../doc/privacy/integral-contrataciones.pdf'


export default function Privacy() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            <img 
                src={Banner} 
                alt="banner"
                style={{
                    width: "100%",
                    height: "auto",
                }}
            ></img>
            <div className="container center">
                <div style={{textAlign: 'justify'}}>
                    <h6 
                        className="center"
                        style={{fontWeight:'bold'}}    
                    >
                        PROTECCIÓN DE DATOS PERSONALES
                    </h6>
                    <p>
                        El Instituto Politécnico Nacional a través de sus unidades académicas y administrativas 
                        tienen la oblicación de proteger los datos personales que manejen de conformidad con lo 
                        dispuesto por la Ley General de Datos Personales en Posesión de Sujetos Obligados y demás
                        normatividad en la materia.
                    </p>
                    <p>
                        Conoce los Avisos de Provacidad respecto del tratamiento de los datos personales en los 
                        procesos que lleva a cabo el Instituto Politécnico Nacional para cumplir con sus finalidades:
                    </p>
                </div>
            </div>
            <div className="center section grey">
                    <h6 
                        className="center white-text"
                        style={{fontWeight:'bold'}}    
                    >
                        Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados
                    </h6>
            </div>
            <div className="center">
                    <h6 
                        className="center"
                        style={{fontWeight:'bold',fontStyle:'italic'}}    
                    >
                        “Tratamiento de datos personales: Conoce los avisos de privacidad del IPN - CIITA Chihuahua”
                    </h6>
            </div>
            <div className='container' style={{paddingTop:'2rem'}}>
                <div className="collection">
                    
                    <a href={PDF2} class="collection-item"><i class="tiny material-icons">check</i>Aviso de Privacidad simplificado para aspirantes.</a>
                    <a href={PDF3} class="collection-item"><i class="tiny material-icons">check</i>Aviso de Privacidad integral para aspirantes.</a>
                    <a href={PDF4} class="collection-item"><i class="tiny material-icons">check</i>Aviso de Privacidad simplificado para alumnos del IPN.</a>
                    <a href={PDF5} class="collection-item"><i class="tiny material-icons">check</i>Aviso de Privacidad integral para alumnos del IPN.</a>
                    <a href={PDF6} class="collection-item"><i class="tiny material-icons">check</i>Aviso de Privacidad simplificado para personal del IPN.</a>
                    <a href={PDF7} class="collection-item"><i class="tiny material-icons">check</i>Aviso de Privacidad integral para personal del IPN.</a>
                    <a href={PDF8} class="collection-item"><i class="tiny material-icons">check</i>Aviso de Privacidad simplificado contrataciones del IPN.</a>
                    <a href={PDF9} class="collection-item"><i class="tiny material-icons">check</i>Aviso de Privacidad integral contrataciones del IPN.</a>
                </div>
            </div>
        </div>
    )
}
