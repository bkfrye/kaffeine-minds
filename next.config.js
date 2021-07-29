require("dotenv").config();

module.exports = {
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  reactStrictMode: true,
  trailingSlash: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}
