import styles from "../styles/Home.module.css";
import Link from "next/link";
import { GetStaticProps } from "next";
import api from "../api/api";
import React from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      Origem Shop
      <Link href={`/categories`}>
        <h6>Categorias</h6>
      </Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await api();
  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};
