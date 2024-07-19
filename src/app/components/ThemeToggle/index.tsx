'use client';

import React, { useState, useEffect, useLayoutEffect } from 'react';
import { GetStaticProps } from 'next';
import Cookies from 'js-cookie';

interface ThemeSwitcherProps {
  onThemeChange?: (theme: string) => void;
}

// export const getStaticProps: GetStaticProps = async ({ req, res }) => {
//   const cookies = new Cookies(req, res);
//   const theme = cookies.get('theme') || 'dark';
//   console.log('getServerSideProps theme: ', theme);

//   return {
//     props: { theme2: theme },
//   };
// };

// export const experimental_ppr = true;

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ onThemeChange }) => {
  const [theme, setTheme] = useState(Cookies.get('theme') || 'dark');

  useLayoutEffect(() => {
    if (theme) {
      console.log('theme: ', theme);
      document.documentElement.dataset.theme = theme;
      Cookies.set('theme', theme);
    }
  }, [theme]);

  const toggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="flex justify-center space-x-4 mx-2">
      toggle：
      <input
        type="checkbox"
        // checked={isdark}
        onChange={toggle}
      />
    </div>
  );
};

export default ThemeSwitcher;
