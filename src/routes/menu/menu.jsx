import {MenuContainer, LogoContainer, MenuLinks, MenuLink, LogImg} from './menu.styles';
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
      <MenuContainer>
        <LogoContainer to='/'>
          <LogImg />
        </LogoContainer>
        <MenuLinks>
          <MenuLink to='/shop'>
            Магазин
          </MenuLink>
          {
            currentUser ? (<MenuLink onClick={signOutHandler}> Выйти </MenuLink>)
                        : (<MenuLink to='/sign-in'>
              Войти
            </MenuLink>)
          }
          <CartIcon />
        </MenuLinks>
        { isCartOpen && <CartDropdown />}
      </MenuContainer>
      <Outlet />
    </Fragment>
  );
}

export default Menu
