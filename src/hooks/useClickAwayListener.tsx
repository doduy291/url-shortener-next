import { useRef, useState, useEffect } from "react";

const useClickAwayListener = (initialValue: boolean) => {
  const clickRef = useRef<HTMLDivElement>(null);
  const [isVisible, setVisible] = useState(initialValue);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const clickHandler = (event: any) => {
    if (clickRef.current && !clickRef.current.contains(event.target)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", clickHandler, true);
    return () => {
      document.removeEventListener("click", clickHandler, true);
    };
  }, []);

  return { clickRef, isVisible, setVisible };
};

export default useClickAwayListener;
