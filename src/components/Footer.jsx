import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
export const Footer=()=>{
    return(
        <div className="bg-[#F6F6F7] w-full flex flex-col  px-[500px] py-[64px] mt-[80px]">
            <div className="flex ">
                <div className="w-[280px] flex flex-col gap-6">
                    <h1 className="font-bold">About</h1>
                    <p className="text-[#696A75]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <div>
                        <div className="flex items-center ">
                            <div className="font-bold">Email:</div>
                            <div className="text-[#3B3C4A]">daagikhuu@gmail.com</div>
                        </div>
                        <div className="flex items-center">
                            <div className="font-bold">Phone:</div>
                            <div className="text-[#3B3C4A]">94144305</div>
                        </div>
                    </div>

                </div>
                <div className="w-[521px] text-[#3B3C4A] items-center flex flex-col">
                    <div>Home</div>
                    <div>Blog</div>
                    <div>Contact</div>
                </div>
                <div className="flex gap-4">
                    <FaFacebook className="text-[#6D6E76]"/>
                    <FaTwitter  className="text-[#6D6E76]"/>
                    <IoLogoInstagram  className="text-[#6D6E76]"/>
                    <FaLinkedin  className="text-[#6D6E76]"/>
                </div>
            </div>
            <div className="py-8  flex justify-between border-t-[2px] mt-8 border-gray-300">
                <div className="flex gap-2">
                    <Image src= "/bee.png" width={48} height={48}/>
                    <div>
                        <div className="font-bold">MetaBlog</div>
                        <div>© All Rights Reserved.</div>
                        
                    </div>

                </div>
                <div className="flex gap-[18px]">
                    <div>Terms of Use</div>
                    <hr/>
                    <div>Privacy Policy</div>
                    <hr/>
                    <div>Cookie Policy</div>
                    
                </div>
            </div>
        </div>
    )
}