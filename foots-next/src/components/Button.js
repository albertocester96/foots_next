import Link from "next/link"

export default function Button() {
    return(
        <button className="btn sm:btn-sm bg-primary text-white border-none rounded-lg" >
            <Link href="/login">
                Vai al login
            </Link>
        </button>
    )
}