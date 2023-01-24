import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import ShieldIcon from '@mui/icons-material/Shield';
import BikeScooterIcon from '@mui/icons-material/BikeScooter';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';

export const sidebarItems = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <HomeIcon/>
  },
  {
    title: 'Usuarios',
    path: '/users',
    icon: <PeopleIcon/>,
    children: [
      { title: 'Ver', path: '/users' },
      { title: 'Agregar', path: '/users/create' },
      { title: 'Editar', path: '/users/edit' },
    ]
  },
  {
    title: 'Bicicletas',
    path: '/bikes',
    icon: <BikeScooterIcon/>,
    children: [
      { title: 'Ver', path: '/bikes' },
      { title: 'Agregar', path: '/bikes/create' },
      { title: 'Editar', path: '/bikes/edit' },
    ]
  },
  {
    title: 'Roles',
    path: '/roles',
    icon: <ShieldIcon/>
  },
];

export const navbarAccountItems = [
  {
    title: 'Home',
    path: '/',
    icon: <HomeIcon/>
  },
  {
    title: 'Profile',
    path: '/',
    icon: <PersonIcon/>
  },
  {
    title: 'Settings',
    path: '/',
    icon: <SettingsIcon/>
  },
];