import { MutableRefObject } from "react";

// prevent execute continuously a function
// Seem to work when to use useRef in React and no "return () => {}"
export const debounce = (
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

export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    return false;
  }
};
