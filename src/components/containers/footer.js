import React, { Component } from 'react'
import '../../../node_modules/jquery/dist/jquery';
import '../../../node_modules/materialize-css/dist/js/materialize';
import '../styles/footer.css'

import { withTranslation } from 'react-i18next';

class footer extends Component {

    render() {

      const { t } = this.props;

        return (
          <section className="section white-text center scrollspy footer_">
            <div className="row">
              <div className="col s12">
                <h4>{t("social.title")}</h4>
                  <p>{t("social.text")}
                  </p>
                  <a href="https://www.facebook.com/ciitachihuahua" target="blank" className="white-text">
                  <i className="fab fa-facebook fa-3x"></i>
                  </a>
                  <a href="https://twitter.com/ciita_chihuahua" target="blank" className="white-text">
                  <i className="fab fa-twitter fa-3x"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/ciita-chihuahua" target="blank" className="white-text">
                  <i class="fab fa-linkedin fa-3x"></i>
                  </a>
                  <a href="https://www.instagram.com/ciita_chihuahua/" target="blank" className="white-text">
                  <i className="fab fa-instagram fa-3x"></i>
                  </a>
                  <a href="https://t.me/CIITAChihuahua" target="blank" className="white-text">
                  <i className="fab fa-telegram fa-3x"></i>
                  </a>
                  
              </div>
            </div>
          </section>
        )
    }
}
export default withTranslation("home")(footer);