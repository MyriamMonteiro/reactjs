import './AnimalCard.css';

const AnimalCard = ({ animal }) => {
    return (
        <div className='animal-card'>
            <div className='animal-image-wrapper'>
                <img src={animal.image} alt={animal.name} />
            </div>
            <p className='animal-name'>{animal.name}</p>
        </div>
    );
}

export default AnimalCard;