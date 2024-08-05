"use client"

import Link from "next/link"
import { auth } from "@/lib/firebase/AppFirebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { FirebaseError } from "firebase/app";
import { useState } from "react";

export default function SignUpForm(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState(false)
    const [emailExist, setEmailExist] = useState(false)
    const [passwordError, setPasswordError] = useState(false)


    const handleClick = async (e) => {

        e.preventDefault();
        setEmailError(false)
        setEmailExist(false)
        setPasswordError(false)
            
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            setEmail("")
            setPassword("")
            console.log({res})
        } 
        catch (e) {
            if (e instanceof FirebaseError) {
                switch (e.code) {
                    case 'auth/invalid-email':
                        setEmailError(true);
                        break;
                    case 'auth/email-already-exists':
                        setEmailExist(true);
                        break;
                    case 'auth/invalid-password':
                        setPasswordError(true)
                        break;
                    case 'auth/missing-password':
                        setPasswordError(true)
                        break;
                    default:
                    alert("Invalid credential");
                }
            } 
            console.error(e)
        }
    }

    return(
        <>
        <header className="w-full flex justify-center items-center">
            <p className="mt-10"> Logo </p>
        </header>
        <section className="flex grow flex-col justify-center items-center">
            <main className="flex max-w-xs flex-col items-center justify-center space-y-4">
                
                <h1 className="font-bold text-3xl mb-10"> {props.authenticationType} </h1>
                <label className="w-full input input-bordered focus-within:input-primary flex items-center gap-2">
                    Email
                    <input inputMode="email" type="email" className="grow" placeholder="Indirizzo email*" required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label className="w-full input input-bordered focus-within:input-primary flex items-center gap-2">
                    Password
                    <input type="password" className="grow" placeholder="******" required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                </label>
                <div className={emailError ? "visible text-xs items-center alert alert-error": "hidden"}>
                    <img  className="size-5" src="/assets/error-icon.svg" />
                    Indirizzo email non valido.
                </div>
                <div className={passwordError ? "visible text-xs items-center alert alert-error": "hidden"}>
                    <img  className="size-5" src="/assets/error-icon.svg" />
                    Password non valida.
                </div>
                
                <div className="flex w-full justify-center items-center py-5">
                    <button
                        onClick={handleClick}
                        className={"text-white border-none rounded-lg flex w-full items-center justify-center transition duration-300 bg-primary hover:bg-primary-dark"}
                    >
                        <Link href={""} className="p-3" >
                            Sign Up
                        </Link>
                    </button>
        </div>
                
            </main>
        </section>
        <footer>
            
        </footer>
        </>
    )
    
}