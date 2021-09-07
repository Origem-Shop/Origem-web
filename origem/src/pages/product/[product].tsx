import { useRouter } from "next/router";
import api from "../../api/api";
import React from "react";
import { Container, Card } from "react-bootstrap";

export default function ProductItem({ product }) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <h3> Carregando... </h3>;
  }

  return (
    <Container>
      <Card>
        <Card.Img variant="top" src={product.linkFoto} />
        <Card.Body>
          <Card.Title>{product.titulo}</Card.Title>
          <Card.Text>{product.descricao}</Card.Text>
        </Card.Body>
        <Card.Footer>{product.valor}</Card.Footer>
      </Card>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const product = await api("id", null, context.params.product);
  return {
    props: {
      product: product,
    },
  };
}
