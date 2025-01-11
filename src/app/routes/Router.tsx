import { createBrowserRouter } from 'react-router';

import { RootLayout } from '@app/layout';
import { HomePage } from "@pages/home";
import JudgeInputPage from "@pages/judge/ui/JudgeInputPage.tsx";
import LoadingPage from "@pages/judge/ui/LoadingPage.tsx";
import RulesPage from "@pages/rules/ui/RulesPage.tsx";
import JudgeResultPage from "@pages/judge/ui/JudgeResultPage.tsx";
import OnboardingPage from "@pages/onboard/OnboardingPage.tsx";
import AlarmPage from '@pages/alarm/ui/AlarmPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <OnboardingPage />,
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
      {
        path: 'judge-result',
        element: <JudgeResultPage />
      },
      {
        path: 'home',
        element: <HomePage />
      },
      {
        path: 'alarm',
        element: <AlarmPage />
      }
    ],
  },
]);
