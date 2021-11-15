import { Container, CardsSectionContainer, CalculatorContainer, HeaderContent, CardsSectionContent, Card, CalculatorSectionContainer, CalculatorContent } from './styles';

import BackgroundImage from '../../assets/background.jpg';
import CalculatorImage from '../../assets/cerveja-calculadora.jpg';
import BeersImage from '../../assets/beers.jpg';

import { Link } from 'react-router-dom';

export function HomePage() {
    return (
        <Container>
            <section style={MainTitle}>
                <HeaderContent>
                    <h2>
                        The largest and most complete collection of beer styles on the 
                        Internet, with technical information for your business and 
                        the best tips to better serve your drink.
                    </h2>
                    <a href="#start">Explore</a>
                </HeaderContent>
            </section>

            <CardsSectionContainer id="start">
                <h1>Our content</h1>
                <hr />
                <CardsSectionContent>
                    <div>
                        <Card>
                            <h2>Brewer's Tips</h2>
                            <p>
                                Discover the best tips for each of the beers so you can 
                                prepare and serve them with an incredible experience.
                            </p>
                        </Card>
                        <Card>
                            <h2>Ingredients</h2>
                            <p>
                                Discover the ingredients needed to brew your ideal 
                                beer, from the malts, hops and yeast needed to brew it.
                            </p>
                        </Card>
                        <Card>
                            <h2>Food pairing</h2>
                            <p>
                                Know which foods each drink is best suited to, and serve 
                                the beer that best suits each circumstance.
                            </p>
                        </Card>
                    </div>

                    <div>
                        <img src={BeersImage} alt="beers" />
                        <Link to="/beers">See more</Link>
                    </div>
                </CardsSectionContent>
            </CardsSectionContainer>

            
            <CalculatorSectionContainer>
                <h1>Calorie calculator</h1>
                <hr />
                <CalculatorContent>
                    <div>
                        <img src={CalculatorImage} alt="calculadora" typeof="image/jpg" width={500} />
                    </div>
                    <div className="text-calculator-container">
                        <h2>
                            The best tool to help you in your bar or in your industry:
                        </h2>
                        <ul>
                            <li>&#127867; Calculate alcohol by volume</li>
                            <li>&#127867; Calculate beer Calories</li>
                        </ul>

                        <Link to="/calculator">Open calculator</Link>
                    </div>
                </CalculatorContent>
            </CalculatorSectionContainer>
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