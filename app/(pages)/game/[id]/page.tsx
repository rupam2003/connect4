"use client"
import { api } from '@/convex/_generated/api'
import { useMutation, useQuery } from 'convex/react'
import { useSession } from 'next-auth/react'
import React from 'react'

const Page = ({params}:any) => {
  const gameData = useQuery(api.games.getSingleGame,{gameId:params.id})
  const isWin = useQuery(api.games.isWin,{gameId:params.id})
  const updateBoard = useMutation(api.games.updateBoard)
  const {data:session} = useSession()
  const handleClick = (e:any) =>{
    e.preventDefault()
    
    updateBoard({
      currentPlayer:session?.user?.email || "",
      lineNum:parseInt(e.target.value),
      gameId:params.id 

    })

  }
  
  return (
    <>
    {isWin && <div className='m-5 text-2xl  '>

      {isWin && isWin != "no" ?<></>
  
      
      :gameData?.turn == session?.user?.email
        ?<h1 className=' text-center '>Your turn</h1>
        :<h1 className=' text-center '>Opponents turn</h1>
      }
    </div>
}

  {/* game result win/loss/draw */}
  {
    isWin && isWin!= "no"?
    isWin === "draw"
    ?<h1 className='text-2xl m-5 text-yellow-500' >Draw </h1>
    :isWin === session?.user?.email 
    ?<h1 className='text-2xl m-5 text-green-600' >You win </h1>
    :<h1 className='text-2xl m-5 text-red-600' >You lose </h1>
    :<></>
  }

    <div className='flex justify-center '>
      {/* board component div */}
        <div className='bg-slate-50 bg-opacity-10 p-2 flex rounded-xl border-[1px] border-[rgb(39, 39, 42)] '>

         {gameData?.board?.map((items:any,index:number) => {
        return (
          <div key={index} className='flex-col m-1 sm:m-3'>
            
            {items[5] == "1" || items[5] == "2"
            ?<button className='my-1 shadow-in-light bg-gray-300 rounded-full  sm:w-10 sm:h-10 w-7 h-7'></button>
              
            :gameData?.turn == session?.user?.email && isWin == "no"
              ?<button className='shadow-in-light my-1 bg-green-500 hover:scale-105 transition-transform rounded-full sm:w-10 sm:h-10 w-7 h-7' value={index} onClick={handleClick} ></button>
              :<button className='shadow-in-light my-1 bg-gray-300 rounded-full  sm:w-10 sm:h-10 w-7 h-7'></button>

            }
            
            {items.slice(0).reverse().map((subItems:any,index:any) => {
              return <div key={index} className='my-2 sm:my-4'>
                
                {
                  // blank space
                subItems == "" && <div className='border-[1px] border-[rgb(39, 39, 42)] sm:w-10 sm:h-10 w-7 h-7 rounded-full bg-transparent ' ></div>||
                //player1 
                subItems == "1" && <div className='shadow-in-light  sm:w-10 sm:h-10 w-7 h-7 rounded-full bg-gray-950 ' ></div>||
                //player2
                subItems == "2" && <div className='shadow-in-light  sm:w-10 sm:h-10 w-7 h-7 rounded-full bg-white ' ></div>
                }
                </div>
            })}
          </div>
        );
      })}
        </div>
        
        
    </div>
    </>
  )
}

export default Page