"use client"

import Link from "next/link"
import { useState } from "react"

export default function ButtonAuth(props) { 

    const [approved, setApproved] = useState("");

    function handelClick() {
        setApproved("Approvato"); //change "approved" varibale status to "Approved" string

        setTimeout(()=> {
            window.location.href = props.url //find the href in the DOM and change the value
        }, 1000 //set timer to redirect
        )
        
    }
    return(
        <>
            <p> {approved} </p>
            <button onClick={handelClick} 
                    className="btn sm:btn-sm bg-primary text-white border-none rounded-lg">
                <Link href="">
                    {props.text}
                </Link>
            </button>
        </>
    )
}

