import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import s from './Navigation.module.css';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

const Navigation = () => {
  const isLoggedInUser = useSelector(getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        <HomeIcon className={s.home} fontSize="large" />
      </NavLink>
      {isLoggedInUser && (
        <NavLink
          to="/contacts"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
