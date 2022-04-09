import React, {createContext} from 'react';
import {CheckBox} from '../../../../components/CheckBox';
import {CHART_WIDTH} from '../../constants';
import {TelegramChart} from '../../containers';
import {TelegramChartClass} from '../../sampleClassComponent/containers';
import {useTelegramChartPage} from './hook';
import {useStyles} from './styles';

export const ClassComponentContext = createContext({hasClassComponent: false});

export function TelegramChartPage() {
  const styles = useStyles({width: CHART_WIDTH});
  const {
    isVisibleChart,
    toggleClassComponent,
    onChangeVisibleHadler,
    onToggleClassComponent,
  } = useTelegramChartPage();

  return (
    <div css={styles.chartPage} data-testid="telegramChartPage">
      <div css={styles.toolbar}>
        <CheckBox
          label={'Show/Hide Graph'}
          name="isVisibleChart"
          value={isVisibleChart}
          color="#1565c0"
          onChange={onChangeVisibleHadler}
        />
        <CheckBox
          label={'Use class component'}
          name="toggleClassComponent"
          value={toggleClassComponent}
          color="#1565c0"
          onChange={onToggleClassComponent}
        />
      </div>
      <ClassComponentContext.Provider
        value={{hasClassComponent: toggleClassComponent}}
      >
        <>
          {isVisibleChart && !toggleClassComponent && (
            <TelegramChart width={CHART_WIDTH} />
          )}
          {isVisibleChart && toggleClassComponent && (
            <TelegramChartClass width={CHART_WIDTH} />
          )}
        </>
      </ClassComponentContext.Provider>
    </div>
  );
}
