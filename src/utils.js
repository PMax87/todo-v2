import axios from "axios";

const url = axios.create({
  baseURL:
    "https://multistrumento-backendo20230611165035.azurewebsites.net/api/Todo",
});

export default url;
