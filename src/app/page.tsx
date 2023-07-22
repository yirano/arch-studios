import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <main className="w-10/12 min-h-full mx-auto">
      <Header />
      <div className="relative py-[108px] flex">
        <div className="flex flex-wrap w-full">
          <div className="w-full">
            <Image alt="Skyline" src="/skyline-wall.png" className=" absolute right-0 z-[-1]" width={350} height={568} />
            <h2 className="w-3/4 text-heading-xl text-very-light-grey">Welcome</h2>
          </div>
          <div className="w-[445px] mt-[-50px] ml-[189px]">
            <h3 className="text-heading-md">Welcome to Arch Studio</h3>
            <p className="text-medium-grey pt-[43px]">
              We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.

              Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.

              We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.
            </p>
          </div>
        </div>
        <div>
        </div>
      </div>
    </main>
  );
}
