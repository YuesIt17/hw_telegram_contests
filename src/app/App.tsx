import React, {createContext, useCallback, useState} from 'react';
import {CheckBox} from '../components/CheckBox';
import {TCheckboxField} from '../components/CheckBox/types';
import {CHART_WIDTH} from '../features/telegramChart/constants';
import {TelegramChartClass} from '../features/telegramChart/sampleClassComponent/containers';
import {TelegramChart} from '../features/telegramChart/containers';
import {useStyles} from './styles';

export const ClassComponentContext = createContext({hasClassComponent: false});

export default function App() {
  const styles = useStyles({width: CHART_WIDTH});
  const [isVisibleChart, setVisibleChart] = useState(true);
  const [toggleClassComponent, setToggleClassComponent] = useState(false);
  const onChangeVisibleHadler = useCallback(
    (field: TCheckboxField) => setVisibleChart(field.value),
    [setVisibleChart]
  );

  const onToggleClassComponent = useCallback(
    (field: TCheckboxField) => setToggleClassComponent(field.value),
    [setToggleClassComponent]
  );

  return (
    <div style={styles.app}>
      <div style={styles.toolbar}>
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
