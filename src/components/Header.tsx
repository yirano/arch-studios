import Image from "next/image";
import Button from "./blocks/Button";

export default function Header() {
  return (
    <div className="relative overflow-hidden">
      <Image alt="Photo of skyriser"
        fill={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/hero.png" className="relative object-cover object-center  z-[-1]" />
      <div className="pt-[186px] pl-[190px] pb-[179px] w-1/2">
        <h1 className="text-white text-heading-lg">Project Paramour</h1>
        <p className="text-white text-body pt-[10px] w-9/12">Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.</p>
        <Button customClass="mt-[41px]" >See our Portfolio</Button>
      </div>
    </div>
  );
}