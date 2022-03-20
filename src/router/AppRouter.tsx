import React, {Suspense} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Layout} from '../components/Layout';
import {Auth} from '../features/auth';
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
        <Route path="*" element={<div>NotFound</div>} />
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
