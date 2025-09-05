import React, { useState, useEffect } from 'react';

const RouterContext = React.createContext();

export const Link = ({ to, children, className }) => {
  const { navigate } = React.useContext(RouterContext);
  const handleClick = (event) => {
    event.preventDefault();
    navigate(to);
  };
  return (
    <a href={to} onClick={handleClick} className={`${className} no-underline`}>
      {children}
    </a>
  );
};

export const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const Route = ({ path, component: Component }) => {
  const { currentPath } = React.useContext(RouterContext);
  return currentPath === path ? <Component /> : null;
};
