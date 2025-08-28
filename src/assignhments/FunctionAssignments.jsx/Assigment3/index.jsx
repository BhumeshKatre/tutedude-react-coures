import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import AvailableShoes from "./Components/AvailableShoes";
import Cart from "./Components/Cart";
import LogoImg from "./img/logo.jpg";

const Index = () => {
  const [cartItem, setCartItem] = useState([]);
  const products = [
    {
      name: "SoleMates Brown Boots - ",
      price: "119",
      img: LogoImg,
    },
    {
      name: "TrailBlazer Black Sneakers - ",
      price: "89",
      img: LogoImg,
    },
    {
      name: "UrbanWalk White Trainers - ",
      price: "99",
      img: LogoImg,
    },
    {
      name: "PeakPro Hiking Shoes - ",
      price: "139",
      img: LogoImg,
    },
    {
      name: "MetroFlex Loafers - ",
      price: "79",
      img: LogoImg,
    },
    {
      name: "SwiftStep Running Shoes - ",
      price: "109",
      img: LogoImg,
    },
    {
      name: "ClassicTan Formal Shoes - ",
      price: "129",
      img: LogoImg,
    },
    {
      name: "RuggedEdge Combat Boots - ",
      price: "149",
      img: LogoImg,
    },
    {
      name: "CloudSoft Slip-ons - ",
      price: "69",
      img: LogoImg,
    },
    {
      name: "ZenStride Sandals - ",
      price: "59",
      img: LogoImg,
    },
  ];

  const total = Array.isArray(cartItem)
    ? cartItem.reduce((acc, item) => {
      const price = Number(item?.price) || 0;
      const quantity = Number(item?.quantity) || 0;
      return acc + price * quantity;
    }, 0)
    : 0;

  const handleIncreseBtn = (item) => {
    setCartItem((prevCart) =>
      prevCart.map((cart) =>
        cart.name === item.name
          ? { ...item, quantity: cart.quantity + 1 }
          : cart
      )
    );
  };

  const decreseQuantity = (item) => {
    setCartItem((prevCart) =>
      prevCart.map((cart) =>
        cart.name === item.name
          ? { ...item, quantity: cart.quantity - 1 }
          : cart
      ).filter((cart) => cart.quantity > 0)
    );
  };

  const handleOnClick = (item) => {
    setCartItem((prevCart) => {
      const existingItem = prevCart.find((cart) => cart.name === item.name);

      if (existingItem) {
        return prevCart.map((cart) =>
          cart.name === item.name
            ? { ...cart, quantity: cart.quantity + 1 }
            : cart
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  console.log(cartItem);
  return (
    <>
      <h1 className=" my-5">Assignment-3 : Shoes App </h1>
      <div className="bg-black p-5">
        <Navbar />

        <div className="py-10 grid grid-cols-2 gap-4">
          {/* <AvailableShoes /> */}
          <div className="grid grid-cols-2 gap-2">
            {products.map((item, indx) => (
              <div key={indx} className="card bg-pink-400 p-4 rounded-sm">
                <img className="w-full h-36" srcSet={LogoImg} alt="" />
                <div className="p-2">
                  <p>{item.name}</p>
                  <p className="font-bold">Price:${item.price}</p>

                </div>
                <div className="text-center">
                  <button
                    onClick={() => handleOnClick(item)}
                    className="px-2 py-2 bg-orange-200 font-bold rounded-lg hover:bg-orange-400 "
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h1 className="text-white font-bold px-5">CART</h1>
            <div className="">
              {cartItem.length !== 0 ? (
                cartItem.map((item, indx) => (
                  <div
                    key={indx}
                    className="border-b-1 border-gray-300 ">
                    <div className="p-4 text-white flex justify-between  items-center">
                      <img className="w-20 h-20" src={LogoImg} alt="" />
                      <p>{item.name}</p>
                      <p className="font-bold">Price:{item.price}</p>
                      <div className="flex gap-2 items-center ">
                        <button
                          onClick={() => handleIncreseBtn(item)}
                          className="bg-orange-300 p-1 rounded-lg font-bold w-6"
                        >
                          {" "}
                          +{" "}
                        </button>
                        <p>{item.quantity}</p>
                        <button
                          disabled={item.quantity <= 0 }
                          onClick={() => decreseQuantity(item)}
                          className="bg-orange-300  p-1 rounded-lg font-bold w-6 disabled:bg-orange-200"
                        >
                          {" "}
                          -{" "}
                        </button>
                      </div>
                    </div>
                    {/* <p className="p-2 text-red-400">{item.quantity <= 0 && "Currently Unavailable"}</p> */}
                  </div>
                ))
              ) : (
                <div className="text-white text-center bg-gray-700 p-2">
                  <p>Your Cart is empty</p>
                </div>
              )}
            </div>
            <div className="text-white">
              <p>TOTAL : ${total}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
