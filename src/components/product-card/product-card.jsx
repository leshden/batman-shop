import './product-card.scss';
import Button from '../button/button';

function ProductCard({product}) {
  const {name, price, imageUrl} = product;
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name}/>
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted'>Добавить</Button>
    </div>
  );
}

export default ProductCard;
