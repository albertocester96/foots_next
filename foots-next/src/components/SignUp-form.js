
export default function SignUp() {
    return(
        <div className="flex min-h-screen flex-col justify-center items-center">
            <main className="flex min-h-screen flex-col items-center justify-center text-white space-y-3"  >
                <label className="input input-bordered flex items-center gap-2 ">
                    Name
                    <input type="text" className="grow" placeholder="Nome" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Email
                    <input type="text" className="grow" placeholder="daisy@site.com" />
                </label>
            </main>
        </div>
    )
}