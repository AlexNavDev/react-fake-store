import React from "react";

const CardFooter = ({
  product,
  cartShopping,
  addCart,
  delFromCart,
  handleDescription,
}) => {
  return (
    <div className="flex items-center h-24 bg-slate-700 justify-evenly">
      {!cartShopping ? (
        <button
          onClick={() => addCart(product.id)}
          className="px-4 py-2 font-bold text-white bg-secondary shadow-lg shadow-indigo-400/50 rounded h-11 hover:bg-indigo-600">
          Add to cart
        </button>
      ) : (
        <button
          onClick={() => delFromCart(product.id, true)}
          className="px-4 py-2 font-bold text-red-400 bg-secondary shadow-lg shadow-indigo-400/50 rounded h-11 hover:bg-indigo-600">
          Quit to cart
        </button>
      )}

      <button
        className="px-4 py-2 font-bold text-white  bg-secondary shadow-lg shadow-indigo-400/50 rounded h-11 hover:bg-indigo-600"
        onClick={() => handleDescription(product.id)}>
        Description
      </button>
    </div>
  );
};

export default CardFooter;
