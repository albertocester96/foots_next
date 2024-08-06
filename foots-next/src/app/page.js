'use client'

import WordsGenerator from "@/utils/generateWords";
import Button from "../components/Button";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/AppFirebase";
import Homepage from "./homepage/page";
import { useState, useEffect } from "react";
import Loading from "@/utils/loading";
import { useRouter } from "next/navigation";


export default function Home() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const logout = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Pulizia dell'effetto
    return () => logout();
  }, []);

  if (loading) {
    return <Loading />
  }

  if (user) {
    return router.push("/homepage");
  }

  return (
    <main className="h-screen flex flex-col md:flex-row">
      <div className="flex w-full md:w-3/5 h-1/2 md:h-full relative bg-slate-600 items-center p-10">
        <WordsGenerator array={["Ciao", "Benvenuto in Foots", "Entra nella community del calcetto"]} />
      </div>
      
      <div className="w-full md:w-2/5 h-screen">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="font-bold text-2xl"> Inizia </h1>
            <div className="flex flex-col md:flex-row md:space-x-4 justify-center items-center">
              <Button url="/login" text="Login" />
              <Button url="/signUp" text="Sign Up" />
            </div>
          <div className="w-4/12 text-center space-y-2 absolute bottom-0 mb-10">
            <p> logo</p>
            <div className="flex justify-center font-normal text-slate-400 text-xs underline">
              <a href="" className="px-2">
                Condizioni d'uso
              </a>
              <span> | </span>
              <a href="" className="px-2">
                Informativa sulla privacy
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  ); 
}
