import { addDecorator } from "@storybook/react";
import {ThemeProvider} from '@emotion/react';
import {theme} from '../src/app/App';
import { withThemes } from '@react-theming/storybook-addon';

addDecorator(withThemes(ThemeProvider, [theme]));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}