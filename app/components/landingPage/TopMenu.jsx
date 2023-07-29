import Link from "next/link";
import React from "react";
import { TiUser } from "react-icons/ti";

function TopMenu() {
  return (
    <div className="flex p-6 px-8 justify-between">
      <div className="flex items-center gap-6">
        <Link href="/#">خانه</Link>
        <Link href="/#">فرصت های شغلی</Link>
        <Link href="/#">آکادمی</Link>
        <Link href="/cv">رزومه ساز</Link>
        <Link href="/search">جستجو مشاغل</Link>
      </div>
      <div className="flex">
        <div className="flex ml-8 items-center  gap-1">
        <TiUser
            size={30}
            className=" cursor-pointer hover:scale-105"
            color=""
          />
        <Link href="/login" className="text-sm hover:font-bold">ورود </Link>
        <span className="mx-2">/</span>
        <Link href="/register" className="text-sm hover:font-bold">  ثبت نام</Link>


        
        </div>
        <div className="font-black text-colorTitle text-xl">بهین کار</div>
      </div>
    </div>
  );
}

 
export default TopMenu;
