import { createBrowserRouter } from 'react-router';

import { RootLayout } from '@app/layout';
import { HomePage } from "@pages/home";
import { CalendarPage } from "@pages/calendar";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: 'calendar',
        element: <CalendarPage/>,
      }

    ],
  },
]);
