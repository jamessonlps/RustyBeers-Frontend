import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useUser } from '../../hooks/useContextUser';
import { removeFromFavorites } from "../../services/api";
import { ButtonsContainer, Container, HeaderCard } from "./styles";
import BeerDefaultImage from '../../assets/default.png';
import DeleteImage from '../../assets/trash.png';

export function CardBeer(props) {
    const path = window.location.pathname;
    const [loadingRemove, setLoadingRemove] = useState(false);
    const { userData } = useUser();

    const history = useHistory();

    async function handleRemoveBeer(event) {
        event.preventDefault();
        setLoadingRemove(true);

        await removeFromFavorites(props.info.id, userData.email)
            .then((res) => {
                // tratar o tipo de resposta (sucesso ou falha)
                alert('Beer successfully removed');
                setLoadingRemove(false);
                history.push('/beers');
            })
            .catch((err) => alert('some error ocurred'));
    }

    return (
        <Container>
            <h3>{props.info.name}</h3>
            <HeaderCard>
                {props.info.image_url ? (
                    <img src={props.info.image_url} width='32px' alt="beer"/>
                ) : (
                    <img src={BeerDefaultImage} height='64px' alt="beer"/>
                )}
                
                <div>
                    <p>"{props.info.tagline}"</p>
                </div>
            </HeaderCard>
            
            <p>
                First brewed: {props.info.first_brewed}
            </p>
            
            <p className="description" >{props.info.description}</p>
            
            {path === '/favorites' ? (
                <ButtonsContainer>
                    <Link 
                        to={{
                            pathname: `beers/${props.info.id}`, 
                            state: {...props.info}
                        }}>See more
                    </Link>
                    <button 
                        disabled={loadingRemove === true}
                        type="submit" 
                        onClick={handleRemoveBeer}>
                            <img src={DeleteImage} height="32px" />
                    </button>
                </ButtonsContainer>
            ) : (
                <Link 
                    to={{
                        pathname: `beers/${props.info.id}`, 
                        state: {...props.info}
                    }}>See more
                </Link>
            )}

        </Container>
    )
}