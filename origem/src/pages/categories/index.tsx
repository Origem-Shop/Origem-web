import React from "react";
import api from "../../api/api";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import CategoryListItem from "../../components/categoryListItem";
import styles from "../../styles/Home.module.css";

export default function ListCategories(categories) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <h3> Carregando... </h3>;
  }
  return (
    <div className={styles.container}>
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

export const getStaticProps: GetStaticProps = async () => {
  const categories = await api("categorias");
  return {
    props: {
      categories: categories,
    },
    revalidate: 100,
  };
};
