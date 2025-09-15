import './CategoryCard.css';
import { ChevronRight } from 'akar-icons';

const CategoryCard = ({ categoria }) => {
    return (
        <div className='category-card'>
            <div className='card-image-wrapper'>
                <img className='category-image' src={categoria.image} alt={categoria.title}/>
            </div>

            <div className='card-info'>
                <div className='card-text'>
                    <h3 className='card-title'>{categoria.title}</h3>
                    <p className='product-count'>{categoria.productCount}</p>
                </div>

                <div className='arrow-icon'>
                    <ChevronRight />
                </div>
            </div>
        </div>
    );
    
}

export default CategoryCard;