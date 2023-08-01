interface ButtonProps {
  children: string,
  customClass: string;
}

export default function Button({ children, customClass = "" }: ButtonProps) {
  return (
    <button type="button" className={` ${customClass}`}>{children}</button>
  );
}