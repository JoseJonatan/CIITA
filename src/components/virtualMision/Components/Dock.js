import React from 'react';
import '../../styles/dock.css';

import MV1_1 from '../../../images/MisionVirtual/MisionVirtual/mv1.png';
import MV1_2 from '../../../images/MisionVirtual/MisionVirtual/mv1-2.png';
import MV2_1 from '../../../images/MisionVirtual/MisionVirtual/mv2-1.png';
import MV2_2 from '../../../images/MisionVirtual/MisionVirtual/mv2-2.jpg';
import MV3_1 from '../../../images/MisionVirtual/MisionVirtual/mv3-1.png';
import MV3_2 from '../../../images/MisionVirtual/MisionVirtual/mv3-2.png';
import MV4_1 from '../../../images/MisionVirtual/MisionVirtual/mv4-1.png';
import MV4_2 from '../../../images/MisionVirtual/MisionVirtual/mv4-2.png';
import MV5_1 from '../../../images/MisionVirtual/MisionVirtual/mv5-1.png';
import MV5_2 from '../../../images/MisionVirtual/MisionVirtual/mv5-2.png';
import MV6_1 from '../../../images/MisionVirtual/MisionVirtual/mv6-1.jpg';
import MV6_11 from '../../../images/MisionVirtual/MisionVirtual/mv6-1.png';
import MV6_2 from '../../../images/MisionVirtual/MisionVirtual/mv6-2.jpg';
import MV6_22 from '../../../images/MisionVirtual/MisionVirtual/mv6-2.png';
import MV6_3 from '../../../images/MisionVirtual/MisionVirtual/mv6-3.png';
import MV7_1 from '../../../images/MisionVirtual/MisionVirtual/mv7-1.png';
import MV7_2 from '../../../images/MisionVirtual/MisionVirtual/mv7-2.jpg';
import MV7_3 from '../../../images/MisionVirtual/MisionVirtual/mv7-3.png';
import MV8_1 from '../../../images/MisionVirtual/MisionVirtual/mv8-1.png';
import MV8_2 from '../../../images/MisionVirtual/MisionVirtual/mv8-2.svg';
import MV8_3 from '../../../images/MisionVirtual/MisionVirtual/mv8-3.png';

import { withTranslation } from 'react-i18next';

const Dock = (props) => {

    const { t } = props;
    
    return (
        <div>
            <div className="dock hide-on-med-and-down">
                <h3 style={{color: '#0D2446'}}>
                    {t("sirgic.tittle")}
                </h3>
                <p
                    style={{
                        textAlign: 'justify'
                    }}
                >
                    {t("sirgic.text")}
                </p>
                <ul>
                    <li>
                        <a>
                            <em>
                            <span>HT-MX</span>
                            </em>
                            <img src={MV1_1} />
                        </a>
                    </li>
                    <li>
                        <a>
                            <em>
                            <span>TAMUSE SYSTEMS</span>
                            </em>
                            <img src={MV1_2} />
                        </a>
                    </li>
                    <li>
                        <a>
                            <em>
                            <span>MONTILLA</span>
                            </em>
                            <img src={MV2_1} />
                        </a>
                    </li>
                    <li>
                        <a>
                            <em>
                            <span>Grupo IMSSA</span>
                            </em>
                            <img src={MV2_2} />
                        </a>
                    </li>
                    <li>
                        <a>
                            <em>
                            <span>MEINS INDUSTRIES</span>
                            </em>
                            <img src={MV3_1} />
                        </a>
                    </li>
                    <li>
                        <a>
                            <em>
                            <span>PIMA</span>
                            </em>
                            <img src={MV3_2} />
                        </a>
                    </li>
                    <li>
                        <a>
                            <em>
                            <span>DIRECHISA</span>
                            </em>
                            <img src={MV4_1} />
                        </a>
                    </li>
                    <li>
                        <a>
                            <em>
                            <span>AIDMASTER ENGINEERING</span>
                            </em>
                            <img src={MV4_2} />
                        </a>
                    </li>
                    <li>
                        <a>
                            <em>
                            <span>IM Tecnología Aplicada</span>
                            </em>
                            <img src={MV5_1} />
                        </a>
                    </li>
                    <li>
                        <a>
                            <em>
                            <span>DMI</span>
                            </em>
                            <img src={MV5_2} />
                        </a>
                    </li>
                    <li>
                        <a>
                            <em>
                            <span>Grupo AG</span>
                            </em>
                            <img src={MV6_1} />
                        </a>
                    </li>
                    <li>
                        <a>
                            <em>
                            <span>MR Automation</span>
                            </em>
                            <img src={MV6_2} />
                        </a>
                    </li>
                    <li>
                        <a>
                            <em>
                            <span>delpunto</span>
                            </em>
                            <img src={MV6_11} />
                        </a>
                    </li>
                    <li>
                        <a>
                            <em>
                            <span>Torch industrial</span>
                            </em>
                            <img src={MV6_3} />
                        </a>
                    </li>
                    <li>
                        <a>
                            <em>
                            <span>JR</span>
                            </em>
                            <img src={MV6_22} />
                        </a>
                    </li>
                    
                    <li>
                        <a>
                            <em>
                            <span>MAQUINADOS JOSAR</span>
                            </em>
                            <img src={MV7_1} />
                        </a>
                    </li>
                    <li>
                        <a>
                            <em>
                            <span>GRUPO MADIMSA</span>
                            </em>
                            <img src={MV7_2} />
                        </a>
                    </li>
                    <li>
                        <a>
                            <em>
                            <span>REPINEL</span>
                            </em>
                            <img src={MV7_3} />
                        </a>
                    </li>
                    <li>
                        <a>
                            <em>
                            <span>Juarez Springs</span>
                            </em>
                            <img src={MV8_1} />
                        </a>
                    </li>
                    <li>
                        <a>
                            <em>
                            <span>ESJ</span>
                            </em>
                            <img src={MV8_2} />
                        </a>
                    </li>
                    <li>
                        <a>
                            <em>
                            <span>IZA</span>
                            </em>
                            <img src={MV8_3} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

  
export default withTranslation("mision")(Dock);
