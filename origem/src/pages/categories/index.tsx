import React from "react";
import api from "../../api/api";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import CategoryListItem from "../../components/categoryListItem";
import styled from "styled-components";

const StyledDiv = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: 20%;
  font-size: xx-large;
`;

export default function ListCategories(categories) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <h3> Carregando... </h3>;
  }
  return (
    <StyledDiv>
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
    </StyledDiv>
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
