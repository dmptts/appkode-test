import { useEffect } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { getAllContacts } from '../api/api';
import { useAppDispatch } from '../hooks';
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

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}
