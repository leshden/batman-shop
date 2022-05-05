import {useContext} from 'react';
import Button from '../button/button';
import CartItem from '../cart-item/cart-item';
import {CartContext} from '../../contexts/cart';
import {useNavigate} from 'react-router-dom';
import {CartDropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles';

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (cartItems.map(item => <CartItem key={item.id} cartItem={item} />)) :
        (<EmptyMessage>Пусто</EmptyMessage>)}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Оформить</Button>
    </CartDropdownContainer>
  );
}

export default CartDropdown;
