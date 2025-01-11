import { createBrowserRouter } from 'react-router';

import { RootLayout } from '@app/layout';
import { HomePage } from "@pages/home";
import JudgeInputPage from "@pages/judge/ui/JudgeInputPage.tsx";
import LoadingPage from "@pages/judge/ui/LoadingPage.tsx";
import RulesPage from "@pages/rules/ui/RulesPage.tsx";
import JudgeResultPage from "@pages/judge/ui/JudgeResultPage.tsx";
import OnboardingPage from "@pages/onboard/OnboardingPage.tsx";
import { CalendarPage } from "pages/calendar";
import CalendarResultPage from "@pages/calendar/ui/CalendarResultPage.tsx";


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
        path: 'calendar',
        element: <CalendarPage/>,
      },
      {
        path: 'calendar-result',
        element: <CalendarResultPage/>,
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
      }

    ],
  },
]);
