export default function cookieParser(name: string) {
  const cookieArray = document.cookie.split(";");
  const keyValue = cookieArray.find((key) => key.trim().startsWith(name));

  if (!keyValue) return undefined;
  return keyValue.split("=")[1];
}
