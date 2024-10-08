"use client";
import { useEffect } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { signIn, signOut, useSession } from "next-auth/react";

interface Props{
    email: string,
    name : string,
    image: string

}




export default function RegisterUser({email, name, image}:Props) {
  
  const {data:session} = useSession()
  const users = useQuery(api.user.get);
  const createUser = useMutation(api.user.createUser)
    const user = useQuery(api.user.checkUser , {email:email})


  useEffect(() => {
  
    if(user ==="not-found")
      createUser({ name:name as string ,
                  email:email as string ,
                  image:image as string
                  })
    
  }, [user])
  
  
  return (

    <main className="flex flex-col items-center">
      
      
      

     
      
    
    
    </main>
  );
}

