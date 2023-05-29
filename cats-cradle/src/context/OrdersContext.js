import React, { createContext, useState } from 'react';

// Create the context object
const OrderContext = createContext();

// Create the context provider component
const OrderContextProvider = ({ children }) => {
  const [cart, setCart] = useState('');

  const updateCart = (newCart) => {
    setCart(newCart);
  };

  return (
    <OrderContext.Provider cart={{ cart, updateCart }}>
      {children}
    </OrderContext.Provider>
  );
};

// Create a custom hook for consuming the context
const useOrderContext = () => {
  const context = React.useContext(OrderContext);
  if (!context) {
    throw new Error('useOrderContext must be used within a OrderContextProvider');
  }
  return context;
};

export { OrderContextProvider, useOrderContext };
