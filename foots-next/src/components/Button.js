import Link from "next/link"

export default function Button() {
    return(
        <button className="font-semibold rounded-lg bg-yellow-300 p-3" >
            <Link href="/login">
                Vai al login
            </Link>
        </button>
    )
}