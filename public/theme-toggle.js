const storageKey = "theme-preference";

const onClick = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
  console.log("onClick is called, with : ", theme.value);
  setPreference();
};

const transitionManager = () => {
  const enable = () =>
    document.documentElement.style.setProperty("--transition-delay", "0.5s");
  const disable = () =>
    document.documentElement.style.setProperty("--transition-delay", "0");
  return { enable, disable };
};

const getColorPreference = () => {
  if (localStorage.getItem(storageKey)) return localStorage.getItem(storageKey);
  else
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
};

const setPreference = () => {
  localStorage.setItem(storageKey, theme.value);
  reflectPreference();
};

const reflectPreference = () => {
  const transitions = transitionManager();
  transitions.disable();
  document.firstElementChild.setAttribute("data-theme", theme.value);
  document
    .querySelector("#theme-toggle")
    ?.setAttribute("aria-label", theme.value);

  window.getComputedStyle(document.documentElement).transitionDelay;
  console.log(
    window.getComputedStyle(document.documentElement).transitionDelay
  );
  transitions.enable();
  console.log(
    window.getComputedStyle(document.documentElement).transitionDelay
  );
};

const theme = { value: getColorPreference() };

reflectPreference();

window.onload = () => {
  // set on load so screen readers can get the latest value on the button
  reflectPreference();

  // now this script can find and listen for clicks on the control
  document.getElementById("theme-toggle").addEventListener("click", onClick);
};

// listen for changes to the system theme and update the THEME
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    theme.value = isDark ? "dark" : "light";
    setPreference();
  });
