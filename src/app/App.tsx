import React from 'react';
import {TelegramChart} from '../features/telegramChart/containers';
import {useStyles} from './styles';

export default function App() {
  const styles = useStyles();
  return (
    <div style={styles.app}>
      <TelegramChart />
      <div>test</div>
    </div>
  );
}
