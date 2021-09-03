import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      Origem Shop
      <Link href="/listCategories" as="Categorias">
        <h6>Categorias</h6>
      </Link>
    </div>
  );
}
