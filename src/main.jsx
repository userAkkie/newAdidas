import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductProvider from "./context/ProductContext";
import { FavoriteProvider } from "./context/FavoriteContext";
import { BasketProvider } from "./context/BasketContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FavoriteProvider>
      <BasketProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </BasketProvider>
    </FavoriteProvider>
  </BrowserRouter>
);
