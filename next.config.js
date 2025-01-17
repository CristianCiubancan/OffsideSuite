const path = require("path");

module.exports = {
  webpack: (config, { isServer }) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "styles");
    return config;
  },
};
