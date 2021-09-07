import { useRouter } from "next/router";
import api from "../../api/api";
import { Container, Row, Col, CardGroup, Card } from "react-bootstrap";

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

export async function getServerSideProps(context: any) {
  console.log("Context", context.params.product);
  const product = await api("id", null, context.params.product);
  console.log("Produto com ID", product);
  return {
    props: {
      product: product,
    },
  };
}
