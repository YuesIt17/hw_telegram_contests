import '@emotion/react';
import {Property} from 'csstype';

declare module '@emotion/react' {
  export interface Theme {
    paper: {
      backgroundColor: Property.Color;
    };
    colors: {
      primary: Property.Color;
      outlined: Property.Color;
    };
  }
}
