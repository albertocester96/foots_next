"use client"

import Link from "next/link"
import { useState } from "react"

export default function ButtonAuth() { 

    const [approved, setApproved] = useState("");

    function handelClick() {
        setApproved("Approvato"); //change "approved" varibale status to "Approved" string

        setTimeout(()=> {
            window.location.href = "/autenticazione" //find the href in the DOM and change the value
        }, 2000 //set timer sto redirect
        )
        
    }
    return(
        <>
            <p> {approved} </p>
            <button onClick={handelClick} 
                    className="btn sm:btn-sm bg-primary text-white border-none rounded-lg">
                <Link href="">
                    Login
                </Link>
            </button>
        </>
    )
}

