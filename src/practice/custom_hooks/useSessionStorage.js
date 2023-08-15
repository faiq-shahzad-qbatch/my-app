import { useEffect, useState } from "react";

function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(sessionStorage.getItem(key));

  // if we have a saved value return it
  if (savedValue) return savedValue;

  // if we don't have saved value then either call the init value function or return the init value
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

export default function useSessionStorage(key, initialValue) {
  const [value, setValue] = useState(() => getSavedValue(key, initialValue));

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  });

  return [value, setValue];
}
