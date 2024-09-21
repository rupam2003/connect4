"use client"

import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel'
import { useMutation, useQuery } from 'convex/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Button from './Button'

interface Props{
    userEmail:string
}

const CreateGame = ({userEmail}:Props) => {
 
  const router = useRouter()
  const [gameId, setGameId] = useState<Id<"game">>()
  const gameStatus = useQuery(api.games.getGameStatus,{gameId:gameId})
  const createGame = useMutation(api.games.createGame)
  const handleClick = async (e : any) =>{
    e.preventDefault()
    const gameId = await createGame({
      creatorEmail: userEmail || "",
    })
    setGameId(gameId)

  }
  useEffect(() => {
    if(gameStatus =="In-progress")
      router.push(`game/${gameId}`)
  
  }, [gameStatus])
  
  
  return (
    <div className='flex   flex-col gap-2 items-center mt-12 text-xl'>

      <Button text='CREATE A GAME' onClick={handleClick} />

    <h1>{gameId && "GAME CREATED"}</h1>
    {gameStatus && <h1>{gameStatus != "not-found"? "Waiting for someone to join...":"" }</h1>}

    </div>
  )
}

export default CreateGame