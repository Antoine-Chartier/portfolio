const storageKey = "theme-preference";
const theme = { value: "light" };

const setPreferenceInit = () => {
  theme.value = getColorPreference();
  localStorage.setItem(storageKey, getColorPreference());
  reflectPreference(theme);
};

const setPreference = (theme) => {
//   theme.value = theme.value;
  localStorage.setItem(storageKey, theme.value);
  reflectPreference(theme);
};

const getColorPreference = () => {
  if (localStorage.getItem(storageKey)) return localStorage.getItem(storageKey);
  else
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
};

const reflectPreference = (theme) => {
  document.firstElementChild.setAttribute("data-theme", theme.value);
  console.log("reflectPreference is called, with : ", theme.value);
  document
    .querySelector("#theme-toggle")
    ?.setAttribute("aria-label", theme.value);
};


window.onload = () => {
  // set on load so screen readers can get the latest value on the button
  reflectPreference(theme);

  // now this script can find and listen for clicks on the control
  document.querySelector("#theme-toggle").addEventListener("click", onClick);
};

const onClick = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
  console.log("onClick is called, with : ", theme.value);
  setPreference(theme);
};

setPreferenceInit();

