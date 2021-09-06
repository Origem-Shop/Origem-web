import { useRouter } from "next/router";

export default function ProductItem() {
  const router = useRouter();
  const { productItem } = router.query;
  return <h1> Produto Item {productItem}</h1>;
}
