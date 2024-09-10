import { useEffect, useState } from "react";

function BtnToggleModeCssOnly() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    // Here you can also add logic to apply the theme to your application
    document.getElementById("color-scheme").value = theme;
  }, [theme]);

  const handleChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <select id="color-scheme" onChange={handleChange}>
      <option value="system" defaultValue>
        System
      </option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
}

export default BtnToggleModeCssOnly;
