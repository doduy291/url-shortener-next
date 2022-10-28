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

export { debounce };
