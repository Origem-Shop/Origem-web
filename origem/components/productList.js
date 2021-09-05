import React, { useEffect, useState } from "react";
import api from "../api/api";

export default class ProductList extends React.Component {
  state = {
    filtrados: [],
  };

  async componentDidMount() {
    let filtrados = await api("filtrado", this.props.category);
    this.setState({
      filtrados,
    });
  }

  // async componentDidMount() {
  //   const filtrados = await api("filtrado", this.props.category);
  //   console.log(filtrados);
  // }
  render() {
    return (
      <div>
        {console.log("Filtrados", this.state.filtrados)}
        {this.state.filtrados ? (
          <div>
            {console.log("Filtrados", this.state.filtrados)}
            {this.state.filtrados.map((produto, key) => (
              <div key={key}> {produto.titulo} </div>
            ))}
          </div>
        ) : (
          <p>Carregando</p>
        )}
      </div>
    );
  }
}
