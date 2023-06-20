import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
import * as serviceWorker from './serviceWorker';
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next';

import navbar_es from './components/translations/es/navbar.json';
import navbar_en from './components/translations/en/navbar.json';
import home_es from './components/translations/es/home.json';
import home_en from './components/translations/en/home.json';
import meet_es from './components/translations/es/meet.json';
import meet_en from './components/translations/en/meet.json';
import deve_es from './components/translations/es/develop.json';
import deve_en from './components/translations/en/develop.json';
import net_es from './components/translations/es/network.json';
import net_en from './components/translations/en/network.json';
import trans_es from './components/translations/es/transfer.json';
import trans_en from './components/translations/en/transfer.json';
import tale_es from './components/translations/es/talent.json';
import tale_en from './components/translations/en/talent.json';
import curse_es from './components/translations/es/curse.json';
import curse_en from './components/translations/en/curse.json';
import lab_es from './components/translations/es/lab.json';
import lab_en from './components/translations/en/lab.json';
import gob_es from './components/translations/es/gob.json';
import gob_en from './components/translations/en/gob.json';
import bri_es from './components/translations/es/brigad.json';
import bri_en from './components/translations/en/brigad.json';
import log_es from './components/translations/es/login.json';
import log_en from './components/translations/en/login.json';
import mision_en from './components/translations/en/mision.json';
import mision_es from './components/translations/es/mision.json';

i18next.init({
  interpolation: {escapeValue: false},
  lng: "es",
  resources: {
    es: {
      navb: navbar_es,
      home: home_es,
      meet: meet_es,
      deve: deve_es,
      netw: net_es,
      transf: trans_es,
      talent: tale_es,
      curse: curse_es,
      labo: lab_es,
      gove: gob_es,
      brig: bri_es,
      logi: log_es,
      mision: mision_es
    },
    en: {
      navb: navbar_en,
      home: home_en,
      meet: meet_en,
      deve: deve_en,
      netw: net_en,
      transf: trans_en,
      talent: tale_en,
      curse: curse_en,
      labo: lab_en,
      gove: gob_en,
      brig: bri_en,
      logi: log_en,
      mision: mision_en
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
