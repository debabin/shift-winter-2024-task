import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './utils/redux/store';
import { Provider } from 'react-redux';

import { RootPage } from './pages/root';
import { ROUTES } from './utils/constants/router';

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <RootPage />
  }
]);

export const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
