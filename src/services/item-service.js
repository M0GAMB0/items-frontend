import { myAxios } from "./helper";

export const add_Item = async (item) => {
  const response = await myAxios.post("/api/v1/item/add", item);
  return response.data;
};
export const getItems = async () => {
  const response = await myAxios.get("/api/v1/item/viewAll");
  return response.data;
};
export const searchItems = async (keyword) => {
  const response = await myAxios.get("/api/v1/item/search-item", {
    params: {
      name: keyword,
    },
  });
  return response.data;
};
