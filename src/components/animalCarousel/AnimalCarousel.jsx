import GatoImg from '../../assets/Gato.svg';
import HamsterImg from '../../assets/Hamster.svg';
import CachorroImg from '../../assets/Cachorro.svg';
import PapagaioImg from '../../assets/Papagaio.svg';
import CoelhoImg from '../../assets/Coelho.svg';
import TartarugaImg from '../../assets/Tartaruga.svg';
import Carousel from '../carousel/Carousel.jsx'
import AnimalCard from '../animalCard/AnimalCard.jsx'

const animais = [
    { name: 'Gato', image: GatoImg }, // INDEX 0
    { name: 'Hamster', image: HamsterImg }, // INDEX 1
    { name: 'Cachorro', image: CachorroImg }, // INDEX 2
    { name: 'Papagaio', image: PapagaioImg },
    { name: 'Coelho', image: CoelhoImg }, 
    { name: 'Tartaruga', image: TartarugaImg }
]

const AnimalCarousel = () => {
    return (
        <Carousel 
            title={"Compre a partir do seu Pet"}
            items={animais}
            RenderComponent={({ item }) => <AnimalCard animal={item}/>}
        />
    );
}

export default AnimalCarousel;