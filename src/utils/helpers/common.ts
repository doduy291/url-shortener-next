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

export const downloadQRSvgAsPNG = (slug: string) => {
  const svg = document.querySelector("#qrcode") as Element;
  const uriData = `data:image/svg+xml;base64,${btoa(
    new XMLSerializer().serializeToString(svg),
  )}`;

  const img = new Image();
  img.src = uriData;
  img.onload = () => {
    const canvas = document.createElement("canvas") as HTMLCanvasElement;
    canvas.width = 168;
    canvas.height = 168;
    const ctx = canvas.getContext("2d");
    ctx?.drawImage(img, 0, 0);

    // Use <a> element to download
    const a = document.createElement("a");
    const quality = 1.0;
    a.href = canvas.toDataURL("image/png", quality);
    a.download = `${slug}-QR.png`;
    a.click();
    a.remove();
  };
};
