import Header from "../components/header";
import Footer from "../components/footer";
import { useContext, useEffect } from "react";
import Recently from "../components/recently";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { useFavorites } from "../context/FavoriteContext";
import { useBasket } from "../context/BasketContext";


const StripeLife = () => {
  const { category, getData } = useContext(ProductContext);
  const { favorites, toggleFavorite } = useFavorites();
  const { addToBasket } = useBasket();

  
  useEffect(() => {
    getData("stripeLife");
  }, [getData]);

  return (
    <div>
      <Header />
      <div className="max-w-[1200px] m-auto pt-10">
        <div>
          <div className="flex items-center ">
            <Link
              to="/"
              className="underline decoration-solid hover:text-white hover:bg-black hover:decoration-black px-2 font-semibold"
            >
              BACK
            </Link>
            <p className="underline decoration-solid hover:text-white hover:bg-black px-1 ">
              Home
            </p>
            /<span>New arrivals</span>
          </div>
          <div className="py-10">
            <p className="text-2xl italic font-semibold">
              NEW ARRIVALS: SHOES, CLOTHING & MORE
            </p>
            <p className="max-w-[750px]">
              Freshen up your wardrobe with new clothes and shoes from adidas.
              From cutting-edge sportswear to the latest kicks, find the styles
              you'll love forever.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-3 sm:grid-cols-3 lg:grid-cols-4">
          {category.map((item) => {
            const isFavorite = favorites.some((fav) => fav.id === item.id);
            return (
              <Link key={item.id} to={`/stripeLife/${item.id}`}>
                <div className="relative flex flex-col gap-1 border-solid border-[1px] border-white hover:border-black">
                  <div className="relative">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-auto"
                    />
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

        <Recently />

        <div className="max-w-[1100px] m-auto pt-20 pb-14 px-2">
          <h1 className="text-2xl font-semibold">ADIDAS NEW CLOTHES & SHOES</h1>
          <br />
          <p className="text-sm md:text-base  ">
            Get the latest style you'll love forever with new clothes and shoes
            from adidas. You've always been the kind of person to stay current
            with up-and-coming trends, and what you wear every day is definitely
            no different. From crisp white shoes to modern cargo pants, your
            look stays true to who are you, your creative self-expression and
            your own unique identity. There's no better way to do that than with
            the latest adidas clothes and shoes. Keep things classic and
            timeless with style that transcends trend, like a sporty track suit
            or signature adidas shoes. Reissues of your favorites are released
            every season, so whether you love Gazelle shoes, adidas Superstar
            shoes or Stan Smith shoes, you'll find something fresh in a mix of
            new materials and colors. <br />
            <br />
            As for new adidas apparel, it's all here. Go sporty and timeless
            with adidas Originals, or take your look to a modern place with Y-3
            by Yohji Yamamoto, renowned for its avant-garde design. The
            designer's legendary oversized designs are marked by neutral colors,
            flowy drapes and a creative mix of textures. Stay on top of style
            when you work out with adidas by Stella McCartney, a collection that
            makes the most of pops of color and out-of-the-box design. Write
            your own rules and shop new clothes and shoes from adidas today.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StripeLife;
