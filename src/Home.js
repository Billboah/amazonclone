import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Barner from "./Barner";
import ProductFeed from "./ProductFeed";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="max-w-screen-2xl ml-auto mr-auto">
      <Barner />
      <div className="">
        <ProductFeed products={products} />
      </div>
    </div>
  );
};

export default Home;
