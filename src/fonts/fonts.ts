import { M_PLUS_1 } from "next/font/google";
import localFont from "next/font/local";

const font_M_PLUS_1 = M_PLUS_1({
  subsets: ["latin"],
  variable: "--logo-font",
});

const font_pretended = localFont({
  src: "./PretendardVariable.woff2",
});

export { font_M_PLUS_1, font_pretended };
