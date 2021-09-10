import React from "react";
import Link from "next/link";
import { Card } from "react-bootstrap";
import styles from "../styles/Home.module.css";

export default function ProductListItem({ href, produto }) {
  return (
    <Link href={href}>
      <div className={styles.grid}>
        <Card.Img variant="top" src={produto.linkFoto} />
        <Card.Body>
          <Card.Title>{produto.titulo}</Card.Title>
          <Card.Text>{produto.valor}</Card.Text>
        </Card.Body>
      </div>
    </Link>
  );
}
