import { Link } from "react-router-dom";
import React, { useState } from "react";



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div>
        <button className="text-white  bg-black p-3 font-bold tracking-[0.17em] flex items-center justify-center text-xs w-[100%]">
          FREE STANDARD SHIPPING WITH ADICLUB
        </button>
      </div>
      {/* ========================================== */}
      <div className="hidden lg:block">
        <div className="flex px-16 pt-6 justify-end">
          <div className="gap-6 items-center flex">
            <a href="" className="text-sm hover:underline decoration-solid">
              help
            </a>
            <a href="" className="text-sm hover:underline decoration-solid">
              wishlist
            </a>
            <a href="" className="text-sm hover:underline decoration-solid">
              orders and returns
            </a>
            <button>
              <img
                src="https://cdn-icons-png.flaticon.com/128/14009/14009832.png"
                alt="usa"
                width={"22px"}
              />
            </button>
          </div>
        </div>
      </div>
      {/* =============================== */}

      <div className="flex items-center justify-between lg:hidden px-4">
        <div className="flex items-center gap-3">
          <div></div>
          <button onClick={toggleMenu} className="focus:outline-none">
            <img
              src="https://cdn-icons-png.flaticon.com/128/5358/5358649.png"
              alt=""
              width="20px"
            />
          </button>

          <Link to={"/likes"}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/4675/4675168.png"
              alt="like"
              width={"20px"}
            />
          </Link>
        </div>
        <div>
          <Link to={"/"}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/731/731962.png"
              alt="adidas"
              width={"60px"}
            />
          </Link>
        </div>
        <div className="flex items-center gap-3 ">
          <Link to={"/user"}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/15501/15501313.png"
              alt="user"
              width={"20px"}
            />
          </Link>
          <Link to={"/basket"}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/2438/2438133.png"
              alt="basket"
              width={"20px"}
            />
          </Link>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="flex items-center justify-between px-16 border-b border-solid border-gray-200">
          <Link to={"/"}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/731/731962.png"
              alt="adidas"
              width={"70px"}
            />
          </Link>

          <div className="flex gap-6 items-center ml-[200px] ">
            <Link to={"/men"}>
              <b>MEN</b>
            </Link>
            <Link to={"/women"}>
              <b>WOMEN</b>
            </Link>
            <Link to={"/kids"}>
              <b>KIDS</b>
            </Link>
            <Link to={"/sale"}>SALE</Link>
            <Link to={"/stripeLife"}>3 STRIPE LIFE</Link>
          </div>

          <div className="flex items-center gap-3">

            <input
              type="text"
              placeholder="Search"
              className="bg-gray-200 p-1 rounded"
              onChange={(e) => console.log(e.target.value)} 
            />
            <Link to={"/user"}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/1621/1621561.png"
                alt="user"
                width={"20px"}
              />
            </Link>
            <Link to={"/likes"}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/4675/4675168.png"
                alt="like"
                width={"20px"}
              />
            </Link>
            <Link to={"/basket"}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/2438/2438133.png"
                alt="basket"
                width={"20px"}
              />
            </Link>
          </div>
        </div>
      </div>
      {/* burger menuu================================== */}
      <div className="relative">
        <div
          className={`fixed left-0 top-0 h-full w-56 bg-white transition-transform transform ease-in-out duration-300 z-40 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col p-4 gap-4">
            <Link to={"/men"}>
              <p className="font-semibold hover:text-gray-500 text-sm">MEN</p>
            </Link>
            <Link to={"/women"}>
              <p className="font-semibold hover:text-gray-500 text-sm">WOMEN</p>
            </Link>
            <Link to={"/kids"}>
              <p className="font-semibold hover:text-gray-500 text-sm">KIDS</p>
            </Link>
            <Link to={"/sale"}>
              <p className="font-semibold hover:text-gray-500 text-sm">SALE</p>
            </Link>
            <Link to={"/stripeLife"}>
              <p className="font-semibold hover:text-gray-500 text-sm">
                3 STRIPE LIFE
              </p>
            </Link>
          </div>
        </div>

        {isOpen && (
          <div
            onClick={toggleMenu}
            className="fixed inset-0 bg-black opacity-50 z-30"
          ></div>
        )}
      </div>
    </div>
  );
};
export default Header;
