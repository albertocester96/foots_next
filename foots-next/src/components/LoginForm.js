"use client"

import Link from "next/link"
import { auth } from "@/lib/firebase/AppFirebase"
import { signInWithEmailAndPassword} from "firebase/auth"
import { FirebaseError } from "firebase/app";
import { useState } from "react";

export default function LoginForm(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checkedUrl, setCheckedUrl] = useState("")

    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [credentialError, setCredentialError] = useState(false)

    const handleClick = async (e) => {

        e.preventDefault();
        setEmailError(false)
        setPasswordError(false)
            
        try {
                await signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) =>  {
                    const userVerified = userCredential.user.emailVerified

                    if (userVerified) {
                        setCheckedUrl("/homepage")
                    }

                })
            
        } 
        catch (e) {
            if (e instanceof FirebaseError) {
                switch (e.code) {
                    case 'auth/invalid-email':
                        setEmailError(true);
                        break;
                    case 'auth/invalid-password':
                        setPasswordError(true)
                        break;
                    case 'auth/missing-password':
                        setPasswordError(true)
                        break;
                    case 'auth/invalid-credential':
                        setCredentialError(true)
                        break;
                    default:
                        setCredentialError(true)
                }
            } 
            console.error(e)
        }
    }

       

    return(
        
        <div className="flex flex-col min-h-screen">
        <header className="w-full flex justify-center items-center">
            <p className="mt-10"> Logo </p>
        </header>
        <main className="flex-grow flex justify-center items-center">
            <section className="flex flex-col w-full items-center justify-center md:max-w-sm max-w-xs space-y-4 pb-48">
                
                <h1 className="font-bold text-3xl mb-10 text-center w-full"> {props.authenticationType} </h1>
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
                    Password non valida o mancante.
                </div>
                <div className={credentialError ? "visible text-xs items-center alert alert-error": "hidden"}>
                    <img  className="size-5" src="/assets/error-icon.svg" />
                    Credenziali non valide o inesisenti.
                </div>
                
                <div className="flex w-full justify-center items-center py-5">
                    <button
                        onClick={handleClick}
                        className={"text-white border-none rounded-lg flex w-full items-center justify-center transition duration-300 bg-primary hover:bg-primary-dark"}
                    >
                        <Link href={checkedUrl} className="p-3" >
                            Login
                        </Link>
                    </button>
                </div>
                <div className="flex justify-center text-sm">
                    <p className="mr-2"> Non hai un account? </p>
                    <a href="/signUp" className="text-primary"> 
                            Registrati
                    </a>
                </div>
                
                
            </section>
        </main>
        </div>
        
    )
    
}