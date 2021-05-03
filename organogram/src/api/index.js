import axios from "axios";

const BASE_URL = "http://localhost:61981/api/";

export const END_POINTS = {
  // CUSTOMER: "Customer",
  // ORDER: "Order",
  // FOODITEM: "FoodItem",
  DEPARTMENT: "Departments",
};

export const CreateAPIEndPoint = (endpoint) => {
  let url = BASE_URL + endpoint + "/";

  return {
    fetchAll: () => axios.get(url),
    fetchByID: (id) => axios.get(url + id),
    create: (newRecord) => axios.post(url, newRecord),
    update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
    delete: (id) => axios.delete(url + id),
  };
};
