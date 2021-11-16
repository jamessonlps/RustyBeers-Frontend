import { useState } from "react";
import { CardBeer } from "../../components/CardBeer";
import LoadingImage from '../../assets/loading.gif';
import { getBeersFilter } from "../../services/api";
import { BeersContainer, Container, InputContainer } from "./styles";

export function FiltersSearch() {
  const [search, setSearch] = useState('');
  const [option, setOption] = useState('');
  const [msg, setMsg]       = useState('');
  const [loading, setLoading]       = useState(false);
  const [beers, setBeers] = useState([]);

  async function handleSearch(event) {
    event.preventDefault();
    setLoading(true);
    setMsg('');

    if (option && search) {
      await getBeersFilter(option, search)
        .then((res) => {
          setBeers(res);
          setLoading(false);
          if (res.length === 0) {
            setMsg('No matches found');
          }
        })
        .catch((err) => {
          setMsg("Please try again");
          setLoading(false);
        })
    }

    setLoading(false);
  }

  return (
    <Container>
      <h1>Advanced search</h1>
      <InputContainer>
        <select 
          onChange={(event) => setOption(event.target.value)}>
          <option value="" selected disabled>Select a filter option</option>
          <option value="beer_name">Name</option>
          <option value="food">Food</option>
          <option value="yeast">Yeast</option>
          <option value="hops">Hops</option>
          <option value="malt">Malt</option>
        </select>

        <input 
          placeholder="Enter your search..."
          type="text" 
          onChange={event => setSearch(event.target.value)} 
        />

        <button type="submit" onClick={handleSearch} >Search</button>
      </InputContainer>

      <BeersContainer>
        {msg ? <h3>{msg}</h3> : null}
        {loading ? <img src={LoadingImage} style={{marginTop: '1.5rem'}} alt="loading"/> : null}
        {beers ? beers.map((item) => <CardBeer info={item} />) : null}
      </BeersContainer>
    </Container>
  );
}