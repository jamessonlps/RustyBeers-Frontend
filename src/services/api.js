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

export async function getBeersByIds(ids_list) {
  let string;
  if (ids_list.length > 0) {
    string = ids_list
      .map(item => item.toString())
      .reduce((a, b) => a + '|' + b);
  }
  let beers = await axios.get(
    `https://api.punkapi.com/v2/beers?ids=${string}`,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  )
  .then((res) => res.data)
  .catch((err) => err.message);

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

export async function register(name, lastname, email, password) {
  let response = await axios({
    method: 'post',
    url: 'http://localhost:8000/api/auth/register/',
    data: {
      'name': name,
      'lastname': lastname,
      'email': email,
      'password': password
    },
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then((res) => res.data)
  .catch((err) => err.message);

  return response;
}

export async function getFavoritesBeers(email) {
  let response = await axios({
    method: 'post',
    url: 'http://localhost:8000/api/get/favorite/',
    data: {
      'email': email
    },
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then((res) => res.data)
  .catch((err) => err.message);
  
  return response;
}

export async function addToFavorites(beer_id, email) {
  let response = await axios({
    method: 'post',
    url: 'http://localhost:8000/api/add/favorite/',
    data: {
      'email': email,
      'beer_id': beer_id
    },
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then((res) => res.data)
  .catch((err) => err.message);

  return response;
}

export async function removeFromFavorites(beer_id, email) {
  /**
   * Caso seja sucesso, retorna { 'favorites': Array() }
  */
  let response = await axios({
    method: 'post',
    url: 'http://localhost:8000/api/remove/favorite/',
    data: {
      'email': email,
      'beer_id': beer_id
    },
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then((res) => res.data)
  .catch((err) => err.message);

  return response;
}