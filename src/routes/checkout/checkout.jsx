import './checkout.scss';
import {useContext} from 'react';
import {CartContext} from '../../contexts/cart';
import CheckoutItem from '../../components/checkout-item/checkout-item';

const Checkout = () => {
  const {cartItems, cartTotal} = useContext(CartContext);

  return(
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Товары</span>
        </div>
        <div className='header-block'>
          <span>Описание</span>
        </div>
        <div className='header-block'>
          <span>Количество</span>
        </div>
        <div className='header-block'>
          <span>Цена</span>
        </div>
        <div className='header-block'>
          <span>Удалить</span>
        </div>
      </div>
      {
        cartItems.map((cartItem) => {

          return (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          )
        })
      }
      <span className='total'>Общее: ${cartTotal}</span>
    </div>
  );
}

export  default Checkout;
