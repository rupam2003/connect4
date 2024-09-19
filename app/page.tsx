import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'
import RegisterUser from './Components/RegisterUser'
import Link from 'next/link'

const Page = async () => {
  const session = await getServerSession()
  if(!session)
    redirect("/login")
  return (
  
    <div className='flex flex-col items-center '>
      
      <RegisterUser 
        email = {session?.user?.email as string}
        name = {session?.user?.name as string}
        image = {session?.user?.image as string}
        />
        <h1 className='text-2xl text-center mb-5 '>Connect, Compete, Conquer<br/> Dive into the Ultimate Connect4 Challenge!</h1>
        <div className='flex flex-col gap-4 sm:flex-row'>
          <div className='flex justify-center rounded-xl btn bg-white py-2  text-xl '>
            <Link className='px-12'  href={"/create"}>CREATE</Link>
          </div>
          <div className='flex justify-center  rounded-xl btn bg-white py-2 text-xl'>
            <Link className='px-12'  href={"/join"}>JOIN</Link>
          </div>
        
        </div>
      </div>
  )
}

export default Page
