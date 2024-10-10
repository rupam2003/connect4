import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'
import RegisterUser from './Components/RegisterUser'
import Link from 'next/link'
import { HomePage } from './Components/HomePage'

const Page = async () => {
  const session = await getServerSession()
  if(!session)
    redirect("/login")
  return (
  
    <div className='flex flex-col items-center '>
      {/* <HomePage/> */}
      <RegisterUser 
        email = {session?.user?.email as string}
        name = {session?.user?.name as string}
        image = {session?.user?.image as string}
        />
        <p className="mt-[20vh] mx-8 text-4xl sm:text-6xl text-center font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
    Online Multiplayer Connect4
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
  )
}

export default Page
