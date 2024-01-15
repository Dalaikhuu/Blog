import Image from "next/image";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  return (
    <div className="flex justify-between pr-[50px] py-[30px]">
      <Image src="/Logo.png" width={100} height={24} className="" />
      <div className="flex gap-10 ml-[150px]">
        <div>Home</div>
        <div>Blog</div>
        <div>Contact</div>
      </div>
      <div className="flex gap-2 bg-[#F4F4F5] rounded-[10px] ">
        <input placeholder="Search" className=" rounded-[10px]  p-1  bg-[#F4F4F5] text-[#A1A1AA]"/>
        <CiSearch size={25}/>

      </div>
    </div>
  );
};
export default Header;
