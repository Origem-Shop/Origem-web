import Link from "next/link";
import styled from "styled-components";

const Categoria = styled.div`
  text-align: center;
  &:hover {
  }
`;

export default function CategoryListItem({ href, categoria }) {
  return (
    <Link href={href}>
      <Categoria>{categoria}</Categoria>
    </Link>
  );
}
