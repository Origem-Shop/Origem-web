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

export const getProductList = async (productList) => {
  let filteredList = await productList
    .filter((product) => product.inativo !== true || product.inativo)
    .filter((product) => product.titulo && product.valor);

  return filteredList;
};

export const getProductsCategory = async (productList) => {
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

export default async function teste() {
  let sheet = await getInfo();
  let products = await getProductList(sheet);
  let categories = await getProductsCategory(products);
  console.log("Produtos", products, "\nCategorias", categories);
}
