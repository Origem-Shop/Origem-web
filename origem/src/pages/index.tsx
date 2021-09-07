import styles from "../styles/Home.module.css";
import Link from "next/link";
import { GetStaticProps } from "next";
import api from "../api/api";
import React from "react";
import logo from "../../public/logo.svg";

export default function Home() {
  return (
    <div className={styles.container}>
      <text className={styles.title}>Lista de Produtos</text>
      <img src={logo} className={styles.logo} />
      <Link href={`/categories`}>
        <div className={styles.card}>Categorias</div>
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
