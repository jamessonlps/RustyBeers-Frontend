import { useState } from "react";
import { DetailsTable } from "../../components/DetailsTable";
import { Container, DetailsContainer, ImageTitleContainer } from "./styles";

export function BeerView({ location }) {
    const data = location.state;
    const [optionToView, setOptionToView] = useState(0);

    return (
        <Container>
            <ImageTitleContainer>
                <img src={data.image_url} width="128px" />
                <div>
                    <h1>{data.name}</h1>
                    <p className="tagline">"{data.tagline}"</p>
                    <p className="brewed">First brewed: {data.first_brewed}</p>

                    <a>Adicionar aos favoritos</a>
                </div>
            </ImageTitleContainer>

            <DetailsContainer>
                <div>
                    <button 
                        className={optionToView === 0 ? "isActive" : ""}
                        onClick={() => {
                            setOptionToView(0);
                        }}>Details</button>
                    <button 
                        className={optionToView === 1 ? "isActive" : ""}
                        onClick={() => {
                            setOptionToView(1);
                        }}>Ingredients</button>
                    <button 
                        className={optionToView === 2 ? "isActive" : ""}
                        onClick={() => {
                            setOptionToView(2);
                        }}>Food pairing</button>
                </div>

                {optionToView === 0 ? (
                    <div className="details">
                        <h2>Decription</h2>
                        <p>{data.description}</p>

                        <DetailsTable data={data} />

                        <h2>Brewer tips</h2>
                        <p>{data.brewers_tips}</p>

                    </div>
                ) : optionToView === 1 ? (
                    <h2>Ingredients</h2>
                ) : (
                    <h2>Detalhes</h2>
                )}

                
                
            </DetailsContainer>

            {/* <p>volume: {data.volume}</p>
            <p>boil_volume: {data.boil_volume}</p>
            <p>method: {data.method}</p>
            <p>ingredients: {data.ingredients}</p>
            <p>food_pairing: {data.food_pairing}</p> */}
        </Container>
    )
}