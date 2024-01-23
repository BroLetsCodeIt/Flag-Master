"use client";
import Link from "next/link";
import React from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { FaSun } from "react-icons/fa6";
import { VscGithubInverted } from "react-icons/vsc";
import { GiBlackFlag } from "react-icons/gi";
type Props = {};

const Navbar = (props: Props) => {

  const { setTheme, resolvedTheme } = useTheme();

  function ToggleThemeFun() {
    if (resolvedTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <div className="fixed  w-full  top-0 z-100 dark:invert  shadow-xl dark:shadow-1xl bg-white ">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <Link
          href={"/"}
          rel="noreferrer"
          className="flex items-center gap-4 font-semibold text-1xl md:text-2xl dark:invert  bg-clip-text transition-all ease-in-out delay-200"  
        >
         <GiBlackFlag size={35}/> Flag Masters
        </Link>
        <section className="flex items-center gap-10">
        {resolvedTheme === "light" ? (
          <button
            className="btn flex items-center gap-3 dark:invert transition-all hover:opacity-50" 
            onClick={ToggleThemeFun}
          >
            <BsMoonStarsFill />
            <p className="hidden sm:block"> 

            Dark Mode
            </p>
          </button>
        ) : (
          <button
            className="btn flex items-center gap-3 dark:invert transition-all hover:opacity-50"
            onClick={ToggleThemeFun}
          >
            <FaSun />
            <p className="hidden sm:block"> 

            Light Mode
            </p>
          </button>
         
        )}
         <Link href={'https://github.com/BroLetsCodeIt/'} target="_blank" rel="noreferrer" ><VscGithubInverted size={20} color={'black'} className=" sm:block hidden"/></Link>
        </section>
         
      </div>
    </div>
  );
};

export default Navbar;


