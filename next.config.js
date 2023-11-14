const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, './src/assets/styles')],
    prependData: '@import "@styles/index.scss";',
  },
};

module.exports = nextConfig;
