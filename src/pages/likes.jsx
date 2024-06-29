import React from "react";
import Header from "../components/header";
import { useFavorites } from "../context/FavoriteContext";

const Likes = () => {
  const { favorites } = useFavorites();

  return (
    <div>
      <Header />
      <div className="max-w-[1200px] m-auto py-8">
        <h1 className="text-3xl font-medium py-6">Favorites</h1>
        {favorites.length === 0 ? (
          <p>No Favorites</p>
        ) : (
          <div className="grid grid-cols-2 gap-y-3 sm:grid-cols-3 lg:grid-cols-4">
            {favorites.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col gap-1 border-solid border-[1px] border-white hover:border-black"
              >
                <div className="relative">
                  <img src={item.img} alt="" className="w-full h-auto" />
                  <b className="absolute bottom-0 left-2 bg-white p-1">
                    {item.price}
                  </b>
                </div>
                <div className="p-2">
                  <h1>{item.name}</h1>
                  <p className="text-gray-500">{item.type}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Likes;
