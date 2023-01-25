import { createHashRouter, RouterProvider } from 'react-router-dom';
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
  return <RouterProvider router={router} />;
}
