import { CustomLinkHref } from "@/types/common";
import Link from "next/link";

export default function CustomLink({ href, children }: CustomLinkHref) {
  return (
    <Link href={href} style={{ textDecoration: "none", width: "fit-content" }}>
      {children}
    </Link>
  );
}
