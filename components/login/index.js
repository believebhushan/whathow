import react from "react";
import { useState } from "react";


const Login=(login,setLogin)=>{

const [username,setUsername]= useState(null);
const [password,setPassword]= useState(null);
const handleLogin=()=>{
    console.log(username,password);
    alert(username+"   "+password);

}

    return(

        <>
        <center>
        <textarea value={username} onChange={()=>setUsername(e.target.value)} placeholder={"username"}> </textarea>
        <textarea value={password} onChange={()=>setPassword(e.target.value)} placeholder={"password"}> </textarea>
        <button onClick={()=>handleLogin()}>Submit</button>
        </center>
       

        
        </>
    )

}
export default Login;