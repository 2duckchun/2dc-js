import style from "./NavToggleButton.module.scss";

export default function NavToggleButton({ navToggleHandler }: any) {
  return (
    <button
      className={`${style.header_toggle} header_toggle`}
      onClick={navToggleHandler}
    >
      <div className={style.toggle_div1}></div>
      <div className={style.toggle_div2}></div>
      <div className={style.toggle_div3}></div>
    </button>
  );
}
