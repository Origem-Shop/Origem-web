import axios from "axios";
import { readString } from "react-papaparse";

const getInfo = async () => {
  const sheetId = `1KD8ahmUMc1T8F6EYjTGj85QdsDewAixxw8nGbNz0m98`;
  let url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;

  const req = await axios.get(url);
  const results = readString(req.data, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: "greedy",
  });

  const sheet = results.data;

  return sheet;
};

const getProductList = async (productList) => {
  let filteredList = await productList
    .filter((product) => product.inativo !== true || product.inativo)
    .filter((product) => product.titulo && product.valor);

  return filteredList;
};

const getProductsCategory = async (productList) => {
  const categories = [];
  let actualCategory = "";

  await productList.map((item) => {
    if (
      actualCategory !== item.categoria &&
      (item.inativo === "FALSE" || !item.inativo) &&
      item.categoria &&
      item.categoria.length > 1
    ) {
      categories.push(item.categoria);
      actualCategory = item.categoria;
    }
    return true;
  });
  return categories;
};

export const getFilteredProducts = async (category) => {
  const products = await api("produtos");

  const filtered = await products.filter(
    (product) => product.categoria === category
  );

  return filtered;
};

export const getProductById = async (id, productList) => {
  let product = await productList.filter((produto) => produto.id === id);
  return product;
};

export default async function api(tipo, categoria, id) {
  const sheet = await getInfo();
  const productList = await getProductList(sheet);
  var productsWithID = productList.map((produto, index) => {
    produto.id = (index + 1).toString();
    return produto;
  });
  const products = productsWithID;
  const categories = await getProductsCategory(products);

  if (tipo === "produtos") {
    return products;
  } else if (tipo === "categorias") {
    return categories;
  } else if (tipo === "filtrado") {
    const filtrados = await getFilteredProducts(categoria);
    return filtrados;
  } else if (tipo === "vazio") {
    return null;
  } else if (tipo === "id") {
    const product = await getProductById(id, products);
    return product[0];
  } else {
    return {
      categories,
      products,
    };
  }
}
