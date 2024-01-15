import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Imge from "@/components/BlogImage";
import Trend from "@/components/Trending";
import { Blog } from "@/components/AllBlog";
import { Load } from "@/components/Load";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex items-center flex-col justify-center">
      <div className="flex flex-col gap-24 w-[1216px]">
        <Header />
        <Imge />
        <Trend />
        <Blog />
        <Load />
        
      </div>
      <Footer />
    </div>
  );
}
