import axios from "axios";

const nobelPrize = axios.create({
  baseURL: "https://api.nobelprize.org/2.1",
  params: { sort: "asc", limit: 1000 },
});

export default nobelPrize;
