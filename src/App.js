import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

import Layout from '../src/components/containers/layout';
import Advice from '../src/components/pages/advice';
import Home from '../src/components/pages/home';
import Lab from '../src/components/pages/lab';
import Meet from  '../src/components/pages/meet';
import Network from '../src/components/pages/network';
import Developer from '../src/components/pages/developer';
import Training from '../src/components/pages/training'
import Transfer from '../src/components/pages/transfer'
import Curses from '../src/components/pages/curses'
import Covid from  '../src/components/pages/covid';
import Brid from  '../src/components/pages/brigades';
import Sust from  '../src/components/pages/sust';
import Uma from '../src/components/pages/uma';
import Login from '../src/components/siani/views/login';
import Signup from "../src/components/siani/views/signup";
import Sian from '../src/components/siani/views/siani';
import Homes from "../src/components/siani/views/homes";
import Cap from '../src/components/siani/views/capa';
import Gen from '../src/components/siani/views/general';
import Inf from '../src/components/siani/views/info';
import Proc from '../src/components/siani/views/proce';
import Marke from '../src/components/siani/views/mark';
import Futur from '../src/components/siani/views/future';
import Fort from '../src/components/siani/views/fort';
import EditS from '../src/components/siani/views/editSurvey';
import EditU from '../src/components/siani/views/editUser';
import Recover from '../src/components/siani/views/recover';
import SurView from '../src/components/siani/views/survey_view';
import EditEncuesta from '../src/components/siani/views/editEncuesta';
import Review from '../src/components/siani/views/review';
import Privacy from '../src/components/pages/privacy';
import Error from '../src/components/pages/error';

import MisionVirtual from '../src/components/virtualMision/MisionVirtual';

function App() { 

  return ( 
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/advice" component={Advice} />
          <Route path="/lab" component={Lab} />
          <Route path="/meet" component={Meet} />
          <Route path="/network" component={Network} />
          <Route path="/deve" component={Developer} />
          <Route path="/train" component={Training} />
          <Route path="/trans" component={Transfer} />
          <Route path="/curse" component={Curses} />
          <Route path="/covi" component={Covid} />
          <Route path="/bri" component={Brid} />
          <Route path="/sus" component={Sust} />
          <Route path="/uma" component={Uma} />
          <Route path="/log" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/recover" component={Recover} /> 
          <Route path="/privacy" component={Privacy} />
          <Route path="/error" component={Error} />
          <Route path="/mision-virtual" component={MisionVirtual} /> 
          <Route exact path="/" component={Home} />
          <Sian>
            <Route path="/sian" component={Homes} />
            <Route path="/cap" component={Cap} />
            <Route path="/gen" component={Gen} />
            <Route path="/edit" component={EditS} />
            <Route path="/perfil" component={EditU} />  
            <Route path="/inf" component={Inf} />
            <Route path="/pro" component={Proc} />
            <Route path="/mark" component={Marke} />
            <Route path="/futu" component={Futur} />
            <Route path="/forta" component={Fort} /> 
            <Route path="/surv" component={SurView} />
            <Route path="/editEn" component={EditEncuesta} />
            <Route path="/review" component={Review} />
          </Sian>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
