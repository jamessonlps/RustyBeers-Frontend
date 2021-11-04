import { Container, CardsSectionContainer, CalculatorContainer, HeaderContent } from './styles';
import { CardSection } from '../../components/CardSection';

import BackgroundImage from '../../assets/background.jpg';
import CalculatorImage from '../../assets/cerveja-calculadora.jpg';

import { optionsListHome } from '../../data/Descriptions';

export function HomePage() {
    return (
        <Container>
            <div style={MainTitle}>
                <HeaderContent>
                    <h2>
                        O maior acervo de estilos de cervejas, lúpulos e 
                        leveduras, além de calculadoras específicas para o seu 
                        negócio no ramo da cervejaria.
                    </h2>
                    <a href="#start">Explorar</a>
                </HeaderContent>
            </div>

            <h1 id="start">Confira as nossas seções</h1>

            <CardsSectionContainer>
                {optionsListHome.map((item, index) => { return (
                    <CardSection 
                        title={item.title} 
                        description={item.description} 
                        to={item.to}
                        urlImage={item.urlImage}
                    />
                ) })}
            </CardsSectionContainer>

            <div className="title-calculator">
                <h1>Nossa calculadora</h1>
            </div>
            
            <CalculatorContainer>
                <div>
                    <img src={CalculatorImage} alt="calculadora" typeof="image/jpg" width={500} />
                </div>
                <div className="text-calculator-container">
                    <h2>
                        A melhor ferramenta para ajudar você no seu bar ou na sua indústria:
                    </h2>
                    <ul>
                        <li>&#127867; Calcular álcool por volume</li>
                        <li>&#127867; Calcular gravidade final</li>
                        <li>&#127867; Calcular número de garrafas</li>
                    </ul>

                    <button>Calcular agora</button>
                </div>
            </CalculatorContainer>
        </Container>
    );
}

const MainTitle = {
    backgroundImage: `url(${BackgroundImage})`,
    width: '100%',
    minHeight: '85vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 3rem',
}