import { useEffect, useState } from "react";

export function useFetchCategories() {
  const [categories, setCategories] = useState(null);

  const url = "https://fakestoreapi.com/products/categories";

  useEffect(() => {
    const getCategories = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) throw { status: response.status };

        setCategories(data);
      } catch (error) {
        let message = error.status || "Ocurrió un error";
        console.warn(message);
      }
    };

    getCategories(url);
  }, []);

  return { categories };
}
