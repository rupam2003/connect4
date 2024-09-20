"use client"
import JoinBtn from '@/app/Components/JoinBtn'
import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel'
import { useMutation, useQuery } from 'convex/react'
import React from 'react'

interface Props{
    userEmail:string
}


const AvailableGames = ({userEmail}:Props) => {
    
    const games = useQuery(api.games.getGames,{userEmail:userEmail})
    
   
    
    return (
    <div>
        <h1 className='text-2xl text-center my-4 '>Available games for you</h1>
        {games?.map((e:any)=>{
            return <div key={e._id} className='bg-white py-3 my-4 mx-2 shadow rounded-lg flex items-center justify-between'>
                <h1 className='ml-3 text-xl'>
                    <span className='  font-bold'>Created by : </span>
                    {e.player1}</h1>
                {userEmail &&
                    <JoinBtn key={e._id} gameId={e._id} userEmail={userEmail}/>
                }
            
            </div>
        })}
    </div>
  )
}

export default AvailableGames