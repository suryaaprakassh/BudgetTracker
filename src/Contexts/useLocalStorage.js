import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  //two way binding

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);
    if (typeof defaultValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(
    () => {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key, value], //dependency array
  );

  return [value, setValue];
}
