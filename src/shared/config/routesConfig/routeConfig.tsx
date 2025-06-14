import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { Pathnames } from './navigation';
import { GoalPage } from 'pages/GoalPage';

export enum AppRoutes {
   MAIN = 'main',
   GOAL = 'celi',
   NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, Pathnames> = {
   [AppRoutes.MAIN]: Pathnames.MAIN,
   [AppRoutes.GOAL]: Pathnames.GOAL,
   [AppRoutes.NOT_FOUND]: Pathnames.NOT_FOUND,
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
   [AppRoutes.MAIN]: {
      path: RoutePath.main,
      element: <MainPage />,
   },
   [AppRoutes.GOAL]: {
      path: RoutePath.celi,
      element: <GoalPage />,
   },
   [AppRoutes.NOT_FOUND]: {
      path: RoutePath.not_found,
      element: '/as',
   },
};
