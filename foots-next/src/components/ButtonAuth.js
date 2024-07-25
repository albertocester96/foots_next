import Link from "next/link"

export default function ButtonAuth() { //da capire come mai non funziona
    return(
        <>
            <div>
                <title className="js-button-clicked">ciao</title> 
            </div>
            <button className="btn sm:btn-sm bg-primary text-white border-none rounded-lg"  
                    onClick={()=> {
                        document.querySelector(".js-button-clicked")
                        .innerHTML = "Approvato"
                        }
                    }
                    >
                <Link>
                    Login
                </Link>
            </button>
        </>
    )
}

