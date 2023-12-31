import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { CiBookmarkCheck } from "react-icons/ci";
import { HiOutlineHome,HiOutlineLocationMarker } from "react-icons/hi";



function NewJobs() {
  return (
    <div class="rounded-lg relative flex flex-col justify-between p-4 border border-[#2C4875] shadow-md grow text-gray-700 bg-gray-50 my-4 max-h-[650px] overflow-hidden">
      <p className="font-black mb-6 text-colorTitle border-b pb-4 border-colorTitle">
        جدیدترین آگهی های شغلی{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
          <AdsCard key={index} title="عنوان آگهی" />
        ))}
      </div>
      <div className="absolute bg-gray-100 flex items-center gap-4 cursor-pointer justify-center py-2 bottom-0 left-0 right-0 font-bold ">
        نمایش بیشتر
        <AiOutlineDown
          size={15}
          className=" cursor-pointer hover:scale-105"
          color=""
        />
      </div>
    </div>
  );
}

export default NewJobs;

function AdsCard({ title }) {
  return (
    <>
      <div class="border border-black rounded-lg flex flex-col justify-between p-8 shadow-md grow text-gray-700 bg-gray-50 ">
        <div className="flex justify-between mb-8">
          <p className="p-2  font-bold text-gray-900">{title}</p>
          <CiBookmarkCheck
            size={30}
            className=" cursor-pointer hover:scale-105"
            color=""
          />
        </div>
        <div className="flex   items-center gap-4 ">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <HiOutlineHome
                size={25}
                className=" cursor-pointer hover:scale-105"
                color=""
              />
              <p className="">اسم شرکت</p>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineLocationMarker
                size={25}
                className=" cursor-pointer hover:scale-105"
                color=""
              />
              <p className="">استان </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
