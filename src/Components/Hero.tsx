import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div>
      <div className="bg-primary flex flex-col md:flex-row justify-center items-center h-auto md:h-[500px] gap-2 px-4 md:px-0">
        <div className="text-wrap text-white font-inter py-10 md:py-20 md:ml-48 p-5 md:p-10 text-center md:text-left">
          <h1 className="text-[45px] md:text-[25px] font-bold">Get More Done with whitepace</h1>
          <p className="mt-4 text-[14px] md:text-[12px]">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks.</p>
          <button className="bg-[#4F9CF9] text-white flex mt-8 w-48 h-12 items-center rounded-lg justify-center gap-4 mx-auto md:mx-0">Try Whitepace free <FaArrowRight /></button>
        </div>
        <div className="w-full flex justify-center md:mr-56">
          <Image src="" alt="Image" width={400} height={400} className="bg-secondary w-[300px] h-[300px] mb-4 md:w-[500px] md:h-[400px] px-5 md:px-20" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
