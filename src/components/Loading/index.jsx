import { Container } from "./styles";
import LoadingGif from '../../assets/loading.gif';

export function Loading() {
    return (
        <Container>
            <div>
                <img src={LoadingGif} alt="loading" />
            </div>
            <p>Loading...</p>
        </Container>
    );
}