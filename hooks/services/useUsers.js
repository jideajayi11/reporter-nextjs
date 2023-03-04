import useFetch from "../useFetch";
import endpoints from "../../config/endpoints";

export const useUsersLogin = ({ email, password }, __makeRequest) => {
  return useFetch({
    url: endpoints.login,
    method: "POST",
    body: { email, password },
  }, __makeRequest);
};
