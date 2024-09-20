import Link from "next/link";
import React from "react";
 
export function HomePage() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex flex-col items-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="mt-[20vh] mx-8 text-4xl sm:text-6xl text-center font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
      Realtime Multiplayer Connect4
      
      </p>
      <div className='flex flex-col gap-4 sm:flex-row '>
          
        <Link className="w-32 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] "  href={"/create"}>
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            CREATE
            </span> 
        </Link>
        <Link className="w-32 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] "  href={"/join"}>
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            JOIN
            </span> 
        </Link>
          
          
            
          
        
        </div>
    </div>
  );
}
