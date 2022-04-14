import React, {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {PageDefault} from '../../components/Pages';
import {useStyles} from './styles';

export const PageNotFound = () => {
  const styles = useStyles();
  const navigate = useNavigate();

  const onGoToMainPage = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <PageDefault
      title="Error 404"
      buttonText="Go back to main"
      buttonHandler={onGoToMainPage}
    >
      <div css={styles.page}>
        {`The requested page was not found, the page may have been deleted, 
        moved to another location, or an error was made when entering the address.`}
      </div>
    </PageDefault>
  );
};
