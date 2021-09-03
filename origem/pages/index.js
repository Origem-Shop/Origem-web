import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import teste from "./api/api";

export default function Home() {
  teste();
  return <div className={styles.container}>Origem Shop</div>;
}
