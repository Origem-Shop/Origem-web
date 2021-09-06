import { useRouter } from "next/router";
import api from "../../api/api";
import Link from "next/link";

export default function Products({ productsList }) {
  const router = useRouter();
  const { products } = router.query;
  return (
    <>
      {productsList ? (
        <div>
          {productsList.map((produto, key) => (
            <Link href={`/product/${produto.id}`} key={key}>
              <div key={key}> {produto.titulo} </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>Carregando</p>
      )}
    </>
  );
}

export async function getServerSideProps(context: any) {
  const products = await api("filtrado", context.params.category.toString());
  return {
    props: {
      productsList: products,
    },
  };
}
