import CreateGame from '@/app/Components/CreateGame'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const Page = async () => {
  const session = await getServerSession()
  if(!session)
    redirect("/login")
  return (
    <div>
      <h1 className='max-w-[400px] mt-10 text-center text-3xl mx-5'>Create a game and wait for a player to join your game</h1>
      {session && <CreateGame userEmail={session?.user?.email || "" }/>}
    </div>
  )
}

export default Page