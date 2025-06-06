"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [openNavBar, setOpenNavBar] = useState(false)

  const HandleNavBar = (): void => {
    setOpenNavBar(!openNavBar)
  }
  
    return (
        <>
            <header className="fixed h-[80px] w-full left-0 top-0 bg-white shadow-[5px_0px_30px_0px_rgba(0,_0,_0,_0.1)]">
              <div className="max-w-[1250px] mx-auto p-[15px] flex justify-between items-center">
                <Link href="/">
                  <Image 
                    src="/icons/intellimind-icon.webp" 
                    alt="IntelliMind" 
                    className="max-w-[50px]" 
                    width={200}
                    height={181}
                  />
                </Link>
                <div className="hidden md:block">
                  <ul className="inline-flex justify-center items-center gap-[25px] uppercase">
                    <li className="border-b-[1px] border-transparent md:hover:border-[#111]"><Link href="/">Inicio</Link></li>
                    <li className="border-b-[1px] border-transparent md:hover:border-[#111]"><Link href="/about">Acerca de</Link></li>
                    <li className="border-b-[1px] border-transparent md:hover:border-[#111]"><Link href="/blog">Blog</Link></li>
                  </ul>
                </div>
                <div className={`${openNavBar ? "flex" : "hidden"} w-full h-[250px] absolute left-0 top-[100%] bg-[rgba(0,0,0,0.9)] text-white text-center justify-center items-center uppercase md:hidden`}>
                  <ul>
                    <li className="my-[15px]"><Link href="/">Inicio</Link></li>
                    <li className="my-[15px]"><Link href="/about">Acerca de</Link></li>
                    <li className="my-[15px]"><Link href="/blog">Blog</Link></li>
                  </ul>
                </div>
                <div className="md:hidden">
                  <Image 
                    src="/icons/menu-icon.png" 
                    alt="Menú" 
                    className="min-w-[30px] max-w-[50px] cursor-pointer" 
                    width={24}
                    height={24}
                    onClick={HandleNavBar}
                  />
                </div>
              </div>
            </header>
        </>
    );
}