// a function module that makes asynchronous ajax requests using axios.

import Axios from "axios";

export default function ajax(base, url, data = {}, type = "GET") {
  const axiosClient = Axios.create({ baseURL: base });

  let promise;
  switch (type) {
    case "GET":
      promise = axiosClient.get(url, {
        params: data,
      });
      break;
    case "POST":
      promise = axiosClient.post(url, {
        ...data,
      });
      break;
    default:
      promise = axiosClient.get(url, {
        params: data,
      });
  }

  return promise
    .then((result) =>
      result.data.map((x) => Object.assign({}, x, { id: x.id + "" }))
    )
    .catch((err) => {
      if (err.response.status === 404) {
        throw new Error(`${url} not found`);
      }
      throw new Error(`failed to request server`);
    });
}
