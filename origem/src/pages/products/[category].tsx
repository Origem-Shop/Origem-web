import api from "../../api/api";
import React from "react";
import ProductListItem from "../../components/productGrid";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const StyledRow = styled(Row)``;

const StyledCol = styled(Col)``;

export default function Products({ productsList }) {
  // const router = useRouter();
  // const { products } = router.query;
  return (
    <Container>
      {productsList ? (
        <StyledRow>
          {productsList.map((produto, key) => (
            <StyledCol key={key}>
              <ProductListItem
                key={key}
                href={`/product/${produto.id}`}
                produto={produto}
              />
            </StyledCol>
          ))}
        </StyledRow>
      ) : (
        <p>Carregando</p>
      )}
    </Container>
  );
}

export async function getServerSideProps(context) {
  const products = await api("filtrado", context.params.category.toString());
  return {
    props: {
      productsList: products,
    },
  };
}
