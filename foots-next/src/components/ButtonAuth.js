import Link from "next/link"

export default function ButtonAuth() {
    return(
        <button className="btn sm:btn-sm bg-primary text-white border-none rounded-lg" >
            <Link href="/autenticazione">
                Login
            </Link>
        </button>
    )
}