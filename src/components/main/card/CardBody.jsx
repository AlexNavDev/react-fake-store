import React from "react";

const CardBody = ({ product, ICONRATE }) => {
  return (
    <div className="w-full h-5/6  relative">
      <div className={`${product?.showDescription ? "hidden" : "h-full"}`}>
        <figure className="w-11 absolute left-0">
          <img src={ICONRATE} alt="icon-rate" />
          <figcaption className="text-sm font-bold text-center -my-7">
            {product.rating.rate}
          </figcaption>
        </figure>
        <figure className="w-full h-full flex flex-col justify-evenly items-center ">
          <img
            className="w-48 h-52 rounded-lg"
            src={product.image}
            alt={product.name}
          />
          <figcaption className="w-16 h-16 bg-tertiary  rounded-full inline-flex justify-center items-center">
            <p className="text-white font-bold text-base tracking-widest">
              ${product.price}
            </p>
          </figcaption>
        </figure>
      </div>

      <div
        className={`${
          product?.showDescription
            ? "h-full overflow-hidden bg-slate-400"
            : "hidden"
        }`}>
        <p className="p-3 h-1 text-slate-900 font-bold ">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default CardBody;
