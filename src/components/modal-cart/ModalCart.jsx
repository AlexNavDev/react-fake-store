import React from "react";
import Swal from "sweetalert2";
import ShoppingCart from "./ShoppingCart";

const ModalCart = ({
  closeModal,
  cart,
  addCart,
  delFromCart,
  clearCart,
  total,
  count,
}) => {
  const handleBuy = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Thank you for purchasing",
      showConfirmButton: false,
      timer: 2000,
    });
    clearCart();
  };
  return (
    <>
      <article className="max-w-screen-sm w-full h-4/6 flex flex-col gap-5 text-center overflow-y-scroll bg-slate-600 relative">
        {cart?.map((item) => (
          <ShoppingCart
            key={item.id}
            product={item}
            addCart={addCart}
            delFromCart={delFromCart}
            clearCart={clearCart}
            count={count}
          />
        ))}
      </article>

      <div className="max-w-screen-sm flex items-center justify-around w-full h-24 bg-slate-300">
        <button
          className="w-24 h-12 px-3 font-bold text-white bg-red-500 border border-red-700 hover:bg-red-700 rounded-md"
          onClick={closeModal}>
          Close
        </button>

        <button
          className="w-24 h-12 px-3 font-bold text-white bg-blue-500 border border-blue-700 hover:bg-blue-700 rounded-md"
          onClick={handleBuy}>
          Buy Now
        </button>

        <div className="w-18 h-14">
          <p className="text-primary font-bold">Total</p>
          <span className="text-primary font-bold border border-b-blue-900">
            $ {total.toFixed(2)}
          </span>
        </div>
      </div>
    </>
  );
};

export default ModalCart;
