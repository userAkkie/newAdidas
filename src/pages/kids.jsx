
import { useContext, useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoriteContext";
import { useBasket } from "../context/BasketContext";

const Kids = () => {
  const { category, getData } = useContext(ProductContext);
  const { favorites, toggleFavorite } = useFavorites();
  const { addToBasket } = useBasket();

  useEffect(() => {
    getData("kids");
  }, []);

  return (
    <div>
      <Header />
      {/* top video============ */}
      <div className="relative h-auto overflow-hidden min-h-[400px]">
        <video
          loop
          src="https://brand.assets.adidas.com/video/upload/f_auto:video,q_auto/if_w_gt_1920,w_1920/Horizontal_FW_24_disney_lionking_global_sustain_kids_LP_hero_banner_d_1c11c730cc.mp4"
          type="video/mp4"
          className="bg-red-500 h-full object-cover min-h-[400px]"
          autoPlay
          muted
        />
        <div className="absolute bottom-[50px] left-[70px]">
          <h1 className="text-white font-bold text-4xl">
            ADIDAS DISNEY: <br /> THE LION KING
          </h1>
          <p className="text-white tracking-[0.12em] py-4">
            For every brave adventure
          </p>
          <button className="bg-white tracking-wide py-3 px-6 font-bold mt-2 hover:text-gray-500 transition-all">
            DISCOVER MORE
          </button>
        </div>
      </div>

      <div className="max-w-[1200px] m-auto py-6">
        <div className="flex justify-center gap-2 items-stretch">
          <div className="w-[300px] flex flex-col">
            <div className="h-[400px] overflow-hidden">
              <img
                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/house_of_tiro_ss24_t_1dc7e3c6b3.jpg"
                alt="Gazelle"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="font-[700] py-2">GAZELLE</h1>
            <p className="text-xs py-1">A true classic with a long legacy.</p>
            <button className="mt-12 self-start text-black font-[650] tracking-[0.11em] text-sm underline hover:bg-black hover:text-white transition-all">
              SHOP NOW
            </button>
          </div>
          <div className="w-[300px] flex flex-col">
            <div className="relative h-[400px] overflow-hidden">
              <img
                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/kglp_lifestyle_2_d_deac806c33.jpg"
                alt=""
              />
            </div>
            <h1 className="font-[700] py-2">
              SUPERNOVA RISE: SPRING INTO THE SEASON
            </h1>
            <p className="text-xs py-1">
              Fresh start, fresh colorways. Check out Supernova <br /> Rise in
              various colors now.
            </p>
            <button className="mt-4 self-start text-black font-[650] tracking-[0.11em] text-sm underline hover:bg-black hover:text-white transition-all">
              SHOP NOW
            </button>
          </div>
          <div className="w-[300px] flex flex-col">
            <div className="relative h-[400px] overflow-hidden">
              <img
                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/kglp_footwear_3_d_cbd260a3df.jpg"
                alt=""
              />
            </div>
            <h1 className="font-[700] py-2">adidas F50</h1>
            <p className="text-xs py-1">
              Engineered for speed, the F50 is here to free the fast.
            </p>
            <button className="mt-12 self-start text-black font-[650] tracking-[0.11em] text-sm underline hover:bg-black hover:text-white transition-all">
              SHOP NOW
            </button>
          </div>
          <div className="w-[300px] flex flex-col">
            <div className="h-[400px] overflow-hidden">
              <img
                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/kglp_minime_4_d_87051c824d.jpg"
                alt="Forum"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="font-[700] py-2">FORUM</h1>
            <p className="text-xs py-1">Bold design and unrivalled classics.</p>
            <button className="mt-12 self-start text-black font-[650] tracking-[0.11em] text-sm underline hover:bg-black hover:text-white transition-all">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      {/* products-============================ */}

      <div className="max-w-[1200px] m-auto py-6">
        <h1 className="text-3xl font-medium py-6">TOP PICKS FOR YOU</h1>
        <div className="grid grid-cols-2 gap-y-3 sm:grid-cols-3 lg:grid-cols-4">
          {category.map((item) => {
            const isFavorite = favorites.some((fav) => fav.id === item.id);
            return (
              <Link key={item.id} to={`/kids/${item.id}`}>
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
          ADIDAS KIDS CLOTHING & KIDS SHOES
        </h1>
        <p className="text-sm md:text-base  text-center">
          Whether they’re big kids playing in a weekend tournament or little
          ones mastering the monkey bars, being a young creator is all about
          having fun while playing hard. Find girls’ and boys’ shoes to support
          both their game and their style. Boys’ and girls’ clothing and shoes
          from adidas are built to give kids of every age and stage comfort and
          confidence for everything from first steps to personal bests.
        </p>
      </div>

      <div className="flex justify-evenly py-6">
        <div className="flex flex-col gap-4">
          <b className="text-center">BACK TO SCHOOL</b>
          <a href="" className="text-sm text-center">
            Kids' School Clothing
          </a>
          <a href="" className="text-sm text-center">
            Kids' School Shoes
          </a>
          <a href="" className="text-sm text-center">
            School Backpacks
          </a>
          <a href="" className="text-sm text-center">
            Boys' Back to School
          </a>
          <a href="" className="text-sm text-center">
            Girls' Back to School
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <b className="text-center">KIDS' SHOES</b>
          <a href="" className="text-sm text-center">
            Casual Sneakers
          </a>
          <a href="" className="text-sm text-center">
            High Top Sneakers
          </a>
          <a href="" className="text-sm text-center">
            Slides & Sandals
          </a>
          <a href="" className="text-sm text-center">
            Cleats
          </a>
          <a href="" className="text-sm text-center">
            Boots
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <b className="text-center">KIDS' ACCESSORIES</b>
          <a href="" className="text-sm text-center">
            Socks
          </a>
          <a href="" className="text-sm text-center">
            Hats
          </a>
          <a href="" className="text-sm text-center">
            Gloves
          </a>
          <a href="" className="text-sm text-center">
            Backpacks & Bags
          </a>
          <a href="" className="text-sm text-center">
            Sunglasses
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <b className="text-center">KIDS' CLOTHING</b>
          <a href="" className="text-sm text-center">
            T-shirts
          </a>
          <a href="" className="text-sm text-center">
            Hoodies & Sweatshirts
          </a>
          <a href="" className="text-sm text-center">
            Jackets & Coats
          </a>
          <a href="" className="text-sm text-center">
            Pants & Sweats
          </a>
          <a href="" className="text-sm text-center">
            Track Suits
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Kids;
