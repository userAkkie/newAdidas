import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="fixed z-50 p-2 focus:outline-none">
        <img
          src="https://cdn-icons-png.flaticon.com/128/5358/5358649.png"
          alt=""
          width="20px"
        />
      </button>
      
      <div className={`fixed left-0 top-0 h-full w-56 bg-white transition-transform transform ease-in-out duration-300 z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
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
            <p className="font-semibold hover:text-gray-500 text-sm">3 STRIPE LIFE</p>
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
  );
};

export default BurgerMenu;
