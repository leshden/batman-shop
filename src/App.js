import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Home from './routes/home/home';
import {Routes, Route} from 'react-router-dom';
import Menu from './routes/menu/menu';
import Autorisation from './routes/autorisation/autorisation';
import Shop from './routes/shop/shop';
import Checkout from './routes/checkout/checkout';
import {setCurrentUser} from './store/user/user.action';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{

    //dispatch(setCurrentUser(user));

  }, []);
    return(
      <Routes>
        <Route path='/' element={<Menu />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='sign-in' element={<Autorisation />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    );
}

export default App;
