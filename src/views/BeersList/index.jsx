import axios from "axios";
import { useEffect, useState } from "react";
import { Container, ListBeersContainer, Pagination } from "./styles";
import { CardBeer } from "../../components/CardBeer";

export function BeersList() {
    const [beersList, setBeersList] = useState([]);
    const [loadingBeers, setLoadingBeers] = useState(true);
    const [msgFromLoading, setMsgFromLoading] = useState('');

    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get(
            `https://api.punkapi.com/v2/beers?page=${page}&per_page=80`,
            {
                Headers: {
                    'Accept': "application/json",
                    'Content-Type': "application/json",
                    'Access-Control-Allow-Origin': "*",
                }
            }
        ).then(res => {
            setBeersList(res.data);
            setLoadingBeers(false);
        })
        .catch((err) => {
            setLoadingBeers(false);
            setMsgFromLoading("Unable to load drinks. Please try again.")
        })
    }, [page]);

    return (
        <Container>
            <ListBeersContainer>
                {beersList.map(item => {return (
                    <CardBeer info={item} />
                )})}
            </ListBeersContainer>

            <Pagination>
                <button 
                    className={page === 1 ? "isActive" : ""} 
                    onClick={() => {
                        setPage(1);
                        window.scrollTo(0, 0);
                    }}>1</button>
                <button 
                    className={page === 2 ? "isActive" : ""} 
                    onClick={() => {
                        setPage(2);
                        window.scrollTo(0, 0);
                    }}>2</button>
                <button 
                    className={page === 3 ? "isActive" : ""} 
                    onClick={() => {
                        setPage(3);
                        window.scrollTo(0, 0);
                    }}>3</button>
                <button 
                    className={page === 4 ? "isActive" : ""} 
                    onClick={() => {
                        setPage(4);
                        window.scrollTo(0, 0);
                    }}>4</button>
                <button 
                    className={page === 5 ? "isActive" : ""} 
                    onClick={() => {
                        setPage(5);
                        window.scrollTo(0, 0);
                    }}>5</button>
            </Pagination>
        </Container>
    );
}