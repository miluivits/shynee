import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import './Layout.css';

export default function Layout() {
  const { pathname } = useLocation();
  
  const pageClass =
    pathname === '/rendeles'  ? 'page-rendeles' :
    pathname === '/rolunk'    ? 'page-rolunk'   :
    pathname === '/media'     ? 'page-media'    :
    pathname === '/kapcsolat' ? 'page-kapcsolat':
                                 'page-home';

  return (
    <div className={`page-container ${pageClass}`}>
      <Navbar />
      <Outlet />
    </div>
  );
}
