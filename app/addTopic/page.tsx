"use client";

import { useState } from "react";
import router, { useRouter } from "next/router";

export default async function AddTopic(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if(!title || !description){
            alert('Title and description are required')
        }

        try {
            const res = await fetch('http://localhost:3000/api/topics', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ title, description }),

            });
            if(res.ok){
                router.push('/');
                
            }

        }
        catch (error) {
            console.log(error)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="border border-slate-500 px-8 py-2"
            type= "text"
            placeholder="Topic Title"
            />            
            <input 
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Topic Description"
            />

            <button type="submit"  className="bg-green-600 font-bold text-white py-3 px-6 w-fit"></button>
            Add Topic
        </form>
    )
}