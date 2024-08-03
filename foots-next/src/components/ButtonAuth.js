"use client"

import Link from "next/link"
import { auth } from "@/lib/firebase/AppFirebase"
import { createUserWithEmailAndPassword, signInWithCredential } from "firebase/auth";


export default  function ButtonAuth(props) { 

    const color = props.color

    const handleClick = async (e) => {

        e.preventDefault();
        
        if (props.submit === "signup") {
            
            try {
                await createUserWithEmailAndPassword(auth, props.email, props.password)
            } 
            catch (error) {
                alert(error)
            }
        } else {
            
            try {
                await signInWithCredential(auth, props.email, props.password)
            }
            catch (error) {
                alert("Sign in not working")
            }
        }       
        
    }   


    return(
        <div className="flex flex-col items-center p-5">
            <button
                onClick={handleClick}
                className={`w-48 h-12 text-white border-none rounded-lg flex items-center justify-center transition duration-300
                ${
                    color ? `bg-${color} bg-primary hover:bg-${color}-dark` : 'bg-primary hover:bg-primary-dark'
                }`}
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

