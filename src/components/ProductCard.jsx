"use client";

import Image from "next/image";
const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center">
      <Image
        src={product.image}
        alt={product.brand}
        width={200}
        height={200}
        className="rounded-lg object-cover"
      />
      <h2 className="text-lg font-semibold mt-2">{product.brand}</h2>
      <p className="text-gray-500 text-sm">{product.category}</p>
      <p className="text-xl font-bold mt-1">${product.price}</p>
      <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
