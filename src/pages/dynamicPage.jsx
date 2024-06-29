import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const DynamicPage = () => {
  const params = useParams();
  const [product, setProduct] = useState({});

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://4e7b5eed79e91edc.mokky.dev/product/${params.id}`
      );
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [params.id]);

  return (
    <div>
      <Header />

      <div className="py-6">
        <div className="sm:flex">
          <div className="grid grid-cols-1 w-full gap-1 md:w-2/3 md:grid-cols-2 md:gap-2">
            <div className="max-w-[500px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={product.img}
                alt=""
              />
            </div>
            <div className="max-w-[500px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={product.img1}
                alt=""
              />
            </div>
            <div className="hidden max-w-[500px] overflow-hidden md:block">
              <img
                className="w-full h-full object-cover"
                src={product.img2}
                alt=""
              />
            </div>
            <div className="hidden max-w-[500px] overflow-hidden md:block">
              <img
                className="w-full h-full object-cover"
                src={product.img3}
                alt=""
              />
            </div>
          </div>
          <div className=" flex flex-col gap-2 px-2 md:pl-2 md:w-1/3">
            <button
              onClick={() => window.history.back()}
              className="text-lg w-[80px] py-1 hover:bg-black hover:text-white text-gray-500"
            >
              Back
            </button>
            <div className=" flex gap-4">
              <p>{product.category}</p>
              <p>{product.category1}</p>
            </div>
            <h1 className="font-bold text-4xl">{product.name}</h1>
            <b>{product.price}</b>
            <h1 className="text-gray-500">{product.type}</h1>
            <p>{product.title}</p>
            <button className="text-white bg-black py-2 px-6 hover:text-gray-600 mt-10">
              ADD TO BAG
            </button>
            <a href="" className="border-b-2 pt-6 pb-1">
              4 interest-free payments of $20.00 with Klarna. Learn More
            </a>
            <a href="" className="border-b-2 pt-6 pb-1">
              Check if available in store
            </a>
            <a href="" className="border-b-2 pt-6 pb-1">
              Join adiClub to get unlimited free standard shipping, returns, &
              exchanges
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DynamicPage;
