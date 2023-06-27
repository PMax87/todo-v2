import axios from "axios";
import moment from "moment";
import "moment/locale/it";
moment.locale("it");

const url = axios.create({
  baseURL:
    "https://multistrumento-backendo20230611165035.azurewebsites.net/api/Todo",
});

const formatDate = (date) => {
  if (date !== null) {
    const formattedDate = moment.utc(date).local().format("LLLL");
    return formattedDate;
  }
};

export { url, formatDate };
