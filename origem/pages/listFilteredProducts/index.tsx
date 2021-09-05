import Link, { GetStaticProps } from "next";
import { useRouter } from "next/router";
import api from "../../api/api";
import ProductList from "../../components/productList";

export default function ProductsByCategories() {
  const { query } = useRouter();
  console.log(query);
  return (
    <div>
      Lista de Produtos Filtrados
      <ProductList category={query.category} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      categories: await api("vazio"),
    },
    revalidate: 100,
  };
};
