import { useRouter } from "next/router";
import api from "../../api/api";

export default function ProductItem({ product }) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <h3> Carregando... </h3>;
  }

  return (
    <h1>
      Produto Item {product.id} {product.titulo}
    </h1>
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
