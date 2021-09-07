import api from "../../api/api";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import ProductListItem from "../../components/productGrid";
import React from "react";
import Link from "next/link";
import { Container, Row, Col, CardGroup, Card } from "react-bootstrap";
import styled from "styled-components";

const StyledRow = styled(Row)``;

const StyledCol = styled(Col)``;

export default function ListAllProducts(props) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <h3> Carregando... </h3>;
  }
  return (
    <Container>
      <StyledRow>
        {props.products.map((produto, key) => (
          <StyledCol key={key}>
            <ProductListItem
              key={key}
              href={`/product/${produto.id}`}
              produto={produto}
            />
          </StyledCol>
        ))}
      </StyledRow>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await api("produtos");
  return {
    props: {
      products: products,
    },
    revalidate: 100,
  };
};
