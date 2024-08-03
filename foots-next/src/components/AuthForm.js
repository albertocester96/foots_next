"use client"

import { useState } from "react"
import ButtonAuth from "./ButtonAuth"

export default function AuthForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    return(
        <div className="flex min-h-screen flex-col justify-center items-center">
            <main className="flex min-h-screen flex-col items-center justify-center space-y-3"  >
                <label className="input input-bordered flex items-center gap-2">
                    Email
                    <input type="text" className="grow" placeholder="esempio@foots.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Password
                    <input type="password" className="grow" placeholder="******"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                </label>
                    <ButtonAuth  submit="signup" email={email} password={password} url="" text="Sign Up" />
            </main>
        </div>
    )
}