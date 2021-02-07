import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import s from './AppBar.module.css';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

export default function AppBar() {
  const isLoggedInUser = useSelector(getIsLoggedIn);
  console.log(isLoggedInUser);

  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedInUser ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
