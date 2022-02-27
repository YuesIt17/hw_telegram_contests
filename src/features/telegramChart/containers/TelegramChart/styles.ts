import { CSSProperties } from "react";
import {TTelegramChartStyle} from "./types";

export const useStyles = ({width}: TTelegramChartStyle): Record<'chart', CSSProperties | undefined> => ({
  chart: {
    width: width, 
    margin: 50, 
    alignSelf: 'flex-start',
  }
});
