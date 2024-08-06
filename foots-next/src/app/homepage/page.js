'use client'

import { auth } from "@/lib/firebase/AppFirebase"
import { signOut } from "firebase/auth"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Homepage() {

    const currentUser = auth.currentUser
    const router = useRouter();
  
    function handleClick() {
            signOut(auth, currentUser) 
            router.push("/")
    }

    
    return(
        <div>
            <h1> homepage</h1>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}