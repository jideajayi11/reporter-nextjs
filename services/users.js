import httpRequest from "../utilities/fetchApi";
import endpoints from "../config/endpoints";

export const login = ({ email, password }) => {
  return httpRequest({
    url: endpoints.login,
    method: "POST",
    body: { email, password },
  });
}
