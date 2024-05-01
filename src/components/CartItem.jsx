import { IoIosAdd } from "react-icons/io";
import { TiMinus } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
const CartItem = ({ title, price, thumbnail, quantity }) => {
  return (
    <div className="bg-white w-full flex h-24 relative">
      <img src={thumbnail} alt="" width={100} height={50} />
      <button className="absolute top-0 right-0">
        <IoClose color="black"/>
      </button>
      <div className="flex flex-col px-2 w-full">
        <div>
          <p className="text-slate-800 text-lg">{title}</p>
        </div>
        <div className="text-lg">
          <span className="text-black">Price</span>
          <span className="px-2 text-red-700">₹{price}</span>
        </div>
        <div  className="">
          <div className="flex w-10 justify-between py-1">
            <button className="bg-slate-800 rounded-sm text-white px-2 ">
              <TiMinus size={10} />
            </button>
            <p className="px-2 text-slate-700 font-bold text-1xl">{quantity}</p>
            <button className="bg-slate-800 rounded-sm text-white">
              <IoIosAdd />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
