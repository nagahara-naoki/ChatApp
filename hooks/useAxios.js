import axios from "axios";
import camelcaseKeys from "camelcase-keys";

export const useAxios = () => {
  const instance = axios.create({
    headers: { "Content-Type": "application/json" },
    responseType: "json",
    baseURL: "https://slack-1ea21-default-rtdb.firebaseio.com/",
  });
  instance.interceptors.response.use((res) => {
    return camelcaseKeys(res, { deep: true });
  });
  return { axios: instance };
};
