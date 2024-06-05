import React, { useState } from "react";
import Main from "./Main";
import { useProductData } from "../context/ProductContext";

const Search = () => {
  
  const { setQuary } = useProductData();

  return (
    <div>
      <div className="w-full flex justify-center bg-gray-200">
        <div className="input  mt-5 mb-3 rounded-lg shadow-lg ">
          <input
            type="text"
            placeholder="Search Product"
            onChange={(e) => setQuary(e.target.value)}
            className="outline-none w-[500px] py-5 px-3 rounded-lg text-xl"
          />
        </div>
      </div>

      <Main />
    </div>
  );
};

export default Search;
