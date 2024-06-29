
import React from "react";
import Header from "../components/header";
import { useBasket } from "../context/BasketContext";


const Basket = () => {
  const { basket, removeFromBasket } = useBasket();

  return (
    <div>
      <Header />
      <div className="max-w-[1200px] m-auto py-8">
        <h1 className="text-3xl font-medium py-6">Basket</h1>
        <div className="grid grid-cols-2 gap-y-3 sm:grid-cols-3 lg:grid-cols-4">
          {basket.length > 0 ? (
            basket.map((item, index) => (
              <div key={index} className="flex flex-col flex flex-col gap-1 border-solid border-[1px] border-white hover:border-black">
                <img src={item.img} alt="" className="w-full h-auto" />
                <div className="p-2">
                  <h1>{item.name}</h1>
                  <b>{item.price}</b>
               
                <p className="text-gray-500">{item.type}</p>
                <button
                  onClick={() => removeFromBasket(item.id)}
                  className="mt-2 bg-slate-200 hover:text-white hover:bg-black transition-all"
                >
                  remove from basket
                </button>
              </div>
              </div>
            ))
          ) : (
            <p>Basket is empty</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Basket;

