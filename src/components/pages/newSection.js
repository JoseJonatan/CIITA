import React, { Component } from 'react';
import webinar from '../../images/sectionHome1/elearning.png';
import alianza from '../../images/sectionHome1/confiar.png';
import tech from '../../images/sectionHome1/technology.png';
import lab from '../../images/sectionHome1/monitor.png';
import nego from '../../images/sectionHome1/aprendizaje.png';
import prop from '../../images/sectionHome1/atencion.png';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Link } from 'react-router-dom';

import { withTranslation } from 'react-i18next';



class Section1 extends Component {
    render() {

        const minuteSeconds = 60;
        const hourSeconds = 3600;
        const daySeconds = 86400;

        const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
        const endTime = Date.parse("Jun 17, 2021 16:00:00") / 1000; //Aqui va la fecha destino 

        const remainingTime = endTime - stratTime;
        const days = Math.ceil(remainingTime / daySeconds);
        const daysDuration = days * daySeconds;

        const { t } = this.props;

        const timerProps = {
            isPlaying: true,
            size: 120,
            strokeWidth: 6
        };

        const renderTime = (dimension, time) => {
            return (
              <div className="time-wrapper">
                <div className="time">{time}</div>
                <div>{dimension}</div>
              </div>
            );
        };

        const getTimeDays = (time) => (time / daySeconds) | 0;

        return (
            <section id="section1" className="section scrollspy">
                  <div className="container">
                        <div className="row">
                            <h4 className="center"><i>
                                <span className="white-text">{t("services.tittle0")}</span>
                                <br/></i>
                            </h4>
                        </div>

                        <div className="row"> 

                            <div className="col s12 m4">
                                <div className="card blue-grey-text text-lighten-4">
                                    <div className="card-content card-col" style={{borderRadius: '1rem'}}>
                                        <span 
                                            class="card-title center"
                                        >
                                            {t("services.tittle1")}
                                        </span>
                                    </div>
                                    <div class="card-image" style={{marginInline: '35%', width: '30%'}} >
                                        <img src={prop} alt="webinar"></img>
                                    </div>

                                    <div className="card-content card-col" style={{textAlign: 'justify'}}>
                                        
                                    {t("services.text1")}

                                    </div>
                                
                                </div>
                            </div>

                            <div className="col s12 m4">
                                <div className="card blue-grey-text text-lighten-4">
                                    <div className="card-content card-col" style={{borderRadius: '1rem'}}>
                                        <span 
                                            class="card-title center"
                                        >
                                            {t("services.tittle2")}
                                        </span>
                                    </div>
                                    <div class="card-image" style={{marginInline: '35%', width: '30%'}} >
                                        <img src={tech} alt="webinar"></img>
                                    </div>

                                    <div className="card-content card-col" style={{textAlign: 'justify'}}>
                                        
                                    {t("services.text2")}
                            
                                    </div>
                                </div>
                            </div>

                            <div className="col s12 m4">
                                <div className="card blue-grey-text text-lighten-4">
                                    <div className="card-content card-col" style={{borderRadius: '1rem'}}>
                                        <span 
                                            class="card-title center"
                                        >
                                            {t("services.tittle3")}
                                        </span>
                                    </div>
                                    <div className="" style={{marginInline: '32%'}} >
                                    
                                    
                                    <Link to="/mision-virtual">
                                        <CountdownCircleTimer
                                            {...timerProps}
                                            colors={[["#7D8FE5"]]}
                                            duration={daysDuration}
                                            initialRemainingTime={remainingTime}
                                            
                                        >
                                            {({ elapsedTime }) =>
                                            renderTime("days", getTimeDays(daysDuration - elapsedTime))
                                            }
                                        </CountdownCircleTimer>
                                        </Link>
                                    </div>

                                    <div className="card-content card-col" style={{textAlign: 'justify'}}>
                                        
                                    {t("services.text3")}

                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row"> 
                        

                        <div className="col s12 m4">
                                <div className="card blue-grey-text text-lighten-4">
                                    <div className="card-content card-col" style={{borderRadius: '1rem'}}>
                                        <span 
                                            class="card-title center"
                                        >
                                            {t("services.tittle4")}
                                        </span>
                                    </div>
                                    <div class="card-image" style={{marginInline: '35%', width: '30%'}} >
                                        <img src={webinar} alt="webinar"></img>
                                    </div>

                                    <div className="card-content card-col" style={{textAlign: 'justify'}}>
                                        
                                    {t("services.text4")}

                                    </div>
                                
                                </div>
                            </div>

                            <div className="col s12 m4">
                                <div className="card blue-grey-text text-lighten-4">
                                    <div className="card-content card-col" style={{borderRadius: '1rem'}}>
                                        <span 
                                            class="card-title center"
                                        >
                                            {t("services.tittle5")}
                                        </span>
                                    </div>
                                    <div class="card-image" style={{marginInline: '35%', width: '30%'}} >
                                        <img src={alianza} alt="webinar"></img>
                                    </div>

                                    <div className="card-content card-col" style={{textAlign: 'justify'}}>
                                        
                                    {t("services.text5")}
                            
                                    </div>
                                </div>
                            </div>

                            

                            <div className="col s12 m4">
                                <div className="card blue-grey-text text-lighten-4">
                                    <div className="card-content card-col" style={{borderRadius: '1rem'}}>
                                        <span 
                                            class="card-title center"
                                        >
                                            {t("services.tittle6")}
                                        </span>
                                    </div>
                                    <div class="card-image" style={{marginInline: '35%', width: '30%'}} >
                                        <img src={lab} alt="webinar"></img>
                                    </div>

                                    <div className="card-content card-col" style={{textAlign: 'justify'}}>
                                        
                                        {t("services.text6")}
                            
                                    </div>
                                </div>
                            </div>

                            

                            

                            

                       </div>
                  </div>              
            </section>
        )
    }
}
export default withTranslation("home")(Section1);