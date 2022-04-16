const path = require('path')

const resolve = (p) => path.join(process.cwd(), p)

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
  }
};
