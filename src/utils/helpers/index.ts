import { MutableRefObject } from "react";

// prevent execute continuously a function
// Seem to work when to use useRef in React and no "return () => {}"
const debounce = (
  cbFn: () => void,
  delay: number,
  ref: MutableRefObject<unknown>,
) => {
  if (ref.current) {
    clearTimeout(ref.current as keyof MutableRefObject<unknown>);
  }
  ref.current = setTimeout(() => {
    cbFn();
  }, delay);
};

const baseUrl = () => {
  if (typeof window !== "undefined") {
    return window.location.origin; // browser should use relative url
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  }
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export { debounce, baseUrl };
