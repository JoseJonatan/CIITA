import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { withTranslation } from 'react-i18next';


const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

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

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

const CountDown = (props) => {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = Date.parse("Jun 17, 2021 16:00:00") / 1000; //Aqui va la fecha destino 

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  const { t } = props;

  return (
    <div className="counterDown section grey lighten-3" id="proxima">
        <div 
            className="row container"
            style={{marginBottom:'4rem'}}
        >
            <h4 style={{color: '#0D2446'}}>{t("nextMission.tittle")}</h4>
            <h5
                style={{marginBottom:'3rem'}}
            >{t("nextMission.text")}</h5>
            
            <div className="col s6 m6 l3 cont">
                <CountdownCircleTimer
                    {...timerProps}
                    colors={[["#1D3F7B"]]}
                    duration={daysDuration}
                    initialRemainingTime={remainingTime}
                    
                >
                    {({ elapsedTime }) =>
                    renderTime("days", getTimeDays(daysDuration - elapsedTime))
                    }
                </CountdownCircleTimer>
            </div>
            <div className="col s6 m6 l3 cont">
                <CountdownCircleTimer
                    {...timerProps}
                    colors={[["#3065A9"]]}
                    duration={daySeconds}
                    initialRemainingTime={remainingTime % daySeconds}
                    onComplete={(totalElapsedTime) => [
                    remainingTime - totalElapsedTime > hourSeconds
                    ]}
                    
                >
                    {({ elapsedTime }) =>
                    renderTime("hours", getTimeHours(daySeconds - elapsedTime))
                    }
                </CountdownCircleTimer>
            </div>
            <div className="col s6 m6 l3 cont">
                <CountdownCircleTimer
                    {...timerProps}
                    colors={[["#5B90C6"]]}
                    duration={hourSeconds}
                    initialRemainingTime={remainingTime % hourSeconds}
                    onComplete={(totalElapsedTime) => [
                    remainingTime - totalElapsedTime > minuteSeconds
                    ]}
                >
                    {({ elapsedTime }) =>
                    renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
                    }
                </CountdownCircleTimer>
            </div>
            <div className="col s6 m6 l3 cont">
                <CountdownCircleTimer
                    {...timerProps}
                    colors={[["#81A4D2"]]}
                    duration={minuteSeconds}
                    initialRemainingTime={remainingTime % minuteSeconds}
                    onComplete={(totalElapsedTime) => [
                    remainingTime - totalElapsedTime > 0
                    ]}
                >
                    {({ elapsedTime }) =>
                    renderTime("seconds", getTimeSeconds(elapsedTime))
                    }
                </CountdownCircleTimer>
            </div>
      </div>
    </div>
  );
}

export default withTranslation("mision")(CountDown);
