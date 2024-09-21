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
    <div className='w-[90vw] max-w-[800px]'>
        <h1 className='text-2xl text-center my-4 '>Available games for you</h1>
        {games?.map((e:any)=>{
            return <div key={e._id} className='border-[1px] border-[rgb(39, 39, 42)] py-3  rounded-xl flex items-center justify-between'>
                <h1 className='ml-3 sm:text-lg  text-base font-semibold'>
                    <span className=''>Created by : </span>
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