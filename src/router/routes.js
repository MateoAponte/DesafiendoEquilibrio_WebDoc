import Home from '../views/Home';
import { TeamWork } from '../views/TeamWork';
import { Project } from '../views/Project';
import { Contact } from '../views/Contact';

export const ROUTES = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/equipo',
    element: <TeamWork />,
  },
  {
    path: '/proyecto',
    element: <Project />,
  },
  {
    path: '/contactanos',
    element: <Contact />,
  },
];
