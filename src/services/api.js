import axios from "axios";

export async function getAllBeers(page, perPage=80) {
  let beers = await axios.get(
    `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`,
    {
      Headers: {
        'Accept': "application/json",
        'Content-Type': "application/json",
      }
    }
  ).then((res) => res.data)
  .catch((err) => alert("Error"));

  return beers;
}

export async function loggin(email, password) {
  let response = axios({
    method: 'post',
    url: 'http://localhost:8000/api/auth/',
    data: {
      'email': email,
      'password': password
    },
    headers: {
      'Accept': "application/json",
      'Content-Type': "application/json",
    }
  })
  .then((response) => response.data)
  .catch((err) => err.message);

  return response;
}