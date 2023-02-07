import React, { useState } from "react";
import { useFetchAllProducts } from "../hooks/useFetchAllProducts";
import Header from "./header/Header";
import Loading from "./Loading";
import Main from "./main/Main";

const Ecommers = () => {
  const [category, setCategory] = useState("");

  const url = `https://fakestoreapi.com/${
    !category ? "products" : `products/category/${category}`
  }`;

  const { data, loading } = useFetchAllProducts(url);

  if (!loading) return <Loading />;

  return (
    <>
      <Header setCategory={setCategory} category={category} />
      <Main data={data} />
    </>
  );
};

export default Ecommers;
