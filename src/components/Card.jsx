import { FaStar } from "react-icons/fa";
import { BiSolidCartAdd } from "react-icons/bi";
import { useProductData } from "../context/ProductContext";

// eslint-disable-next-line react/prop-types
const Card = ({ id, title, thumbnail, price, rating }) => {
  const { addToCart } = useProductData();
  return (
    <div className="flex flex-col w-[170px] bg-white rounded-lg shadow-2xl px-5 py-5 sm:w-[210px] ">
      <div className="flex justify-center w-full h-[150px]">
        <img src={thumbnail} alt="" width={150} height={100} />
      </div>
      <p className=" font-bold text-sm text-center h-8">{title}</p>
      <div className="flex justify-between items-center gap-2">
        <p>{rating}</p>
        <div className="flex gap-1">
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gold" />
        </div>
      </div>
      <div className="flex justify-between">
        <p>Price:</p>
        <p className="font-bold text-red-600">₹{price}</p>
      </div>
      <button
        className="flex items-center gap-3 justify-center w-full bg-green-300 rounded-sm py-2 font-bold"
        data-id={id}
        onClick={() => addToCart(id)}
      >
        Add To Cart <BiSolidCartAdd size={20} />
      </button>
    </div>
  );
};

export default Card;
