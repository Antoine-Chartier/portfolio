// src/config.js
export const getThemeColor = () => {
  // Logic to get the user's preferred theme color
  // This could be from localStorage, a context, or any other source
  const userPreferredThemeColor = localStorage.getItem('themeColor') || '#f5f5f5';
  return userPreferredThemeColor;
};