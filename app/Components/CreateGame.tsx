"use client"

import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel'
import { useMutation, useQuery } from 'convex/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

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

      <button onClick={handleClick} className='btn bg-white mb-5 text-xl   px-12 py-3 rounded-xl'>CREATE A GAME</button>

    <h1>{gameId && "GAME CREATED"}</h1>
    {gameStatus && <h1>{gameStatus != "not-found"? "Waiting for someone to join":"" }</h1>}

    </div>
  )
}

export default CreateGame
