import React from "react";

export default class ListProducts extends React.Component {
  render() {
    return <div>Lista de Produtos {this.props.categoria}</div>;
  }
}
