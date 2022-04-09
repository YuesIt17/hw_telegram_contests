import {useCallback, useEffect, useMemo} from 'react';
import {useNavigate} from 'react-router-dom';

export const usePageHello = () => {
  const navigate = useNavigate();
  const visiblePageHello = localStorage.getItem('visiblePageHello');

  useEffect(() => {
    if (!visiblePageHello) {
      localStorage.setItem('visiblePageHello', 'true');
    }
  }, [visiblePageHello]);

  const isVisiblePageHello = useMemo(
    () => visiblePageHello === 'true',
    [visiblePageHello]
  );

  const onHidePageHello = useCallback(() => {
    localStorage.setItem('visiblePageHello', 'false');
    navigate('/');
  }, [navigate]);

  return {isVisiblePageHello, onHidePageHello};
};
