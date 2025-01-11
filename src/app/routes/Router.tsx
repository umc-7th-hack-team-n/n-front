import { createBrowserRouter } from 'react-router';

import { RootLayout } from '@app/layout';
import { HomePage } from "@pages/home";
import JudgeInputPage from "@pages/judge/ui/JudgeInputPage.tsx";
import LoadingPage from "@pages/judge/ui/LoadingPage.tsx";
import RulesPage from "@pages/rules/ui/RulesPage.tsx";

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
        path: 'judge-input',
        element: <JudgeInputPage />
      },
      {
        path: 'loading',
        element: <LoadingPage />
      },
      {
        path: 'rules',
        element: <RulesPage />
      },
    ],
  },
]);
