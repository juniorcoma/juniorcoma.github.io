import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import MoblieNavBar from './MoblieNavBar';

export default function Layout() {
  return (
    <>
      <Outlet />
      <div className="navigation-container">
        <NavBar />
        <MoblieNavBar />
      </div>
    </>
  );
}
