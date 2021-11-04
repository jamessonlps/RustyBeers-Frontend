import { Container } from "./styles";

import LeveduraImg from '../../assets/levedura.jpg'

export function CardSection(props) {
    return (
        <Container>
            <img src={props.urlImage} alt="image" typeof="image/jpg" width="200" />
            <div>
                <h2>{props.title}</h2>
                <p>
                    {props.description}
                </p>
            </div>
            <button>
                Ver conteúdo
            </button>
        </Container>
    );
}