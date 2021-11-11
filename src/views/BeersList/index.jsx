import { useEffect, useState } from "react";
import { Container, ListBeersContainer, Pagination } from "./styles";
import { CardBeer } from "../../components/CardBeer";
import { Loading } from '../../components/Loading/index';

import { getAllBeers } from "../../services/api";

export function BeersList() {
    const [beersList, setBeersList] = useState([]);
    const [loadingBeers, setLoadingBeers] = useState(true);
    const [msgFromLoading, setMsgFromLoading] = useState('');

    const [page, setPage] = useState(1);

    useEffect(() => {
        getAllBeers(page)
        .then(res => {
            setBeersList(res);
            setLoadingBeers(false);
        })
        .catch((err) => {
            setLoadingBeers(false);
            setMsgFromLoading("Unable to load beers. Please try again.")
        })
    }, [page]);

    if (loadingBeers) {
        return (
            <Loading />
        );
    }
    else {
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
}