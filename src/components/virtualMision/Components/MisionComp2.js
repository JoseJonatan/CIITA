import React, {useEffect} from 'react'

export default function MisionComp2(props) {
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <section className="section">
            <div className="row container">
                <div className="col s12 m6">
                    <iframe 
                        width="100%" 
                        height="415" 
                        src={props.videoLink}
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    >
                    </iframe>
                </div>
                <div className="col s12 m6">
                    <h2 style={{color: '#3065AB'}}>{props.tittle}</h2>
                    <h5>{props.fecha}</h5>
                    <h6>{props.desc}</h6>
                </div>
                {props.siProp ? <div className="col s12">
                    <h4 style={{color: '#3065AB'}}>Propuestas de negocio: </h4>
                    <ul 
                        className="collection"
                        style={{
                            textAlign: 'justify'
                        }}
                    >
                        {
                            props.propuestas.map(
                                propuesta => (
                                    <li 
                                        className="collection-item"
                                        key={propuesta}
                                    >
                                        <h6>➡️ {propuesta}</h6>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </div>:null}
            </div>
        </section>
    )
}
