import React from "react";
import { useContext } from "react";
const ProductContext = React.createContext({});

export const useProductData = () => {
  return useContext(ProductContext);
};



export const ProductContextProvider = ProductContext.Provider;