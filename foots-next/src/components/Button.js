/*
create a standard button with the props passed on the call of the components. (color props is set to primary if undefined)
*/

"use client"

import Link from "next/link"

export default function Button(props) { 

    const color = props.color    

    return(
        <div className="flex flex-col items-center p-5">
            <button
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

