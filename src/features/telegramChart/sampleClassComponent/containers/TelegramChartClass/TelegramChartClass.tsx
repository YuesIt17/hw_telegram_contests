import React from 'react';
import {
  TChartDataLabel,
  TChartDataLine,
  prepareData,
  omit,
} from '../../../../../utils';
import {ChartAction} from '../../../store/actions';
import {reducer} from '../../../store/reducer';
import {mockDataCharts} from '../../../../../api/telegramChart';
import {TelegramChartFooter, TelegramChartLine} from '../../../components';
import {TTelegramChartLine} from '../../../components/TelegramChartLine/types';
import {TTelegramChart} from '../../../containers/TelegramChart/types';
import {useStyles} from '../../../containers/TelegramChart/styles';
import {TChartClassData} from './types';
import {PEDDING_CHART_SIZE} from '../../../constants';
import {SerializedStyles} from '@emotion/react';

export class TelegramChartClass extends React.Component<
  TTelegramChart,
  TTelegramChartLine
> {
  styles: {chart: SerializedStyles};

  constructor(props: TTelegramChart) {
    super(props);
    const width = props.width;
    this.styles = useStyles({width});
    this.state = {
      data: [] as TChartDataLine[],
      maxDataX: 0,
      maxDataY: 0,
      labelsX: [] as TChartDataLabel[],
      labelsY: [] as TChartDataLabel[],
      width: width,
    };
    this.dispatch = this.dispatch.bind(this);
    this.onChangeHadler = this.onChangeHadler.bind(this);
  }

  dispatch = ({
    action,
    payload,
  }: {
    action: ChartAction;
    payload: TChartClassData;
  }) => {
    const data = reducer(this.state.data, {
      type: action,
      payload: payload.lines,
    });
    this.setState({data: data, ...payload});
  };

  componentDidMount() {
    const dataChart = prepareData(mockDataCharts);
    this.dispatch({action: ChartAction.setAll, payload: dataChart});
  }

  componentWillUnmount() {
    this.dispatch({
      action: ChartAction.setAll,
      payload: {lines: [], labelsX: [], labelsY: [], maxDataX: 0, maxDataY: 0},
    });
  }

  onChangeHadler = (line: TChartDataLine, isVisible: boolean) => {
    const chartData = omit(this.state, 'data');
    this.dispatch({
      action: ChartAction.updateOne,
      payload: {...chartData, lines: {...line, isVisible: isVisible}},
    });
  };

  render() {
    return (
      <div css={this.styles.chart} data-testid="telegramChartClass">
        <TelegramChartLine
          data={this.state.data}
          maxDataX={this.state.maxDataX}
          maxDataY={this.state.maxDataY}
          labelsX={this.state.labelsX}
          labelsY={this.state.labelsY}
          peddingSize={PEDDING_CHART_SIZE}
        />
        <TelegramChartFooter
          data={this.state.data}
          onChange={this.onChangeHadler}
        />
      </div>
    );
  }
}
