import axios from "axios";

export async function getAllBeers(page, perPage=80) {
    let beers = await axios.get(
        `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`,
        {
            Headers: {
                'Accept': "application/json",
                'Content-Type': "application/json",
                'Access-Control-Allow-Origin': "*",
            }
        }
    ).then((res) => res.data)
    .catch((err) => alert("Error"));

    return beers;
}