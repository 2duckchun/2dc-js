import style from "./Page.module.scss";

export default function Page({ children }: { children: React.ReactNode }) {
  return <div className={style.page}>{children}</div>;
}
