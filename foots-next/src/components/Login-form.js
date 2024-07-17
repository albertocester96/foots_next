export default function Login() {
    return(
        <div className="flex min-h-screen flex-col justify-center items-center">
            <main className="flex min-h-screen flex-col items-center justify-center space-y-3"  >
                <label className="input input-bordered flex items-center gap-2">
                    Email
                    <input type="text" className="grow" placeholder="esempio@foots.com" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Password
                    <input type="text" className="grow" placeholder="******" />
                </label>
            </main>
        </div>
    )
}