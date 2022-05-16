import {createContext, useState, useEffect, useReducer} from 'react';

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

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
}

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
}

const cartReducer = (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload
      }
      case CART_ACTION_TYPES.SET_IS_CART_OPEN:
        return {
          ...state,
          isCartOpen: payload
        }
    default: throw new Error(`Unhandle type ${type} in cartReducer`);

  }
}

export const CartProvider = ({children}) => {

  const [{isCartOpen, cartItems, cartCount, cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((acc, item)=>acc + item.quantity, 0);
    const newCartTotal = newCartItems.reduce((acc, item)=>acc + item.quantity * item.price, 0);

    dispatch({type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: {cartItems: newCartItems, cartTotal: newCartTotal, cartCount: newCartCount}});
  }

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  }

  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  }

  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItemsReducer(newCartItems);
  }

  const setIsCartOpen = (bool) => {
    dispatch({type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload:bool});
  }

  const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, cartTotal, removeItemFromCart, clearItemFromCart};
  return(
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
