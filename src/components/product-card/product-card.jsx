import './product-card.scss';
import {useContext} from 'react';
import Button, {ButtonsTypeClasses} from '../button/button';
import {CartContext} from '../../contexts/cart';

function ProductCard({product}) {

  const {name, price, imageUrl} = product;
  const {addItemToCart} = useContext(CartContext);
  const addProductToCart = ()=>addItemToCart(product);

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name}/>
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType={ButtonsTypeClasses.inverted} onClick={addProductToCart}>Добавить</Button>
    </div>
  );
}

export default ProductCard;
