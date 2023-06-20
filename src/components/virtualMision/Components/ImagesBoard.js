import React from 'react';

const ImagesBoard = () => {

    return (
        <section className="row container">
            <div className="col s12 m6 l3">
                <div>
                    <img 
                        src="http://misionvirtual.net/wp-content/uploads/2020/08/escudoNuevo-CIITA-original.png" 
                        alt="logo" 
                        width="150"
                        height="150"
                        className="Logos"
                    />
                </div>
            </div>

            <div className="col s12 m6 l3">
                <img 
                    src="http://misionvirtual.net/wp-content/uploads/2020/08/cluster-mach.fw_.png" 
                    alt="logo" 
                    width="150"
                    height="150"
                    className="Logos"
                />
            </div>

            <div className="col s12 m6 l3">
                <img 
                    src="http://misionvirtual.net/wp-content/uploads/2020/08/logo-EGE-transparente.fw_.png" 
                    alt="logo" 
                    width="150"
                    height="150"
                    className="Logos"
                />
            </div>
            <div className="col s12 m6 l3">
                <img 
                    src="http://misionvirtual.net/wp-content/uploads/2020/08/ipn.png" 
                    alt="logo" 
                    width="150"
                    height="150"
                    className="Logos"
                />
            </div>
        </section>   
    );
  }
  
  export default ImagesBoard;