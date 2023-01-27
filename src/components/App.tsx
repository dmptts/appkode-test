import { createHashRouter, RouterProvider } from 'react-router-dom';
import { ConnectionStatuses } from '../const';
import { useAppDispatch } from '../hooks';
import { setConnectionStatus } from '../store/connectionSlice';
import ContactPage from './ContactPage';
import MainPage from './MainPage';

const router = createHashRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/contact/:contactId',
    element: <ContactPage />,
  },
]);

export default function App() {
  const dispatch = useAppDispatch();

  window.addEventListener('online', () =>
    dispatch(setConnectionStatus(ConnectionStatuses.PENDING))
  );

  window.addEventListener('offline', () =>
    dispatch(setConnectionStatus(ConnectionStatuses.OFFLINE))
  );

  return <RouterProvider router={router} />;
}
