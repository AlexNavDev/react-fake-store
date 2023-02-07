import React from "react";
import CartProducts from "./card/CartProducts";

const Products = ({
  products,
  shopping,
  addCart,
  delFromCart,
  handleDescription,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-around w-11/12 gap-6 sm:gap-y-10 mx-auto mt-3 mb-5">
      {products?.map((product) => (
        <CartProducts
          key={product.id}
          product={product}
          shopping={shopping}
          addCart={addCart}
          delFromCart={delFromCart}
          handleDescription={handleDescription}
        />
      ))}
    </div>
  );
};

export default Products;
