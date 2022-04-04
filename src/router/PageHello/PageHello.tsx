import React from 'react';
import {PageDefault} from '../../components/PageDefault';
import {usePageHello} from './hook';
import {useStyles} from './styles';

export const PageHello = () => {
  const styles = useStyles();
  const {onHidePageHello} = usePageHello();

  return (
    <PageDefault title="Hello!" buttonText="Go" buttonHandler={onHidePageHello}>
      <div css={styles.page}>
        {`Welcome to the Project Telegram contest chart.`}
      </div>
    </PageDefault>
  );
};
