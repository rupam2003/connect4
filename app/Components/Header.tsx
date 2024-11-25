"use client"
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'


const Header = () => {
    const {data:session} = useSession()

    return (
    <header className='z-50 sticky top-2 w-full bg-black max-w-[800px] m-2'>
        <div className=' rounded-xl border-[1px] border-[#212121] mx-3 flex justify-between items-center'>
        
        <h1 className='text-2xl ml-4 m-2'>CONNECTx4</h1>
        {
            session?.user?.image
            ?<div className='flex gap-3 mr-3'>
            <div className='w-9 h-9  relative '><Image className='rounded-full' src={session.user.image} fill objectFit='contain' alt={"profile"}/></div>
            <button onClick={()=>signOut()} className='text-base font-normal px-2 border-[1px]  border-[#212121] rounded-lg  bg-[#020617]'>Log out</button>
            
            </div>
            
            
            
            :<div className='w-9 h-9 mr-3  relative '></div>
        }

        </div>
    </header>
  )
}

export default Header
