import { useState } from "react";
import { useProductData } from "../context/ProductContext.js";
import Cart from "./Cart.jsx";
import { Card } from "./index.js";
import CardShimmer from "./CardShimmer.jsx";

const Main = () => {
  const { productsData,quary } = useProductData();

  return (
    <>
      {productsData.length > 0 ? (
        <div className="w-full min-h-screen bg-gray-200 grid grid-cols-2 gap-5 p-2 place-items-center sm:grid-cols-3 lg:grid-cols-5 lg:gap-3">
          {productsData
            .filter((product) => product.title.toLowerCase().includes(quary))
            .map(({ id, title, thumbnail, price, rating }) => (
              <Card
                key={id}
                id={id}
                title={title}
                thumbnail={thumbnail}
                price={price}
                rating={rating}
              />
            ))}
        </div>
      ) : (
        <div className="w-full min-h-screen bg-gray-200 grid grid-cols-2 gap-5 p-2 place-items-center sm:grid-cols-3 lg:grid-cols-5 lg:gap-3">
          {Array(40)
            .fill("")
            .map((element, index) => (
              <CardShimmer key={index} />
            ))}
        </div>
      )}
    </>
  );
};

export default Main;

/**
 * // <div className="w-full min-h-screen bg-gray-200 grid grid-cols-2 gap-5 p-2 place-items-center sm:grid-cols-3 lg:grid-cols-5 lg:gap-3">
    //   {productsData?.length === 0
    //     ? Array(40)
    //         .fill("")
    //         .map((element, index) => <CardShimmer key={index} />)
    //     : productsData && productsData.length > 0
    //     ? productsData.map(({ id, title, thumbnail, price, rating }) => (
    //         <Card
    //           key={id}
    //           id={id}
    //           title={title}
    //           thumbnail={thumbnail}
    //           price={price}
    //           rating={rating}
    //         />
    //       ))
    //     : null} 
    // </div>
 * 
 * 
 * 
 */
