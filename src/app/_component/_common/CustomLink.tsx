import { CustomLinkHref } from "@/types/common";
import Link from "next/link";

export default function CustomLink({ href, title }: CustomLinkHref) {
  return <Link href={href}>{title}</Link>;
}
