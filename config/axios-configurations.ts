import axios from "axios";

// routes
import { BASE_STAGING } from "@constants/routes";

// cookie
import cookie from "js-cookie";

axios.defaults.baseURL = BASE_STAGING;

export function setAxiosHeader(token: any) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = "JWT " + token;
  } else {
    axios.defaults.headers.common["Authorization"] = "";
  }
}

(function () {
  if (cookie.get("token_details")) {
    const token_details: any = cookie.get("token_details");
    const token = JSON.parse(token_details);
    if (token) {
      axios.defaults.headers.common.Authorization = `JWT ${token.access_token}`;
    } else {
      axios.defaults.headers.common.Authorization = "";
    }
  }
})();