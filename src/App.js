import { useState, useEffect } from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Img1 from "./img1.png";
import Img2 from "./img2.png";
import Img3 from "./img3.jpg";
import Lf from "./Luffy.jpg";
import Sn from "./sanji.jpg";
import Zr from "./Zoro.jpg";
// import Swal from "sweetalert2";
import { ShoppingContext } from "./components/context/ShoppingContext";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Midorya",
      price: 700,
      image: Img1,
    },
    {
      id: 2,
      name: "Tudoroki",
      price: 400,
      image: Img2,
    },
    {
      id: 3,
      name: "Bakugu",
      price: 350,
      image: Img3,
    },
    {
      id: 4,
      name: "Luffy",
      price: 7000000,
      image: Lf,
    },
    {
      id: 5,
      name: "Sanji",
      price: 20000,
      image: Sn,
    },
    {
      id: 6,
      name: "Zoro",
      price: 1000000,
      image: Zr,
    },
  ]);
  // const [cartItems, setCartItems] = useState([]);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  function addToCart(item) {
    let productItem = cartItems.find((product) => product.id === item.id);
    let exists = cartItems.find((product) => product.id === item.id);
    if (exists) {
      productItem.quantity += 1;
      setCartItems([...cartItems]);
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } else {
      item.quantity = 1;
      setCartItems([item, ...cartItems]);
      // Swal.fire({
      //   position: "button-end",
      //   icon: "success",
      //   title: "Your item has been saved",
      //   showConfirmButton: false,
      //   timer: 1500,
      // });
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }
  function incrementQ(item) {
    let productItem = cartItems.find((product) => product.id === item.id);
    let exists = cartItems.find((product) => product.id === item.id);
    if (exists) {
      productItem.quantity += 1;
      setCartItems([...cartItems]);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      // Swal.fire({
      //   position: "buttom-end",
      //   icon: "success",
      //   title: "Your item has been updated",
      //   showConfirmButton: false,
      //   timer: 1500,
      // });
    }
  }

  function decrementQ(item) {
    let productItem = cartItems.find((product) => product.id === item.id);
    let exists = cartItems.find((product) => product.id === item.id);
    if (exists) {
      productItem.quantity -= 1;
      if (productItem.quantity === 0) {
        setCartItems(cartItems.filter((product) => product.id !== item.id));
        localStorage.setItem("cart", JSON.stringify(cartItems));
      } else {
        setCartItems([...cartItems]);
        localStorage.setItem("cart", JSON.stringify(cartItems));
      }
      // Swal.fire({
      //   position: "button-end",
      //   icon: "success",
      //   title: "Your item has been updated",
      //   showConfirmButton: false,
      //   timer: 1000,
      // });
    }
  }

  function removeFromCart(item) {
    setCartItems(cartItems.filter((product) => product.id !== item.id));
    localStorage.setItem("cart", JSON.stringify(cartItems));

    // Swal.fire({
    //   position: "button-end",
    //   icon: "success",
    //   title: "Your item has been removed",
    //   showConfirmButton: false,
    //   timer: 1500,
    // });
  }
  // useEffect(() => {
  //   let stringCart = JSON.stringify(cartItems);
  //   window.localStorage.setItem("cart", stringCart);
  // }, [cartItems]);

  return (
    <ShoppingContext.Provider
      value={{
        products,
        addToCart,
        incrementQ,
        decrementQ,
        cartItems,
        removeFromCart,
        setCartItems,
      }}
    >
      <div className="container">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </ShoppingContext.Provider>
  );
}

export default App;
