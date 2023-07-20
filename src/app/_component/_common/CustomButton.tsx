export default function CustomButton({
  propStyle,
  onClickHandler,
  children,
}: {
  propStyle?: string;
  onClickHandler: () => void;
  children: React.ReactNode;
}) {
  return (
    <button className={propStyle} onClick={onClickHandler}>
      {children}
    </button>
  );
}
