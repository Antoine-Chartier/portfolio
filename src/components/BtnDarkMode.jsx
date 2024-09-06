import { useEffect, useState } from "react";

const BtnDarkMode = () => {
  const [theme, setTheme] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

  // Toggle between 'light' and 'dark' themes
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Apply the theme to the body element
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


//   const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
//   const lightModeMediaQuery = window.matchMedia('(prefers-color-scheme: light)');

//   const handleDarkModeChange = (e) => {
//     toggleTheme();
//     if (e.matches) {
//       console.log('Dark mode is on');
//     } else {
//       console.log('Dark mode is off');
//     }
//   };
  
//   // Listen for changes
//   darkModeMediaQuery.addEventListener('change', handleDarkModeChange);
//   lightModeMediaQuery.addEventListener('change', handleDarkModeChange);


  return (
    <button onClick={toggleTheme} className="btn-dark-mode">
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default BtnDarkMode;
