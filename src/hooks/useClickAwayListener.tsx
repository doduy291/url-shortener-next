import { useRef, useState, useEffect } from "react";

const useClickAwayListener = (initialValue: boolean) => {
  const clickRef = useRef<HTMLDivElement>(null);
  const [isVisible, setVisible] = useState(initialValue);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    document.addEventListener("click", (event: any) => {
      if (!clickRef.current?.contains(event.target)) {
        setVisible(false);
      }
    });
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      document.removeEventListener("click", (event: any) => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        if (!clickRef.current?.contains(event.target)) {
          setVisible(false);
        }
      });
    };
  }, []);

  return { clickRef, isVisible, setVisible };
};

export default useClickAwayListener;
