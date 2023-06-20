import React, { useEffect } from "react";
import SmoothScroll from './navbar';
import Footer from './footer';
import Head from './header';
import FootGob from './foGob';
import Gobhead from './headerGob';

function Layout(props) {
  useEffect(() => {
    var headerGob = document.getElementById("headergob");
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    window.onscroll = function () {
      myFunction();
    };

    function myFunction() {
      console.log("Scroll");
      if (window.pageYOffset >= sticky - 62) {
        headerGob.classList.add("hide");
        navbar.classList.add("navbar-fixed");
        navbar.classList.add("marginBot");
      } else {
        headerGob.classList.remove("hide");
        navbar.classList.remove("navbar-fixed");
        navbar.classList.remove("marginBot");
      }
    }
  }, []);
  return (
    <React.Fragment>
      <Head />
      <Gobhead id="headergob" />
      <SmoothScroll id="navbar" />
      {props.children}
      <Footer />
      <FootGob />
    </React.Fragment>
  );
}

export default Layout;