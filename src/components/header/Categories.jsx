import React from "react";

const Categories = ({ cate, category, setCategory }) => {
  const letterCapital = cate.at(0).toUpperCase();
  const CATEGORY = letterCapital + cate.slice(1);
  return (
    <li
      className={` h-12 text-center rounded-lg ${
        category === cate
          ? "w-10/12 order-first bg-tertiary text-white text-2xl font-bold"
          : "w-36 bg-red-200  text-primary text-base font-semibold"
      } `}>
      <button className="w-full h-12" onClick={() => setCategory(cate)}>
        {CATEGORY}
      </button>
    </li>
  );
};

export default Categories;
