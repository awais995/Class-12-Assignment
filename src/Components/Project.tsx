import React from 'react'
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const Project = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-center items-center h-auto md:h-[500px] gap-2 px-4 md:px-0">
                <div className="text-wrap text-Black font-inter py-10 md:py-20 md:ml-48 p-5 md:p-10 text-center md:text-left">
                    <h1 className="text-[45px] md:text-[25px] font-bold">Project Management</h1>
                    <p className="mt-4 text-[14px] md:text-[12px]">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                    <button className="bg-[#4F9CF9] text-white flex mt-8 w-48 h-12 items-center rounded-lg justify-center gap-4 mx-auto md:mx-0">Get Started <FaArrowRight /></button>
                </div>
                <div className="w-full flex justify-center md:mr-56">
                    <Image src="" alt="Image" width={300} height={300} className="bg-secondary w-[200px] h-[200px] mb-4 md:w-[400px] md:h-[300px] px-5 md:px-20" />
                </div>
            </div>
        </div>
    )
}

export default Project;