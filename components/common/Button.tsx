interface ButtonProps {
  children: string,
  type?: "button" | "submit" | "reset",
  customClass?: string,
  size?: "sm" | "md" | "lg",
}

export default function Button({ children, customClass, type = "button", size = "lg" }: ButtonProps) {
  const buttonStyle = "pt-[25px] pr-[32px] pb-[22px] pl-[37px] bg-very-dark-blue text-white active:bg-light-grey w-[fit-content]";
  return (
    <button type={type} className={`${buttonStyle}  ${customClass}`}>{children}</button>
  );
}