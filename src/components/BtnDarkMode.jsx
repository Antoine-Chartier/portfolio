import { useEffect, useState } from "react";

const BtnDarkMode = () => {
  const [theme, setTheme] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

  // Toggle between 'light' and 'dark' themes
  const toggleTheme = (sysColor) => {
    console.log("sysColor:", sysColor);
    console.log(sysColor === "default" ? "true" : "");
    sysColor === "default"
      ? setTheme(theme === "light" ? "dark" : "light")
      : setTheme(sysColor);
    // setTheme(theme === "light" ? "dark" : "light");
  };

  // Apply the theme to the body element
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  // const lightModeMediaQuery = window.matchMedia('(prefers-color-scheme: light)');

  const handleDarkModeChange = (e) => {
    console.log("je toggle:", e);
    if (e.matches) {
      toggleTheme("dark");
      console.log('Dark mode is on');
    } else {
      toggleTheme("light");
      console.log('Dark mode is off');
    }
  };
  
  // Listen for changes
  darkModeMediaQuery.addEventListener('change', handleDarkModeChange);
  // lightModeMediaQuery.addEventListener('change', handleDarkModeChange);


  return (
    <button onClick={() => toggleTheme("default")} className="btn-dark-mode">
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default BtnDarkMode;
