import styles from "../styles/Home.module.css";
import Link from "next/link";
import api from "../api/api";
import { GetStaticPaths, GetStaticProps } from "next";

export default function Home({ data }) {
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
  let data = await api();
  console.log(data);
  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};
