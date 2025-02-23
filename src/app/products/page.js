import ProductCard from "@/components/ProductCard";
import React from "react";

const AllProducts = async () => {
  const res = await fetch("http://localhost:5000/products/", {
    cache: "no-store",
  });
  const products = await res.json();
  return (
    <div>
      <h1>All products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
