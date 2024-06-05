import { Navbar, Footer, Main } from "./components/index";
import { useEffect, useState } from "react";
import { ProductContextProvider } from "./context/ProductContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Error from "./components/Error";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
function App() {
  const localCartItems =
    JSON.parse(localStorage.getItem("cartItemsList")) || [];
  const [productsData, setProductsData] = useState([]);
  const [localProductArr, setLocalProductArr] = useState(localCartItems);
  const [cartValue, setCartValue] = useState(0);
  const [quary, setQuary] = useState("");

  //fetch data from api
  const fetchData = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    if (result) {
      setProductsData(result.products);
    }
  };

  useEffect(() => {
    fetchData("https://dummyjson.com/products");
  }, []);

  //add to cart function
  const addToCart = (id) => {
    const exsitingProduct = localProductArr.find(
      (localProduct) => localProduct.id === id
    );

    if (exsitingProduct) {
      if (exsitingProduct === undefined) return;
      else {
        setLocalProductArr(
          localProductArr.map((cartItem) =>
            cartItem.id === id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        );
      }
    } else {
      const product = productsData.find((curProduct) => curProduct.id === id);
      const { price } = product;

      setLocalProductArr([{ id, price, quantity: 1 }, ...localProductArr]);
    }
  };

  //calculate total function
  const calculateTotal = () => {
    return localProductArr.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  useEffect(() => {
    localStorage.setItem("cartItemsList", JSON.stringify(localProductArr));
    setCartValue(localProductArr.length);
  }, [localProductArr]);

  //clear cart function
  const clearCart = () => {
    setLocalProductArr([]);
    localStorage.setItem("cartItemsList", JSON.stringify([]));
  };

  //remove product in cart
  const removeCartProduct = (id) => {
    setLocalProductArr(localProductArr.filter((item) => item.id !== id));
  };

  // qunatity decrement function
  const decrementQuantity = (getProductId) => {
    const isProductInLs = localProductArr.find(
      (curProduct) => curProduct.id === getProductId
    );

    if (isProductInLs.quantity === 1) {
      setLocalProductArr(
        localProductArr.filter((item) => item.id !== getProductId)
      );
    } else {
      setLocalProductArr(
        localProductArr.map((item) =>
          item.id === getProductId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  // router
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
      ],
    },
  ]);

  return (
    <ProductContextProvider
      value={{
        productsData,
        addToCart,
        cartValue,
        localCartItems,
        localProductArr,
        calculateTotal,
        clearCart,
        decrementQuantity,
        removeCartProduct,
        setQuary,
        quary,
      }}
    >
      <RouterProvider router={appRouter} />
    </ProductContextProvider>
  );
}

export default App;
