export default function setThemeInCookie(keyValue: string | undefined) {
  if (!keyValue) {
    document.cookie = "theme=dark ; path=/";
    return "dark";
  }
  keyValue === "dark" ? (keyValue = "light") : (keyValue = "dark");
  document.cookie = `theme=${keyValue}; path=/`;
  return keyValue;
}
