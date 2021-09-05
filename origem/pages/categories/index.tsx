import React, { useEffect, useState } from "react";
import api from "../../api/api";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

export default function ListCategories(category) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <h3> Carregando... </h3>;
  }
  return (
    <div>
      {console.log(category.categories)}
      {category.categories ? (
        <div>
          {category.categories.map((categoria, key) => (
            <Link
              key={key}
              href={{
                pathname: "/listFilteredProducts",
                query: {
                  category: categoria,
                },
              }}
              as={encodeURI(`/categoria/${categoria}`)}
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

// export const getStaticPaths: GetStaticPaths = async () => {
//   const filtrados = await api("categorias");

//   const paths = filtrados.map((produto) => {
//     console.log(produto);
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
  return {
    props: {
      categories: await api("categorias"),
    },
    revalidate: 100,
  };
};
