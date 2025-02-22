import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import React from "react";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/products/");
  const products = await res.json();
  console.log("products", products);
  return (
    <div>
      <Image
        alt="home"
        src="https://imgur.com/a/tGSksLH"
        width={200}
        height={200}
      />
      <h1>i am from home page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {/* {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))} */}
      </div>
    </div>
  );
};

export default HomePage;
