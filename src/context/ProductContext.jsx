import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
const getData=async (categoryName)=>{
  const res = await axios.get("https://4e7b5eed79e91edc.mokky.dev/product");
  let categoryArr = res.data.filter((product) => product.categoriy == categoryName);
  setCategory(categoryArr)
}

   



  return (
    <ProductContext.Provider value={{ category,getData  }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
