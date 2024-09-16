"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    const {data:session} = useSession()

    return (
    <header className='bg-[#5C2DD6]  py-2 '>
        <div className='flex justify-between items-center max-w-[800px] mx-auto'>
        
        <h1 className='  text-2xl ml-4'>CONNECT4</h1>
        {
            session?.user?.image
            ?<div className='w-10 h-10 mr-2  relative '><Image className='rounded-full border-2 border-white' src={session.user.image} fill objectFit='contain' alt={"profile"}/></div>
            
            :<div className='w-10 h-10 mr-2  relative '></div>
        }

        </div>
    </header>
  )
}

export default Header