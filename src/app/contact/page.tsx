"use client";
import { useState } from "react";
import { redirect } from "next/navigation";

export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, email, message);
        redirect("/")
    }

    return (
        <div className="flex flex-col items-center justify-center gap-8 m-10">
            <h1 className="text-5xl">
                <span className="text-amber-600">Contact </span> Us
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label 
                    className="inline-block text-xl -mb-7 w-fit bg-white z-10"
                >Name:</label>
                <input
                    required
                    type="text"
                    value={name}
                    onChange={(event) => { setName(event.target.value) }}
                    className="border-2 rounded-xl p-2 text-xl"
                />

                <label
                    className="inline-block text-xl -mb-7 w-fit bg-white z-10"
                >Email:</label>
                <input
                    required
                    type="email"
                    value={email}
                    onChange={(event) => { setEmail(event.target.value) }}
                    className="border-2 rounded-xl p-2 text-xl"
                />

                <label
                    className="inline-block text-xl -mb-7 w-fit bg-white z-10"
                >Message:</label>
                <textarea
                    required
                    value={message}
                    onChange={(event) => { setMessage(event.target.value) }}
                    className="border-2 rounded-xl p-2 text-xl"
                    cols={20}
                />
                <button type="submit" className="text-xl bg-amber-600 text-white p-4 rounded-xl hover:bg-amber-400 shadow-lg hover:shadow-md transition-all">Submit</button>
            </form>
        </div>
    )
}