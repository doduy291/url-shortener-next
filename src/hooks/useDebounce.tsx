import { useRef, useEffect } from "react";

type Timeout = null | ReturnType<typeof setTimeout>;

const useDebounce = () => {
  const timeoutRef = useRef<Timeout>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debounceFn = (cbFn: () => void, delay: number) => {
    // Clear timeout
    clearTimeout(timeoutRef.current as keyof Timeout);

    // New Timeout
    timeoutRef.current = setTimeout(() => {
      cbFn();
    }, delay);
  };

  return debounceFn;
};

export default useDebounce;
