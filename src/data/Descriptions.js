import BeerStyle from '../assets/beer-style.jpg';
import HopImage from '../assets/lupulo.jpg';
import YeastImage from '../assets/levedura.jpg';

export const optionsListHome = [
    {
        title: "Estilos de cervejas",
        description: "Acesse inúmeros estilos de cervejas diferentes, bem como seus respectivos parâmetros como gravidades inicial e final, IBU e gradação alcóolica.",
        to: "/cervejas",
        urlImage: BeerStyle,
    },
    {
        title: "Lúpulos",
        description: "Veja uma lista de lúpulos acompanhados de seus parâmetros técnicos, usos mais comuns, opções substitutivas e o respectivo páis de origem.",
        to: "/lupulos",
        urlImage: HopImage,
    },
    {
        title: "Leveduras",
        description: "Um imenso acervo de leveduras disponível para consulta, com diversos parâmetros técnicos que vão lhe ajudar na seleção da melhor opção.",
        to: "/leveduras",
        urlImage: YeastImage,
    }
];