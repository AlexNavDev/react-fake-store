import { useState, useEffect } from "react";

export const useFetchAllProducts = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getAllProducts = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok)
          throw { status: response.status, statusText: response.statusText };

        setData(data);
      } catch (error) {
        let message = error.status || "Ocurrió un Error";
        setError(message);
      } finally {
        setLoading(true);
      }
    };

    getAllProducts(url);
  }, [url]);

  return { data, loading, error };
};
