import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Imge = () => {
  return (
    <div className="">
      <div className="relative">
        <Image src="/Image.png" width={1216} height={400} />
        <div className="w-[508px] h-[252px] p-10 absolute left-2 bottom-2 bg-white rounded-2xl flex flex-col gap-4">
          <div className="bg-[#4B6BFB] w-[80px] font-bold text-[12px] py-2 px-[2px] text-white rounded-xl" >Technology</div>
          <div className="font-bold text-[30px]">Grid system for better Design User Interface</div>
          <div className="text-[#97989F]">August 20, 2022</div>
        </div>
      </div>

      <div className="flex justify-end mt-4 gap-2">
        <div className="w-10 h-10 rounded-xl border-2 border-slate-500  flex items-center justify-center">
          <IoIosArrowBack size={35} className="text-slate-500" />
        </div>
        <div className="w-10 h-10 rounded-xl border-2 border-slate-500 items-center flex justify-center">
          <IoIosArrowForward size={35} className="text-slate-500" />
        </div>
      </div>
    </div>
  );
};

export default Imge;
