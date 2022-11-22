/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `
      @import "src/styles/_variables.scss"; 
      @import "src/styles/_mixins.scss"; 
      @import "src/styles/_keyframes.scss";`,
  },
};

module.exports = nextConfig;
