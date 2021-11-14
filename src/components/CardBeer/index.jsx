import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useUser } from '../../hooks/useContextUser';
import { removeFromFavorites } from "../../services/api";
import { Container, HeaderCard } from "./styles";

export function CardBeer(props) {
    const path = window.location.pathname;
    const [loading, setLoading] = useState(false);
    const { userData } = useUser();

    const history = useHistory();

    async function handleRemoveBeer(event) {
        event.preventDefault();
        setLoading(true);

        await removeFromFavorites(props.info.id, userData.email)
            .then((res) => {
                // tratar o tipo de resposta (sucesso ou falha)
                alert('Beer successfully removed');
                history.push('/beers');
            })
            .catch((err) => alert('some error ocurred'));
    }

    return (
        <Container>
            <h3>{props.info.name}</h3>
            <HeaderCard>
                <img src={props.info.image_url} width='32px' alt="beer"/>
                <div>
                    <p>"{props.info.tagline}"</p>
                </div>
            </HeaderCard>
            
            <p>
                First brewed: {props.info.first_brewed}
            </p>
            
            <p className="description" >{props.info.description}</p>
            
            {path === '/favorites' ? (
                <div>
                    <Link 
                        to={{
                            pathname: `beers/${props.info.id}`, 
                            state: {...props.info}
                        }}>See more
                    </Link>
                    <button 
                        type="submit" 
                        onClick={handleRemoveBeer}>
                            Remove from favorites
                    </button>
                </div>
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