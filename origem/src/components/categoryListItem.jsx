import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const Categoria = styled.div`
  flex-direction: row;
  margin: 0.2rem 1rem;
  font-size: xx-large;
`;

export default function CategoryListItem({ href, categoria }) {
  return (
    <Link href={href}>
      <Categoria className="d-grid gap-2">
        <Button size="lg" variant="outline-dark">
          {categoria}
        </Button>
      </Categoria>
    </Link>
  );
}
