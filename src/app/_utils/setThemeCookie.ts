export default function setThemeCookie() {
  const cookieArray = document.cookie.split(";");
  const keyValue = cookieArray.find((theme) =>
    theme.trim().startsWith("theme")
  );

  if (!keyValue) {
    document.cookie = "theme=dark";
    return "dark";
  }

  const currentTheme = keyValue.split("=")[1];

  currentTheme === "dark"
    ? (document.cookie = "theme=light")
    : (document.cookie = "theme=dark");

  return currentTheme === "dark" ? "light" : "dark";
}
