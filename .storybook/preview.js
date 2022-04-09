import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-emotion-theme";
import {ThemeProvider} from '@emotion/react';
import {theme} from '../src/app/App';

const themes = [theme];

addDecorator(withThemesProvider(themes, ThemeProvider));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}