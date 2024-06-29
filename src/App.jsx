import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Kids from "./pages/kids";
import Likes from "./pages/likes";
import Men from "./pages/men";
import Sale from "./pages/sale";
import StripeLife from "./pages/stripeLife";
import Women from "./pages/women";
import Basket from "./pages/basket";
import User from "./pages/user";
import DynamicPage from "./pages/dynamicPage";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/stripeLife" element={<StripeLife />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/user" element={<User />} />
        <Route path="/men/:id" element={<DynamicPage />} />
        <Route path="/women/:id" element={<DynamicPage />} />
        <Route path="/kids/:id" element={<DynamicPage />} />
        <Route path="/sale/:id" element={<DynamicPage />} />
        <Route path="/stripeLife/:id" element={<DynamicPage />} />
      </Routes>
    </div>
  );
};

export default App;
