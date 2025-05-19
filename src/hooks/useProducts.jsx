import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export const useProducts = (sqlQuery) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sqlQuery) return;

    const fetchData = async () => {
      setLoading(true);

      const { data, error } = await supabase.rpc('raw', { q: sqlQuery });

      if (error) {
        console.error("Fetch error:", error.message);
        setProducts([]);
      } else {
        const result = data?.[0]?.result;
        setProducts(Array.isArray(result) ? result : []);
      }

      setLoading(false);
    };

    fetchData();
  }, [sqlQuery]);

  return { products, loading };
};