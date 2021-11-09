import { Container, HeaderCard } from "./styles";
import { Link } from "react-router-dom";

export function CardBeer(props) {
    return (
        <Container>
            <h3>{props.info.name}</h3>
            <HeaderCard>
                <img src={props.info.image_url} width='32px'/>
                <div>
                    <p>"{props.info.tagline}"</p>
                </div>
            </HeaderCard>
            
            <p>
                First brewed: {props.info.first_brewed}
            </p>
            
            <p className="description" >{props.info.description}</p>
            
            <Link 
                to={{
                    pathname: `cervejas/${props.info.id}`, 
                    state: {...props.info}
                }}>Ver mais
            </Link>

        </Container>
    )
}