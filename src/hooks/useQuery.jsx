import { useEffect, useState } from "react";
import { fetchProductsByQuery } from "../services/queryService";

export const useQuery = (sqlQuery) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;

    const fetchData = async () => {
      setLoading(true);
      const result = await fetchProductsByQuery(sqlQuery);
      if (!isCancelled) {
        setData(result);
        setLoading(false);
      }
    };

    if (sqlQuery) fetchData();

    return () => {
      isCancelled = true;
    };
  }, [sqlQuery]);

  return { data, loading };
};
