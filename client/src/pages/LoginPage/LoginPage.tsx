import React from 'react';

import axios from 'axios';








export default function LoginPage() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    

    

   

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, password);
        await axios.post("http://localhost:5000/api/user/login", {email, password})
        .then((res) => {
            console.log(res.data);
            localStorage.setItem("token", res.data.token);
        }
        )
        .catch((err) => {
            console.log(err);
        }
        )

    }

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }


    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);

    }




  return (
    <div>
        <form onSubmit={handleSubmit}> 
            <input type="text" placeholder="email" value={email} onChange={onChangeEmail} />
            <input type="password" placeholder="password" value={password} onChange={onChangePassword} />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}
