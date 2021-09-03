import React, { useEffect, useState } from "react";
import api from "../../api/api";
import Link from "next/link";

export default class ListCategories extends React.Component {
  state = {
    categorias: [],
  };

  async componentDidMount() {
    const categorias = await api("categorias");
    this.setState({
      categorias,
    });
  }

  render() {
    console.log(this.state.categorias);
    return (
      <div>
        Categorias
        {this.state.categorias ? (
          <div>
            {this.state.categorias.map((categoria, key) => (
              <Link
                href={{
                  pathname: "/listProducts",
                }}
                as={encodeURI(`${categoria}`)}
              >
                <div key={key}> {categoria} </div>
              </Link>
            ))}
          </div>
        ) : (
          <p>Carregando</p>
        )}
      </div>
    );
  }
}
