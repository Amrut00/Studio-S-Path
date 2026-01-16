import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const MainLayout = () => {
  const location = useLocation();
  const isLanding = location.pathname === '/';
  const isProjectsIndex = location.pathname === '/projects';

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Nav />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer compact={isLanding || isProjectsIndex} />
    </div>
  );
};

export default MainLayout;
