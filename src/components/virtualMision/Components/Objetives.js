import React from 'react';
import { withTranslation } from 'react-i18next';

const Objetives = (props) => {

    const { t } = props;

    return (
        <section className="center container section" id="objetivos">
            <div>
                <h3 style={{color: '#0D2446'}}>{t("objetives.generalTittle")}</h3>
                <p
                    style={{
                        textAlign: 'justify'
                    }}
                >
                    {t("objetives.generalText")}
                </p>
            </div>
            <div>
                <h3 style={{color: '#0D2446'}}>{t("objetives.specificTittle")}</h3>
                
            </div>
        </section>   
    );
  }
  
  export default withTranslation("mision")(Objetives);