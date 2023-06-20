import React from 'react';
import CountUp from 'react-countup';

import { withTranslation } from 'react-i18next';


const Banner2 = (props) => {

    const { t } = props;

    return (
        
        <section className="bannerFondo background" id="quienesomos">
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            
            <div className="row container white-text">
                <div className="col s12 m4">
                    <div className="card-panel card-banner" >
                        <h2 className="center">
                            <CountUp start={0} end={56} />
                        </h2>
                        <h5 className="center">
                            {t("numbers.empresas")}
                        </h5>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card-panel card-banner" >
                        <h2 className="center">
                            <CountUp start={0} end={1325} />
                        </h2>
                        <h5 className="center">
                            {t("numbers.empleados")}
                        </h5>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card-panel card-banner" >
                        <h2 className="center">
                            <CountUp 
                                start={0} 
                                end={4} 
                                duration={8}
                            />
                        </h2>
                        <h5 className="center">
                            {t("numbers.sectores")}
                        </h5>
                    </div>
                </div>
                    
            </div>
        </section>   
    );
  }
  
  export default withTranslation("mision")(Banner2);