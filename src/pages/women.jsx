
import React, { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import Body from "../components/body";
import Footer from "../components/footer";
import Header from "../components/header";
import Recently from "../components/recently";
import Shop from "../components/shop";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoriteContext";
import { useBasket } from "../context/BasketContext";

const Women = () => {
  const { category, getData } = useContext(ProductContext);
  const { favorites, toggleFavorite } = useFavorites();
  const { addToBasket } = useBasket();

  useEffect(() => {
    getData("women");
  }, []);

  return (
    <div>
      <Header />
      <Body />
      <Shop />
      {/* swiper======= */}
      <div className="max-w-[1200px] m-auto py-6">
        <h1 className="text-3xl font-medium py-6">TOP PICKS FOR YOU</h1>
        <div className="grid grid-cols-2 gap-y-3 sm:grid-cols-3 lg:grid-cols-4">
          {category.map((item) => {
            const isFavorite = favorites.some((fav) => fav.id === item.id);
            return (
              <Link key={item.id} to={`/women/${item.id}`}>
                <div className="relative flex flex-col gap-1 border-solid border-[1px] border-white hover:border-black">
                  <div className="relative">
                    <img src={item.img} alt="" className="w-full h-auto" />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleFavorite(item);
                      }}
                      className={`absolute top-2 right-2 w-6 h-6 text-2xl ${
                        isFavorite ? "text-black" : "text-black"
                      }`}
                    >
                      {isFavorite ? "♥" : "♡"}
                    </button>
                    <b className="absolute bottom-0 left-2 bg-white p-1">
                      {item.price}
                    </b>
                  </div>
                  <div className="p-2">
                    <h1>{item.name}</h1>
                    <p className="text-gray-500">{item.type}</p>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToBasket(item);
                      }}
                      className=" text-sm underline decoration-solid hover:text-white hover:bg-black transition-all"
                      >
                        Add to Basket
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="max-w-[1000px] m-auto flex flex-col justify-center items-center py-16 px-4">
        <h1 className="font-bold  text-2xl md:text-3xl py-4 text-center">
          WOMEN’S CLOTHING & SHOES
        </h1>
        <p className="text-sm md:text-base  text-center">
          As a creator, you look for ways to excel and express yourself when and
          where you can, from reaching for that last rep to evolving your
          streetwear style. Log miles or tear down the baseline in men's shoes
          with responsive cushioning. Rep an athletic style off the field in
          lifestyle apparel born of sport heritage. From athletes to streetwear
          enthusiasts, adidas men’s clothing and shoes exist to let you go
          harder, dig deeper, and get the most out of yourself, from the pitch
          to the street to the road less traveled.
        </p>
      </div>

      <Recently />
      <div className="flex justify-evenly py-6">
        <div className="flex flex-col gap-4">
          <b className="text-center">WOMEN'S CLOTHING</b>
          <a href="" className="text-sm text-center">
            Sports Bras
          </a>
          <a href="" className="text-sm text-center">
            Tops
          </a>
          <a href="" className="text-sm text-center">
            Hoodies
          </a>
          <a href="" className="text-sm text-center">
            Shorts
          </a>
          <a href="" className="text-sm text-center">
            Tights & Leggings
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <b className="text-center">WOMEN'S SHOES</b>
          <a href="" className="text-sm text-center">
            Casual Sneakers
          </a>
          <a href="" className="text-sm text-center">
            All White Sneakers
          </a>
          <a href="" className="text-sm text-center">
            Slip On Sneakers
          </a>
          <a href="" className="text-sm text-center">
            Classic Sneakers
          </a>
          <a href="" className="text-sm text-center">
            High Top Sneakers
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <b className="text-center">WOMEN'S ACCESSORIES</b>
          <a href="" className="text-sm text-center">
            Women's Duffle Bags
          </a>
          <a href="" className="text-sm text-center">
            Women's Backpacks
          </a>
          <a href="" className="text-sm text-center">
            Women's Hats
          </a>
          <a href="" className="text-sm text-center">
            Women's Headphones
          </a>
          <a href="" className="text-sm text-center">
            Women's Socks
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <b className="text-center">WOMEN'S COLLECTIONS</b>
          <a href="" className="text-sm text-center">
            Plus Size
          </a>
          <a href="" className="text-sm text-center">
            Yoga & Barre
          </a>
          <a href="" className="text-sm text-center">
            Running
          </a>
          <a href="" className="text-sm text-center">
            Training & Gym
          </a>
          <a href="" className="text-sm text-center">
            Loungewear
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Women;
