"use client"
import { api } from '@/convex/_generated/api'
import { useQuery } from 'convex/react'
import React from 'react'

interface Props{
    player1Email : string
    player2Email : string
    currentUser : string

}

const VersusArea = ({player1Email , player2Email , currentUser}:Props) => {
  const player1 = useQuery(api.user.checkUser,{email:player1Email})
  const player2 = useQuery(api.user.checkUser,{email:player2Email})
    const h1Class = "rounded-xl border-[1px] border-[rgb(39, 39, 42)] flex-1 bg-slate-50 bg-opacity-20 px-2"
  if(!player1 || !player2)
    return <></>

    return (
    <div className='mt-4 text-base sm:text-lg flex justify-between w-full max-w-[800px] '>
        {
            currentUser === player1Email
            ?<><h1 className={` ${h1Class}  ml-2 text-start`}>YOU <br/> {player1?.name}</h1> <span className='text-5xl mx-3'>VS</span> <h1 className={` ${h1Class} text-end mr-2`}>OPPONENT <br/> {player2?.name}</h1>
            </>
            :<><h1 className={` ${h1Class} ml-2 text-start`}>YOU <br/> {player2?.name}</h1> <span className='text-5xl mx-3'>VS</span> <h1 className={` ${h1Class} text-end mr-2`}>OPPONENT <br/> {player1?.name}</h1>
            </>
        }
       
    </div>
  )
}

export default VersusArea