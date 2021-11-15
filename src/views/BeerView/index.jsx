import { useState } from "react";
import { useUser } from '../../hooks/useContextUser';
import { DetailsTable } from "../../components/DetailsTable";
import { addToFavorites } from "../../services/api";
import { Container, DetailsContainer, ImageTitleContainer } from "./styles";
import DefaultImage from '../../assets/default.png';

export function BeerView({ location }) {
    const data = location.state;
    const [optionToView, setOptionToView] = useState(0);

    const { userData } = useUser();

    async function handleAddToFavorites(event) {
        event.preventDefault();

        await addToFavorites(data.id, userData.email)
            .then((res) => {
                if (userData.email) {
                    alert(res);
                }
                else {
                    alert('You must be logged');
                }
            })
            .catch((err) => {
                alert(err.message);
            });
    }

    return (
        <Container>
            <ImageTitleContainer>
                <img src={data.image_url || DefaultImage} width="128px" />
                <div>
                    <h1>{data.name}</h1>
                    <hr width="90%" />
                    <p className="tagline">"{data.tagline}"</p>
                    <p>{data.description}</p>
                    <p className="brewed">First brewed: {data.first_brewed}</p>
                    <button type="submit" onClick={handleAddToFavorites}>Add to favorites</button>
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
                        <h2>Brewer tips</h2>
                        <p>{data.brewers_tips}</p>
                        <DetailsTable data={data} />
                    </div>
                ) : optionToView === 1 ? (
                    <div className="details">
                        <h2>Ingredients</h2>
                        <p className="topic">Malts</p>
                        <ul>
                            {data.ingredients.malt.map(item => (
                                <li>&#129372; {item.name}: {item.amount.value} {item.amount.unit}</li>
                            ))}
                        </ul>

                        <p className="topic">Hops</p>
                        <ul>
                            {data.ingredients.hops.map(item => (
                                <li>&#127807; {item.name}: {item.amount.value} {item.amount.unit}, addition in the {item.add}, its attribute is the {item.attribute}</li>
                            ))}
                        </ul>

                        <p className="topic">Yeast</p>
                        <p>{data.ingredients.yeast}</p>
                    </div>
                ) : (
                    <div className="details">
                        <h2>Food pairing</h2>
                        {data.food_pairing.map(item => (
                            <p className="items">&#127860; {item}</p>
                        ))}
                    </div>
                )}
            </DetailsContainer>

        </Container>
    )
}