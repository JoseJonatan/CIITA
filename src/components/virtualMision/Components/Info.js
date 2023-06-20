import React from 'react';
import ImageGallery from 'react-image-gallery';
import Img1 from '../../../images/MisionVirtual/banner1.jpg';
import Img2 from '../../../images/MisionVirtual/banner2.jpeg';
import Img3 from '../../../images/MisionVirtual/segunda-mision.jpg';
import Img4 from '../../../images/MisionVirtual/tercera-mision.jpg';
import Img5 from '../../../images/MisionVirtual/cuarta-mision.jpg';
import Img6 from '../../../images/MisionVirtual/quinta-mision.jpeg';
import Img7 from '../../../images/MisionVirtual/septima-mision.jpeg';
import Img8 from '../../../images/MisionVirtual/octava-mision.jpeg';

import { withTranslation } from 'react-i18next';

const images = [
    {
      original: Img1,
      thumbnail: Img1,
    },
    {
      original: Img2,
      thumbnail: Img2,
    },
    {
    original: Img6,
    thumbnail: Img6,
    },
    {
    original: Img7,
    thumbnail: Img7,
    },
    {
    original: Img8,
    thumbnail: Img8,
    },
];


const Info = (props) => {

    const { t } = props;

    return (
        <section className="section">
            <div className="row container">

            
                <div className="col s12 m12 l8">
                <ImageGallery 
                    
                    items={images} 
                    slideInterval={8000}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    showBullets={true}
                    showIndex={true}
                    autoPlay={true}
                    
                />
                </div>
                <div className="col s12 m12 l4">
                    <p>
                        <ul 
                            className="collection"
                            style={{
                                textAlign: 'justify'
                            }}
                        >
                            <li className="collection-item">
                                ➡️ {t("objetives.specific1")}
                            </li>
                            <li className="collection-item">
                                ➡️ {t("objetives.specific2")}
                            </li>
                            <li className="collection-item">
                                ➡️ {t("objetives.specific3")}
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        </section>   
    );
  }
  
  export default withTranslation("mision")(Info);