import '../styles/mision.css';
import 'materialize-css/dist/css/materialize.min.css';

import {useState,useEffect} from 'react';

import Banner from './Components/Banner';
import Objetives from './Components/Objetives';
import Info from './Components/Info';
import MisionComponent from './Components/MisionComponent';
import Banner2 from './Components/Banner2';
import CountDown from './Components/CountDown';
import Dock from './Components/Dock';





function MisionVirtual() {
  const [seeMore, setseeMore] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
          <div id='MisionVirtual'>
            <Banner/>
            
            <Banner2/>
            <div className="background">
                  <div className="cube"></div>
                  <div className="cube"></div>
                  <div className="cube"></div>
                  <div className="cube"></div>
                  <div className="cube"></div>
                  <div className="cube"></div>
              <Objetives/>
              <Info/>
              <Dock/>
            </div>
            

            <CountDown/>
          </div>

  );
}

export default MisionVirtual;
