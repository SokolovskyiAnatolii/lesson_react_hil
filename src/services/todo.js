import axios from "axios";
const API = `https://jsonplaceholder.typicode.com/`;

const todo = {
  get: (path) => axios(API + path).then(({ data }) => data),
  delete: (path, id) =>
    axios.delete(API + path + `/${id}`).then(({ data }) => data),
  patch: (path, id, playload) =>
    axios
      .patch(API + path + `/${id}`, playload, {
        headers: { "Contant-type": "application/json" },
      })
      .then(({ data }) => data),
};

export default todo;
