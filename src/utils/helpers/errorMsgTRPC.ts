export const errorMsgTRPC = (params: string | Array<{ message: string }>) => {
  if (typeof params === "string") {
    return params;
  }
  return params[0].message;
};
