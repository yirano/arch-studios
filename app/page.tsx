import Featured from "@/components/blocks/Featured";
import Header from "../components/blocks/Header";
import HeaderTextImage from "../components/blocks/HeaderTextImage";
import ImageContent from "../components/blocks/ImageContent";

export default function Home() {
  return (
    <main className="min-h-full mx-auto ">
      <Header />
      <HeaderTextImage />
      <ImageContent />
      <Featured />
    </main>
  );
}
