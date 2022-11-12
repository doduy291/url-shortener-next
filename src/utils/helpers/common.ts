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

export const isJSON = (str: string) => {
  try {
    const json = JSON.parse(str);
    return typeof json === "object";
  } catch (error) {
    return false;
  }
};
