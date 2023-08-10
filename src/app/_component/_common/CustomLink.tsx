import { CustomLinkProps } from "@/types/common";
import Link from "next/link";

export default function CustomLink({
  href,
  children,
  prefetch = false,
  isBlank = false,
}: CustomLinkProps) {
  return (
    <Link
      href={href}
      style={{ textDecoration: "none", width: "fit-content" }}
      prefetch={prefetch}
      target={isBlank ? "_blank" : "_self"}
    >
      {children}
    </Link>
  );
}
