import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function CategoryListItem({ href, categoria }) {
  return (
    <Link href={href}>
      <div className={styles.categoria}>{categoria}</div>
    </Link>
  );
}
