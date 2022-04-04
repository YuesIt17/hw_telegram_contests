import React, {FC} from 'react';
import {TPageDefault} from './types';
import {useStyles} from './styles';
import {Button} from '../Button';

export const PageDefault: FC<TPageDefault> = ({
  children,
  title,
  buttonText,
  buttonHandler,
}) => {
  const styles = useStyles();

  return (
    <div css={styles.page}>
      <h3>{title}</h3>
      <div css={styles.content}>{children}</div>
      {buttonText && buttonHandler && (
        <Button variant="primary" onClick={buttonHandler}>
          {buttonText}
        </Button>
      )}
    </div>
  );
};
