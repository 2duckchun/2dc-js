import "normalize.css";
import style from "./layout.module.scss";
import { m_PLUS_1 } from "@/styles/fonts";

export const metadata = {
  title: "2DCJS",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={m_PLUS_1.className}>
        <p className={style.logo_text}>2DC</p>
        {children}
      </body>
    </html>
  );
}