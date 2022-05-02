import {createContext, useState, useEffect} from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const existintCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);
  if (existintCartItem) {
    return cartItems.map(cartItem => cartItem.id === productToAdd.id ? {
      ...cartItem, quantity: cartItem.quantity + 1
    } : cartItem);
  }

  return [...cartItems, {...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existintCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

  if (existintCartItem.quantity === 1) {
    return cartItems.filter(item => item.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? {
    ...cartItem, quantity: cartItem.quantity - 1
  } : cartItem);
}

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter(item => item.id !== cartItemToClear.id);
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((acc, item)=>acc + item.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((acc, item)=>acc + item.quantity * item.price, 0);
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    console.log(productToAdd);
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  }

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  }

  const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, cartTotal, removeItemFromCart, clearItemFromCart};
  return(
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
