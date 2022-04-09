import React, {Suspense} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {useAuthContext} from '../components/AuthProvider';
import {Layout} from '../components/Layout';
import {Auth} from '../features/auth';
import {PageHello, usePageHello} from '../components/Page';
import {PageNotFound} from '../components/Page';
import {ProtectedRoute} from './ProtectedRoute';

const TelegramChart = React.lazy(() => import('../features/telegramChart'));

const MainRoute = () => {
  const {isVisiblePageHello} = usePageHello();
  return (
    <ProtectedRoute>
      <Layout>
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
            <Route path="/hello" element={<PageHello />} />
          )}
          <Route path="*" element={<PageNotFound />} />
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
        {!isUserAuthorization && <Route path="/auth" element={<Auth />} />}
        <Route path="/*" element={<MainRoute />} />
      </Routes>
    </BrowserRouter>
  );
};
