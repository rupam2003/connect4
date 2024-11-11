"use client"
import React from 'react'
import { signIn } from 'next-auth/react'
import Button from '@/app/Components/Button'
import board from '@/public/board.png'
import Image from 'next/image'


const Page = () => {
  return (
    <>
    <div className='sm:mt-[20vh] mt-[10vh] flex flex-col items-center gap-5 '>
      <h1 className=' text-4xl sm:text-6xl text-center font-bold mx-10 relative z-20 bg-clip-text text-transparent bg-gradient-to-r from-[#06619C] to-[#00FF95]'>Welcome to CONNECTx4 </h1>
      <h1 className='mb-6 text-xl sm:text-2xl text-center font-bold mx-10 relative z-20 bg-clip-text text-transparent bg-gradient-to-r from-[#06619C] to-[#00FF95]'>
        Play Online Multiplayer Connect4 Board Game
      </h1>
        <Button text='GET STARTED' onClick={()=>signIn("google")}/>
        
        
        
    </div>
    <div className='w-full flex flex-col items-center  mt-10 '>
      <div className='shadow-xl mb-10 shadow-slate-700 mx-3 sm:w-[400px] sm:h-[400px] w-[300px] h-[300px]  relative '>
        <Image
        placeholder='blur' 
        draggable={false} 
        className='object-contain  border-white border-[1px]' 
        src={board} 
        fill 
        alt={"profile"}/>
      </div>
      <section className='z-10 mb-10 mt-5 bg-slate-100 bg-opacity-10 p-3 rounded-lg text-base flex flex-col gap-2 mx-6'>
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
