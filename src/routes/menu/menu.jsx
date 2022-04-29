import './menu.scss';
import {Fragment, useContext} from 'react';
import {Outlet, Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo.svg'
import {UserContext} from '../../contexts/user';
import {CartContext} from '../../contexts/cart';
import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';

function Menu() {
  const {currentUser, setCurrentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  const signOutHandler = () => {
    setCurrentUser(null);
  }

  return (
    <Fragment>
      <div className='menu'>
        <Link className='menu-logo' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='menu-links'>
          <Link className='menu-link' to='/shop'>
            Магазин
          </Link>
          {
            currentUser ? (<span className='menu-link' onClick={signOutHandler}> Выйти </span>)
                        : (<Link className='menu-link' to='/sign-in'>
              Войти
            </Link>)
          }
          <CartIcon />
        </div>
        { isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Menu
