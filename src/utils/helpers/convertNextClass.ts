// This function is only for implementing mutiple classname in NextJS

interface Styles {
  [key: string]: string;
}

export const nextCn = (styles: Styles, classNames: string) => {
  const list = classNames.split(" ");
  let classes: string = "";

  for (const cn of list) {
    classes += `${styles[cn]} `;
  }

  return classes.slice(0, -1); // Remove last break-space
};
