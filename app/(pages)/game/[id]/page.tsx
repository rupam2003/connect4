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
    {isWin && <div className='m-5 text-3xl  '>

      {isWin && isWin != "no" ?<h1 className=' text-center '>Game Over</h1>
  
      
      :gameData?.turn == session?.user?.email
        ?<h1 className=' text-center '>Your turn</h1>
        :<h1 className=' text-center '>Opponent's turn</h1>
      }
    </div>
}
  {
    isWin && isWin!= "no"?
    isWin === session?.user?.email 
    ?<h1>you Win </h1>
    :<h1>You lose </h1>

    :<></>
  }

    <div className='flex justify-center '>
      {/* board component div */}
        <div className='flex bg-white rounded-3xl shadow'>

         {gameData?.board?.map((items:any,index:number) => {
        return (
          <div className='flex-col m-2 sm:m-3'>
            
            {items[5] == "1" || items[5] == "2"
            ?<button className='my-3 bg-gray-300 rounded-full shadow sm:w-10 sm:h-10 w-6 h-6'></button>
              
            :gameData?.turn == session?.user?.email && isWin == "no"
              ?<button value={index} onClick={handleClick} className=' my-3 btn  bg-green-400 rounded-full sm:w-10 sm:h-10 w-6 h-6'></button>
              :<button className='my-3 bg-gray-300 rounded-full shadow sm:w-10 sm:h-10 w-6 h-6'></button>

            }
            
            {items.slice(0).reverse().map((subItems:any,index:any) => {
              return <div className='my-3'>
                
                {
                subItems == "" && <div className='sm:w-10 sm:h-10 w-6 h-6  border-black border-2 rounded-full  bg-[#7945FF] shadow-in' ></div>||
                subItems == "1" && <div className='sm:w-10 sm:h-10 w-6 h-6  border-black border-2 rounded-full bg-yellow-400 shadow-in-light' ></div>||
                subItems == "2" && <div className='sm:w-10 sm:h-10 w-6 h-6  border-black border-2 rounded-full bg-green-600 shadow-in-light' ></div>
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