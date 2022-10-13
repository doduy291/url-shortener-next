module.exports = {
  "./src/**/*.(ts|tsx|js|jsx)": (filenames) =>
    `npx eslint ${filenames.join(" ")}`,
  "./src/**/*.(css|scss|sass|styles.(js|ts))": (filenames) =>
    `npx stylelint ${filenames.join(" ")}`,
};
