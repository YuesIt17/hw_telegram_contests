const custom = require('../webpack.config.js');

module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@react-theming/storybook-addon"
  ],
  "framework": "@storybook/react",
  features: {
    emotionAlias: false
  },
  core: {
    builder: "webpack5"
  },
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: custom.resolve,
      module: {
        ...config.module,
        rules: [...config.module.rules],
      },
    };
  },
};
