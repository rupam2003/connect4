"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    const {data:session} = useSession()

    return (
    <header className='bg-black m-2'>
        <div className='rounded-xl border-[1px] border-[rgb(39, 39, 42)] flex justify-between items-center max-w-[800px] mx-auto'>
        
        <h1 className='text-2xl ml-4 m-2'>CONNECT4</h1>
        {
            session?.user?.image
            ?<div className='w-9 h-9 mr-3  relative '><Image className='rounded-full' src={session.user.image} fill objectFit='contain' alt={"profile"}/></div>
            
            :<div className='w-9 h-9 mr-3  relative '></div>
        }

        </div>
    </header>
  )
}

export default Header