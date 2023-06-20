import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import Image from '../../images/assets/504.jpg'

class Error extends Component {

    componentDidMount(){
        window.scrollTo(0, 0);
    }

    render() {
        const { t } = this.props;
        return (
            <section id="brigades" className="advice page-advice white scrollspy">
                <div className="container">
                    <div className="row">
                        <h4 className="center" >
                            <span className="black-text"><i>En construcción</i></span>
                        </h4>
                        <div className="col s12 m12">
                            <br/>
                            <br/>
                            <img src={Image} alt="Home-S1" className=" responsive-img"/>
                        </div>
                    </div>
                </div>
                
            </section>
        )
    }
}
export default withTranslation("brig")(Error);