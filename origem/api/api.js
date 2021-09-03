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

export default async function api(tipo) {
  const sheet = await getInfo();
  const products = await getProductList(sheet);
  const categories = await getProductsCategory(products);

  // console.log("tipo", tipo);
  if (tipo === "produtos") {
    // console.log("API Produtos");
    return products;
  } else if (tipo === "categorias") {
    // console.log("API Categorias");
    return categories;
  } else {
    // console.error("API incorreta");
    return [];
  }
}
