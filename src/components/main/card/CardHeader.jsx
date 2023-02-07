import React from "react";

const CardHeader = ({ product }) => {
  return (
    <div className="text-custom-white bg-secondary w-full h-20 text-lg text-center">
      <h3
        className={`${
          product?.showDes && "bg-slate-700 text-white"
        }text-xl p-2 w-full h-full inline-flex items-center justify-center`}>
        {product.title}
      </h3>
    </div>
  );
};

export default CardHeader;
