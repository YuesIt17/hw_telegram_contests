import React, {Suspense} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Layout} from '../components/Layout';
import {Auth} from '../features/auth';
import {PageHello} from './PageHello';
import {PageNotFound} from './PageNotFound';
import {ProtectedRoute} from './ProtectedRoute';

const TelegramChart = React.lazy(() => import('../features/telegramChart'));

const mainElement = (
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
        <Route path="/hello" element={<PageHello />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  </ProtectedRoute>
);

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/*" element={mainElement} />
    </Routes>
  </BrowserRouter>
);
