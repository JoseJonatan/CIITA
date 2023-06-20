import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Banner from '../pages/banner';
import Mail from '../pages/mail';
import MiniHome from '../pages/sliderb';
import IconBar from '../pages/filaLogos'
import SlideHome from '../pages/slidehome';
import Section1 from '../pages/newSection';
import SianiOnHome from '../pages/sianiOnHome';
import UmaOnHome from '../pages/umaOnHome';

function Home() {
    return (
        <Route>
            <Fragment>
                <SlideHome />
                <MiniHome />
                <Banner />
                <Section1 />
                <SianiOnHome />
                <UmaOnHome />
                <Mail />
            </Fragment>
        </Route>
    )
}
export default Home;