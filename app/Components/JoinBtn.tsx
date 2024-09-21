"use client"
import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel'
import { useMutation, useQuery } from 'convex/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import Button from './Button'

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
    <div className='mr-2'>
       
        <Button text='JOIN' onClick={handleJoin} />
    </div>
  )
}

export default JoinBtn