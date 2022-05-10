import {useAuthContext, Layout} from '@/components';
import React, {Suspense} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {Auth} from '../features/auth';
import {AuthActions} from '../features/auth/containers/AuthActions';
import {PageHello, usePageHello} from './PageHello';
import {PageNotFound} from './PageNotFound';
import {ProtectedRoute} from './ProtectedRoute';

const TelegramChart = React.lazy(() => import('../features/telegramChart'));

const MainRoute = () => {
  const {isVisiblePageHello} = usePageHello();
  return (
    <ProtectedRoute>
      <Layout actions={<AuthActions />}>
        <Routes>
          <Route
            index
            element={
              <Suspense fallback={<div />}>
                <TelegramChart />
              </Suspense>
            }
          />
          {isVisiblePageHello && (
            <Route path="/hw_telegram_contests/hello" element={<PageHello />} />
          )}
          <Route path="/hw_telegram_contests/*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </ProtectedRoute>
  );
};

export const AppRouter = () => {
  const {isUserAuthorization} = useAuthContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/hw_telegram_contests" />} />
        {!isUserAuthorization && (
          <Route path="/hw_telegram_contests/auth" element={<Auth />} />
        )}
        <Route path="/hw_telegram_contests/*" element={<MainRoute />} />
      </Routes>
    </BrowserRouter>
  );
};
