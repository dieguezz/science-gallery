import axios from "axios";
import { mapToListModel, mapToItem } from "./nasa.service.helpers";

function fetchNasaList({ page, searchStr }) {
  return axios({
    method: "GET",
    url: "https://images-api.nasa.gov/search",
    params: { media_type: "image", page, q: searchStr }
  });
}

export async function getNasaList(query) {
  return mapToListModel(await fetchNasaList(query));
}

export async function getNasaItem(id) {
  const item = await fetchNasaList({ page: 1, searchStr: id});
  return mapToItem({...item.data.collection.items[0].data[0], links: item.data.collection.items[0].links})
}
