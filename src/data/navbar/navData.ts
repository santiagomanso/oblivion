import { navDataArray } from '@/types/navDataType'
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons'

export const navData: navDataArray = [
  {
    id: 1,
    text: 'Home',
    path: '/',
    icon: faHouse,
  },
  {
    id: 2,
    text: 'Language',
    path: '',
  },
  {
    id: 3,
    text: 'Theme',
    path: '',
  },
  {
    id: 4,
    text: 'play',
    path: '/selectPlayer',
  },
  {
    id: 5,
    text: 'Login',
    path: '/login',
  },
  {
    id: 6,
    text: 'Profile',
    path: '/profile',
    icon: faUser,
  },
]
