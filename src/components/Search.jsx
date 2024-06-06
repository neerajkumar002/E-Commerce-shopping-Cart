import React, { useState } from "react";
import Main from "./Main";
import { useProductData } from "../context/ProductContext";

const Search = () => {
  
  const { setQuary } = useProductData();

  return (
    <div>
      <div className="w-full flex justify-center bg-gray-200  max-sm:justify-center   ">
        <div className="input  mt-5 mb-3 rounded-lg shadow-lg max-sm:w-[380px]">
          <input
            type="text"
            placeholder="Search Product"
            onChange={(e) => setQuary(e.target.value)}
            className="outline-none w-[500px] py-5 px-3 rounded-lg text-xl  max-sm:w-[380px]"
          />
        </div>
      </div>

      <Main />
    </div>
  );
};

export default Search;
