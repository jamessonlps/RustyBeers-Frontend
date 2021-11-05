import axios from "axios";
import { useEffect } from "react";
import { Container } from "./styles";

export function BeersView() {
    useEffect(() => {
        axios.get(
            "https://rustybeer.herokuapp.com/styles",
            {
                Headers: {
                    'Accept': "application/json",
                    'Content-Type': "application/json",
                    'Access-Control-Allow-Origin': "*",
                }
            }
        ).then(res => console.log(res.data))
    }, [])

    return (
        <Container>
            <h1>Olá mundo</h1>
        </Container>
    );
}