import React from "react";
import ICONRATE from "../../../assets/star.svg";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter.jsx";

const CartProducts = ({
  product,
  shopping,
  addCart,
  delFromCart,
  handleDescription,
}) => {
  const cartShopping = shopping.find((item) => item.id === product.id);

  return (
    <div className="w-full h-[460px] sm:w-80 flex flex-col justify-evenly bg-white">
      <CardHeader product={product} />

      <CardBody product={product} ICONRATE={ICONRATE} />

      <CardFooter
        product={product}
        cartShopping={cartShopping}
        addCart={addCart}
        delFromCart={delFromCart}
        handleDescription={handleDescription}
      />
    </div>
  );
};

export default CartProducts;
