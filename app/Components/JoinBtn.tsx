"use client"
import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel'
import { useMutation, useQuery } from 'convex/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

interface Props{
    userEmail: string,
    gameId : Id<"game">

}
const JoinBtn = ({gameId,userEmail}:Props) => {
    const {data:session} = useSession()
    const router = useRouter()
    const joinGame = useMutation(api.games.playerJoin)
    const handleJoin = async (e:any)=>{
        e.preventDefault()
        await joinGame({
            playerEmail:userEmail,
            gameId:gameId

        })
        router.push(`/game/${gameId}`)
    }
    return (
    <div>
       
        <button onClick={handleJoin} className='bg-white btn text-xl px-6 rounded-xl mx-3  py-2'>JOIN</button>
    </div>
  )
}

export default JoinBtn