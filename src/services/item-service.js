import { myAxios } from "./helper";

//api for add items
export const add_Item = async (item) => {
  const response = await myAxios.post("/api/v1/item/add", item);
  return response.data;
};
//api for getting all items from list
export const getItems = async () => {
  const response = await myAxios.get("/api/v1/item/viewAll");
  return response.data;
};
//api for search items by both name and description
export const searchItems = async (keyword) => {
  const response = await myAxios.get("/api/v1/item/search-item", {
    params: {
      name: keyword,
    },
  });
  return response.data;
};
