import AvailableGames from '@/app/Components/AvailableGames'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const Page = async () => {
  const session = await getServerSession()
  if(!session)
    redirect("/login")
  return (
    <>
      {session && <AvailableGames userEmail={session?.user?.email || "" }/>}
      </>
  )
}

export default Page