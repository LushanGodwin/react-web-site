// CartContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface CartItem {
  name: string;
  price: number;
  image: string;
  category: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

// Create a default context value
const defaultContextValue: CartContextType = {
  cartItems: [],
  addItem: () => { },
  removeItem: () => { },
  clearCart: () => { },
};

// Create the context
const CartContext = createContext<CartContextType>(defaultContextValue);

// Create the provider component
const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    setCartItems(prevItems => {
      return [...prevItems, item];
    });
  };

  const removeItem = (name: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.name !== name));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
