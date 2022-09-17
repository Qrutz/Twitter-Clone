import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'

export default function RegisterPage() {
    const [name, setName] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/api/user/register", {name, username, email, password})
        .then((res) => {
            console.log(res.data);
            // navigate to login page
            alert("User registered successfully");
            window.location.href = "/login";

        })
        .catch((err) => {
            console.log(err);
        })
    }






  return (
    <div className='flex flex-col bg-white w-full h-screen justify-center items-center '>
    <div className='items-center self-center w-full md:w-[auto]  '>
        <div className="w-[1/2%]  rounded-3xl mb-[1rem] ">

<div className="mx-4 sm:mx-24 md:mx-34 lg:mx-56  flex items-center space-y-10 py-16 font-semibold flex-col">
    <svg viewBox="0 0 24 24" className=" h-12 md:h-20 w-12 md:w-20 text-sky-500" fill="currentColor">
        <g>
            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z">
            </path>
        </g>
    </svg>

    <h1 className="text-gray-900 text-3xl md:text-4xl">Join Tw1tter today!</h1>
    <form onSubmit={handleSubmit}> 
    <input className="w-full p-2 bg-sky-100 rounded-lg mb-[1rem]  border  focus:border-blue-700" placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)}  required   />
    <input className="w-full p-2 bg-sky-100 rounded-lg mb-[1rem]  border  focus:border-blue-700" placeholder="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}  required   />
    <input className="w-full p-2 bg-sky-100 rounded-lg mb-[1rem]  border  focus:border-blue-700" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}  required   />
    <input className="w-full p-2 bg-sky-100 rounded-lg border mb-[1rem]  " placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}   required/>
    <button className="w-full p-2 bg-sky-400 hover:bg-sky-300 rounded-full text-lg font-semibold  " type="submit"   >Create my account</button>
    </form>
        <p>Already have an account?  
            <Link className=' ml-2 font-semibold text-sky-500 hover:text-sky-800' to="/login">Sign in</Link></p>
</div>


</div>
    </div>
    </div>
  )
}
