import Link from "next/link";
import Logo from "../icons/Logo";
import Line from "../icons/Line";

export default function Navigation() {
  const linkStyles = "text-medium-grey font-bold";
  return (
    <div className="flex">
      <div className="flex flex-col items-center">
        <Line />
        <p className="ml-[48px] text-light-grey tracking-[18px] rotate-90 uppercase">Home</p>
      </div>
      <div className="py-[56px] w-[504px] flex items-center">
        <Logo />
        <div className="flex gap-[61px] ml-[94.84px]">
          <Link className={linkStyles} href="/portfolio">Portfolio</Link>
          <Link className={linkStyles} href="/about">About Us</Link>
          <Link className={linkStyles} href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}