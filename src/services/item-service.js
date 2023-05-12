import { myAxios } from "./helper";

export const add_Item = (item) => {
  return myAxios
    .post("/api/v1/item/add", item)
    .then((response) => response.data);
};
