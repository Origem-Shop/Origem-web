import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Card } from "react-bootstrap";

const Produto = styled(Card)`
  height: fit-content;
  &:hover {
    transform: scale(1.01);
    background: linear-gradient(transparent, blue);
  }
`;

export default function ProductListItem({ href, produto }) {
  return (
    <Link href={href}>
      <Produto>
        <Card.Img variant="top" src={produto.linkFoto} />
        <Card.Body>
          <Card.Title>{produto.titulo}</Card.Title>
          <Card.Text>{produto.valor}</Card.Text>
        </Card.Body>
      </Produto>
    </Link>
  );
}
