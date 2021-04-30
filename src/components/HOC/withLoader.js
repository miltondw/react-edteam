import React, { Component } from "react";
// Aqí puedo agregar una logica donde entre un componente y me devuelva uno u tro en un componenteEnvoltorio WrappedComponent
const withLoader = (WrappedCompenet) => {
  return class WithLoader extends Component {
    render() {
      console.log(this.props);
      return <WrappedCompenet {...this.props} />;
    }
  };
};

export default withLoader;
