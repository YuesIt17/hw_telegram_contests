import {useEffect, useMemo, useReducer} from "react";
import {dataCharts} from "../../../../api/telegramChart";
import {prepareData} from "../../../../utils/prepareData/prepareData";
import {TChartLine} from "../../../../utils/prepareData/types";
import {ChartAction} from "../../store/actions";
import {reducer} from "../../store/reducer";

const initialState: TChartLine[] = [];

export function useTelegramChart() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {lines, maxDataX, maxDataY, labelsX, labelsY} = useMemo(() => prepareData(dataCharts), [dataCharts]);
  
  useEffect(() => {
    dispatch({type: ChartAction.setAll, payload: lines});
  }, [lines]);
  
  const onChangeHadler = (line: TChartLine, isVisible: boolean) => {
    dispatch({type: ChartAction.updateOne, payload: {...line, isVisible: isVisible}});
  }

  return {data: state, maxDataX, maxDataY, labelsX, labelsY, onChangeHadler}
}
