import { useState } from "react";
import { useProductData } from "../context/ProductContext.js";
import Cart from "./Cart.jsx";
import { Card } from "./index.js";
const Main = () => {
  const { productsData } = useProductData();
  

  return (
    <div className="w-full min-h-screen bg-gray-200 px-8 py-10 grid grid-cols-5 gap-5">
     

      {productsData && productsData.length > 0
        ? productsData.map(({ id, title, thumbnail, price, rating }) => (
            <Card
              key={id}
              id={id}
              title={title}
              thumbnail={thumbnail}
              price={price}
              rating={rating}
            />
          ))
        : null}
    </div>
  );
};

export default Main;
