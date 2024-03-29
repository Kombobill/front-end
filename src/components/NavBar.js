import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function NavBar({ user, setUser }) {

  // DEPLOYED API LINK
  // const BASE_URL = 'https://icare-backend-production-a245.up.railway.app';
  // const BASE_URL = 'http://localhost:3000';

  function handleLogoutClick() {
    fetch(`/logout`, { method: 'DELETE' }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header>
      <nav>
        <div>
          <Link className='logo' to='/'>
            <span className='i-logo'>central-Hospital</span>
          </Link>
        </div>
        <div>
          {user ? (
            <>
              <NavLink
                className='nav-menu'
                to={`/me`}
                style={{ width: 'max-content' }}
              >
                Appointments
              </NavLink>
              <NavLink
                className='nav-menu'
                onClick={handleLogoutClick}
                to={`/`}
                variant='outline'
              >
                Logout
              </NavLink>
            </>
          ) : (
            <>
              <NavLink className='nav-menu' exact to={`/signup`}>
                Signup
              </NavLink>
              <NavLink className='nav-menu' exact to={`/login`}>
                Login
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
