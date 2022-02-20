import { CSSProperties } from "react";

const useStyles = (): Record<'chart', CSSProperties | undefined> => ({
  chart: {
    width: '700px', 
    margin: '50px', 
    alignSelf: 'flex-start',
  }
});

export default useStyles;