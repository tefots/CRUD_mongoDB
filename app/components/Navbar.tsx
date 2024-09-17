import Link from "next/link";
import React from "react";

export default function Navabar(){

return (
    <>
   <nav className="flex justify-beween items-center bg-slate-800 px-8 py-3">
    <Link  href={"/"}>
    GTCoding    
    </Link>

    <Link  href={"/addTopic"}>
    Add Topic  
    </Link>

   </nav>
    </>
);

}