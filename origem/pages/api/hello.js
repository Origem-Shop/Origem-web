import axios from "axios";
import { readString } from "react-papaparse";

const getInfo = async () => {
  const sheetId = `1KD8ahmUMc1T8F6EYjTGj85QdsDewAixxw8nGbNz0m98`;
  let url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;

  const req = await axios.get(url);
  // console.log("getInfo", req.data);

  // let results = csvToJson.getJsonFromCsv(req.data);
  // console.log(results);
  const results = readString(req.data, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: "greedy",
  });
  // console.log(results.data);

  let filtrados = handleProductList(results.data);

  return filtrados;
};

const handleProductList = async (productList) => {
  // Função repsonsável por manipulações de dados na lista de produtos
  // como filtros e alterações eventuais de valores
  console.log("te", productList);
  let filteredList = await productList
    .filter((product) => product.inativo !== true || product.inativo)
    .filter((product) => product.titulo && product.valor);

  return filteredList;
};

export default async function teste() {
  let brauzin = await getInfo();
  console.log(brauzin);
}
