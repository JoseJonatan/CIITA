import React from 'react';
import {FlippingCard, FlippingCardBack, FlippingCardFront} from 'react-ui-cards';

const MisionComponent = (props) => {

    return (
        <section 
            className="background"
            style={{
                paddingLeft: '3rem',
                paddingRight: '3rem',
            }}
        >
            
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>

            <div className="row">
                <h5 className="center" style={{color: '#0D2446'}}>
                    {props.tittle}    
                </h5>
                <div className="col s12 m12 l6">
                    <FlippingCard style={{
                        width: '100%', 
                        margin: 0, 
                        marginTop: '1rem', 
                        marginBottom: '0rem'}}
                    >
                        <FlippingCardFront>
                            <div className="card-panel cardMision" >
                                <h3 style={{padding:'1rem' }} className="center">
                                    {props.cardTittle1}
                                </h3>
                            </div>
                        </FlippingCardFront>

                        <FlippingCardBack>
                            <div className="card-panel cardMision" >
                                    <p 
                                        style={{
                                            padding:'1rem',
                                            textAlign: 'justify'
                                        }} 
                                        className="center" 
                                    >
                                        {props.cardContent1}
                                    </p>
                            </div>
                        </FlippingCardBack>
                    </FlippingCard>
                </div>
                <div className="col s12 m12 l6">
                    <FlippingCard style={{
                        width: '100%', 
                        margin: 0, 
                        marginTop: '1rem', 
                        marginBottom: '0rem'}}
                    >
                        <FlippingCardBack>
                            <div 
                            className="card-panel cardMision">
                                    <p 
                                        style={{
                                            padding:'1rem',
                                            textAlign: 'justify'
                                        }} 
                                        className="center"
                                    >
                                        {props.cardContent2}
                                    </p>
                            </div>
                        </FlippingCardBack>
                        <FlippingCardFront>
                            <div className="card-panel cardMision" >
                                <h4 style={{padding:'1rem'}} className="center">
                                    {props.cardTittle2}
                                </h4>
                            </div>
                        </FlippingCardFront>

                        
                    </FlippingCard>
                </div>
                <div 
                    className="col s12 m12 l2"
                    style={{
                        justifyContent: 'center',
                        display:'flex'
                    }}
                >
                    <img 
                        src={props.img1}
                        alt="info"
                        style={{
                            width: '100%',
                            marginTop: '3rem',
                            justifyContent: 'center',
                            display:'flex'
                        }}
                    />
                </div>
                <div className="col s12 m12 l4">
                    <iframe 
                        width="100%" 
                        height="315" 
                        src={props.videoLink1}
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                        
                    >
                    </iframe>
                </div>
                <div className="col s12 m12 l4">
                    <iframe 
                        width="100%" 
                        height="315" 
                        src={props.videoLink2}
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    >
                    </iframe>
                </div>
                
                <div 
                    className="col s12 m12 l2"
                    style={{
                        justifyContent: 'center',
                        display:'flex'
                    }}
                >
                <img 
                        src={props.img2} 
                        alt="info"
                        style={{
                            width: '100%',
                            marginTop: '3rem',
                        }}
                    />
                </div>
            </div>
        </section>   
    );
  }
  
  export default MisionComponent;