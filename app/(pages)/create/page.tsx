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
      {session && <CreateGame userEmail={session?.user?.email || "" }/>}
    </div>
  )
}

export default Page