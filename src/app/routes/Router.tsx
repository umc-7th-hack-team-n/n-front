import { createBrowserRouter } from 'react-router';

import { RootLayout } from '@app/layout';
import { HomePage } from "@pages/home";
import JudgeInputPage from "@pages/judge/ui/JudgeInputPage.tsx";
import LoadingPage from "@pages/judge/ui/LoadingPage.tsx";
import JudgeResultPage from "@pages/judge/ui/JudgeResultPage.tsx";
import OnboardingPage from "@pages/onboard/OnboardingPage.tsx";

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
        path: 'judge-result',
        element: <JudgeResultPage />
      },
      {
        path: 'home',
        element: <HomePage />
      }
    ],
  },
]);
