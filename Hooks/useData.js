import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
import useLocalStorage from "./useLocalStorage";
const useData = (url, key) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (window.localStorage.getItem("data")) {
      const storage = new Promise((resolve, reject) => {
        resolve(window.localStorage.getItem(key));
      }).then((data) => {
        setData(JSON.parse(data));
        setIsLoading(false);
      });
    } else {
      fetch(url, {
        method: "GET",
        headers: {
          accept: "applictaion/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setIsLoading(false);
          window.localStorage.setItem("data", JSON.stringify(data));
        });
    }
  }, []);
  return [data, isLoading];
};
export default useData;
