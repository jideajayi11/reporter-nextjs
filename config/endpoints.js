import { BASE_URL } from "./settings";

const endpoints = {
  login: `${BASE_URL}/user/login`,
  user: `${BASE_URL}/user`,
  department: `${BASE_URL}/department`,
  reportfield: `${BASE_URL}/reportfield`,
  report: `${BASE_URL}/report`,
};
export default endpoints;
