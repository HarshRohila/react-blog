// @ts-ignore
import nightwind from 'nightwind/helper';

enum Themes {
  dark = 'dark',
  light = 'light',
}

function toggleHTMLClass() {
  const isDarkMode = isDarkModeEnabled();

  if (isDarkMode) {
    document.documentElement.classList.add(Themes.dark);
  } else {
    document.documentElement.classList.remove(Themes.dark);
  }
}

function isDarkModeEnabled() {
  const isOSThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  return localStorage.theme === Themes.dark || (!('theme' in localStorage) && isOSThemeDark);
}

function toggleLocalStorageTheme() {
  localStorage.theme = localStorage.theme === Themes.dark ? Themes.light : Themes.dark;
}

export default function toggleTheme() {
  nightwind.toggle();
  toggleLocalStorageTheme();
  toggleHTMLClass();
}
