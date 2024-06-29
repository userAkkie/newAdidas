import Header from "../components/header";
import Footer from "../components/footer";
import { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoriteContext";
import { useBasket } from "../context/BasketContext";



const Sale = () => {
  const { category, getData } = useContext(ProductContext);
  const { favorites, toggleFavorite } = useFavorites();
  const { addToBasket } = useBasket();


  useEffect(() => {
    getData("sale");
  }, []);

  return (
    <div>
      <Header />
      <div className="max-w-[1200px] m-auto pt-10">
        <div>
          <div className="flex items-center">
            <Link
              to="/"
              className="underline decoration-solid hover:text-white hover:bg-black hover:decoration-black px-2 font-semibold"
            >
              BACK
            </Link>
            <p className="underline decoration-solid hover:text-white hover:bg-black px-1">
              Home
            </p>
            <span>/ Sale</span>
          </div>
          <div className="py-10">
            <p className="text-2xl italic font-semibold">
              CLOTHES & SHOES ON SALE: SAVE $30 ON ORDERS $100+ WITH CODE*
              SAVEMORE
            </p>
            <p>
              Summer savings are on! Get $30 off when you spend $100+ on full
              price and sale price items. Use code* <br /> SAVEMORE at checkout
              while supplies last. Offer valid until 06/25. Exclusions apply.
            </p>
          </div>
        </div>
        <h1 className="text-3xl font-medium py-6">ALL SALE</h1>
        <div className="grid grid-cols-2 gap-y-3 sm:grid-cols-3 lg:grid-cols-4">
          {category.map((item) => {
            const isFavorite = favorites.some((fav) => fav.id === item.id);
            return (
              <Link key={item.id} to={`/sale/${item.id}`}>
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
      </div>



      <div className="max-w-[1100px] m-auto py-14 px-2">
        <h1 className="text-2xl font-semibold">
          ADIDAS CLOTHES & SHOES ON SALE
        </h1>
        <br />
        <p className="text-sm md:text-base  ">
          Find a great discount on all adidas clothes and shoes on sale today.
          When a new look arrives, you want to make sure you find a great deal
          while supplies last. So grab all your favorites before they're gone.
          With options from bold colors to vivid allover prints that speak to
          your style, there's a great piece of apparel waiting. Are you looking
          for a new set of trainers? You'll find the perfect pair, plus you'll
          find options for matching them with a great set of track pants. Maybe
          you need a light fabric that can wick away moisture to keep you dry
          and cool. Look for our AEROREADY tech that will keep you feeling
          comfortable no matter how far the trail takes you. When you need
          something for extra layering and warmth, look for jackets and sweaters
          made with our COLD.RDY technology to give you peace of mind when the
          temperatures drop. <br />
          <br />
          If you're looking for a sale, you've come to the right place. Shop the
          latest deals and discounts on all your favorite adidas clothes and
          shoes on sale. Look for our signature shoes like the Ultraboost, NMD,
          EQT, Stan Smith and more. When it's time to give your wardrobe an
          upgrade, we have a variety of classic T-shirts, hoodies and jackets
          that feature our iconic Trefoil logo. You'll find the perfect pairs of
          shorts for running, hiking or knocking down jumpers. Look out for
          moisture-managing fabric and details like zip pockets for stashing
          keys, cards and other essentials. We have sale items for running,
          training and everyday wear, with unbeatable prices on shoes, clothing
          and accessories for men, women and kids. Shop our sale section today
          to take advantage of these limited-time offers before they're gone.{" "}
          <br />
          <br />
          With so much apparel on sale to choose from, you'll be ready to hit
          the trails or start your marathon training with everything you need.
          We know athletic outerwear makes a difference in your performance and
          comfort. A reliable pair of trainers or a set of track pants that wick
          away moisture can mean a big difference in how you train. Now you can
          focus on beating your best time or adding some resistance to your
          training setup without the hassle of worrying about your outfit. With
          men's and women's sneakers on sale, you'll find great deals on running
          shoes, like our classic Ultraboost. We think the Ultraboost is
          probably the most comfortable running shoe you'll ever wear. The
          comfort comes from the foot-hugging adidas PRIMEKNIT upper and the
          incredible energy return of the adidas Boost midsole technology.
          You'll be light on your feet and stable through the push-off. <br />
          <br />
          Sometimes the most impact comes from the lightest touch. Lightweight
          materials can sustain you during your workout for a lot longer and
          keep your body cool and dry when it's time to turn up the intensity.
          Our tank tops are a great option when you want breathability for that
          yoga session. Add a classic addition to the wardrobe with our
          3-Stripes tee for added comfort and flexibility to move, then combine
          it with matching bike shorts for the next cycling appointment. If you
          want a bit more protection from the elements when the workout takes
          you outside, look for long sleeve track tops and track jackets. The
          unmistakable 3-Stripes design pops off the long sleeves with style,
          and you'll get in and out quickly with an easy full zip. And don't
          forget to accessorize your outfit with socks and caps. Stay
          squint-free and comfortable with a pre-curved brim that shades your
          eyes and mesh panels that let the air flow. Shop for more adidas
          clothes and shoes on sale today!
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Sale;
