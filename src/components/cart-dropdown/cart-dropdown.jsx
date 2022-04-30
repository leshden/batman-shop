import './cart-dropdown.scss';
import {useContext} from 'react';
import Button from '../button/button';
import CartItem from '../cart-item/cart-item';
import {CartContext} from '../../contexts/cart';
import {useNavigate} from 'react-router-dom';

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  }

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
      </div>
      <Button onClick={goToCheckoutHandler}>Оформить</Button>
    </div>
  );
}

export default CartDropdown;
