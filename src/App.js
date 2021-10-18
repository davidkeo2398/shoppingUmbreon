import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navbar/navbarComponent';
import { Divider } from '@material-ui/core';
import { Slider } from './components/carousel/carouselComponent';
import { Home } from './components/home/homeComponent';
import { Route, Switch } from 'react-router';
import { ProductDetails } from './components/feature/productDetails/productDetailsComopent';
import { createContext, useState } from 'react';
import { Cart } from './components/cart/cartComponent';
import { Shop } from './components/shop/shopComponent';
import { Login } from './components/login/loginComponent';

export const MyContext = createContext();

function App() {
  const [keyWord, setKeyWord] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)
  const [isDisable, setDisable] = useState(false)
  const [cart, setCart] = useState([])
  const [badge, setBadge] = useState(0);
  const [account, setAccount] = useState({
    isLogin: false,
  })
  const [isRemember, setIsRemember] = useState(true)
  return (
    <MyContext.Provider value={{
      keyWord, setKeyWord, isSubmit, setIsSubmit, isDisable, setDisable, cart, setCart, badge, setBadge,
      account, setAccount, isRemember, setIsRemember,
    }}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/products/:id' component={ProductDetails} />
        <Route exact path='/cart' component={Cart} />
      </Switch>
    </MyContext.Provider>

  );
}

export default App;
