import { IoClose } from "react-icons/io5";
import { useProductData } from "../context/ProductContext";
import CartItem from "./CartItem";
const Cart = ({ showCart, toggle }) => {
  const { productsData, localCartItems, calculateTotal, clearCart,localProductArr } =
    useProductData();

  return (
    showCart && (
      <div className="fixed top-0 right-0 bg-black w-full h-full sm:w-[600px] lg:w-[480px] ">
        <button className="absolute right-0 top-1" onClick={toggle}>
          <IoClose />
        </button>
        <div className="flex gap-2  flex-col items-center py-2">
          <div className="text- fbo">Total Amount:₹{calculateTotal()}</div>
          <button
            className="text-lg bg-blue-600 px-2 rounded-sm font-bold "
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
        <div className="flex flex-col gap-2 overflow-y-auto h-full">
          {localProductArr && localProductArr.length > 0
            ? localProductArr.map((item) => {
                const product = productsData.find(
                  (curProduct) => curProduct.id === item.id
                );
                return product === undefined ? (
                  ""
                ) : (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    quantity={item.quantity}
                    title={product.title}
                    price={product.price}
                    thumbnail={product.thumbnail}
                  />
                );
              })
            : null}
        </div>
      </div>
    )
  );
};

export default Cart;
