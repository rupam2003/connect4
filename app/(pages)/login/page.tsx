"use client"
import React from 'react'
import { signIn } from 'next-auth/react'
import Button from '@/app/Components/Button'
import Image from 'next/image'


const Page = () => {
  return (
    <>
    <div className='sm:mt-[20vh] mt-[10vh] flex flex-col items-center gap-5 '>
      <h1 className='text-4xl sm:text-6xl text-center font-bold mx-10 relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500'>Online Multiplayer Connect4 </h1>
        <Button text='GET STARTED' onClick={()=>signIn("google")}/>
        
        
        
    </div>
    <div className='w-full flex flex-col items-center sm:flex-row sm:justify-center mt-5 '>
      <div className='mx-3 w-[200px] h-[200px]  relative '><Image className=' border-white border-[1px] rounded-lg' src={"/board.png"} fill objectFit='contain' alt={"profile"}/></div>
      <section className='sm:text-base text-sm flex flex-col gap-2 mx-4'>
        <h1 className='sm:text-2xl text-lg'>How to play : </h1>
        <p className=' font-normal'>1. When it is your turn click on any of the green buttons and your piece will drop to the bottom most empty slot.</p>
        <p className=' font-normal'>2. Then the turn will go to your opponent </p>
        <p className=' font-normal'>3. To win you have to connect 4 of your pieces either horizontally, vertically or diagonally.  </p>
      </section>
    </div>
    </>
  )
}

export default Page
