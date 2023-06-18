import { useEffect } from "react";
import { useState } from "react";

const useCategory = () => {
  const [cat, setCat] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((res) => res.json())
      .then((data) => {
        setCat(data);
        setLoading(false);
      });
  }, []);

  return [cat, loading];
};

export default useCategory;
