import './menu.scss';
import {Fragment} from 'react';
import {Outlet, Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo.svg'

function Menu() {
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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Menu
