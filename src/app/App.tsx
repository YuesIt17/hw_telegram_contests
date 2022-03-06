import React, {useCallback, useState} from 'react';
import {CheckBox} from '../components/CheckBox';
import {TCheckboxField} from '../components/CheckBox/types';
import {CHART_WIDTH} from '../features/telegramChart/constants';
import {TelegramChartClass} from '../features/telegramChart/sampleClassComponent/containers';
//import {TelegramChart} from '../features/telegramChart/containers';
import {useStyles} from './styles';

export default function App() {
  const styles = useStyles({width: CHART_WIDTH});
  const [toggle, setToggle] = useState(true);
  const onToggleHadler = useCallback(
    (field: TCheckboxField) => setToggle(field.value),
    [setToggle]
  );

  return (
    <div style={styles.app}>
      <div style={styles.toolbar}>
        <CheckBox
          label={'Показать/Скрыть график'}
          name="chart"
          value={toggle}
          color="#1565c0"
          onChange={onToggleHadler}
        />
      </div>
      {/* {toggle && <TelegramChart />} */}
      {toggle && <TelegramChartClass width={CHART_WIDTH} />}
    </div>
  );
}
