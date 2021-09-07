import React, { useEffect, useState } from "react";
import api from "../../api/api";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import CategoryListItem from "../../components/categoryListItem";

export default function ListCategories(categories) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <h3> Carregando... </h3>;
  }
  return (
    <div>
      <CategoryListItem href={`/allProducts`} categoria={"Todos os Produtos"} />
      {categories.categories ? (
        <div>
          {categories.categories.map((categoria, key) => (
            <CategoryListItem
              key={key}
              href={`/products/${categoria}`}
              categoria={categoria}
            />
          ))}
        </div>
      ) : (
        <p>Carregando</p>
      )}
    </div>
  );
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const filtrados = await api("categorias");

//   const paths = filtrados.map((produto) => {
//     return {
//       params: {
//         produto,
//       },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getStaticProps: GetStaticProps = async () => {
  const categories = await api("categorias");
  return {
    props: {
      categories: categories,
    },
    revalidate: 100,
  };
};
