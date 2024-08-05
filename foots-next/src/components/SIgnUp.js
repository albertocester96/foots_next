"use client"

import Link from "next/link"
import { auth } from "@/lib/firebase/AppFirebase"
import { createUserWithEmailAndPassword, signInWithCredential } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { useState } from "react";


export default  function ButtonAuth(props) { 

    const color = props.color

    const [emailError, setEmailError] = useState(false)


    const handleClick = async (e) => {

        e.preventDefault();
        
        if (props.submit === "signup") {
            
            try {
                const res = await createUserWithEmailAndPassword(auth, props.email, props.password)
                console.log({res})
            } 
            catch (e) {
                if (e instanceof FirebaseError) {
                    switch (e.code) {
                        case 'auth/invalid-email':
                            setEmailError(true);
                            console.log(emailError)
                            break;
                        case 'auth/email-already-exists':
                            console.log('Email address already in use')
                            break;
                        case 'auth/invalid-password':
                            console.log('Password needs to be more than 6 characters')
                            break;
                        default:
                        setError(e.message);
                    }
                } 
                console.error(e)
            }
        } else if (props.submit === "login") {
            
            try {
                await signInWithCredential(auth, props.email, props.password)
            } catch (e) {
                console.error(e)
            }    
        }
        
    } 


    return(
        <div className="flex w-full justify-center items-center py-5">
            <button
                onClick={handleClick}
                className={`text-white border-none rounded-lg flex w-full items-center justify-center transition duration-300
                ${
                    color ? `bg-${color} bg-primary hover:bg-${color}-dark` : 'bg-primary hover:bg-primary-dark'
                }`}
            >
                <Link href={props.url} className="p-3" >
                    {props.text}
                </Link>
            </button>
        </div>
    )
}

