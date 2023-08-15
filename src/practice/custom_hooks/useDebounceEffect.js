import { useCallback, useEffect } from "react";

export default function useDebouceEffect(effect, deps, delay = 1000) {
  const callback = useCallback(effect, deps);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => {
      clearInterval(timeout);
    };
  }, [callback, delay]);
}
