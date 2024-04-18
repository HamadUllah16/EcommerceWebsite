"use client"

import { useRouter } from "next/navigation";
import { useState } from "react"

const credentials = {
    username: "admin",
    password: "admin"
}

function AdminLogin() {
    const router = useRouter();
    function authenticate(e: any) {
        e.preventDefault();
        if (input.username === credentials.username && input.password === credentials.password) {
            console.log("authenticating");
            router.push('/admin/dashboard')
        }
        else {
            console.log("Wrong credentials")
        }
    }
    const [input, setInput] = useState({
        username: "",
        password: "",
    })

    return (
        <section className="flex w-full h-svh justify-center items-center">
            <article className="flex flex-col items-center justify-center min-w-80 h-auto gap-8 shadow border p-10 rounded">
                <h1 className="font-satoshi text-4xl font-bold">Login</h1>
                <form onSubmit={authenticate} className="flex flex-col gap-8">
                    <input className="border-b border-black outline-none" type="text" placeholder="Username" onChange={(e) => setInput({ ...input, username: e.target.value })} />
                    <input className="border-b border-black outline-none " type="password" placeholder="Password" onChange={(e) => setInput({ ...input, password: e.target.value })} />
                    <button className="w-full bg-blue-600 rounded-full p-2 text-white" type="submit" value="ok">Login</button>
                </form>
            </article>
        </section>
    )
}

export default AdminLogin
