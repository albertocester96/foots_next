"use client"

import Link from "next/link"
import { useState } from "react"

export default function ButtonAuth(props) { 

    const [approved, setApproved] = useState("");

    function handleClick() {
        setApproved("Approvato"); //change "approved" varibale status to "Approved" string

        setTimeout(()=> {
            window.location.href = props.url //find the href in the DOM and change the value
        }, 1000 //set timer to redirect
        )
        
    }
    return(
        <div className="flex flex-col items-center">
            <p className="h-6 mb-2"> {approved} </p>
            <button 
                onClick={handleClick} 
                className="w-48 h-12 bg-primary text-white border-none rounded-lg flex items-center justify-center hover:bg-primary-dark transition duration-300"
            >
                <Link href={props.url} 
                className="w-full h-full flex items-center justify-center"
                >
                    {props.text}
                </Link>
            </button>
        </div>
    )
}

