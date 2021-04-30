import React, { Component } from "react";
import Banner from "../organisms/Banner";
import imgbanner from "../../images/banner.webp";
class Error404 extends Component {
  render() {
    return (
      <Banner
        title="¿Te perdiste?"
        paragragh="No importa perder el camino , sino seguir!"
        img={imgbanner}
      />
    );
  }
}

export default Error404;
