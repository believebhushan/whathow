import axios from 'axios';
import { useState } from 'react';
import envVariables from '../components/appenv';
function WhatUi() {
  const [numbers,setNumbers]=useState(null);
  const [message,setMessage]=useState("");
  const domain=envVariables.domain;


  const handleSend=()=>{
   console.log(encodeURIComponent(message));

    let numbersArray=numbers.split(",");
    let numberString="";
    numbersArray.forEach(element => {
      numberString=numberString+"91"+element;
    });
    
    const urls = domain+"/send/message/"+numberString+"/"+encodeURIComponent(message);
    axios.get(urls).then((response)=>{
      console.log(response);
    })


    }

  

  return(
    <>

    <center>
      <h1>WhatUi </h1>
      <h2>In Process of automating your mental queries.....</h2>
 <textarea cols="50" rows="10" type={'text'} placeholder='Numbers seperwtd by comma without country code' value={numbers} onChange={(e)=>setNumbers(e.target.value)}></textarea>
<textarea  cols="50" rows="10" type={'text'} placeholder='Messages' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
<br></br>
<button onClick={()=>handleSend()}>Send Mesagae</button>
<div>MessageLength: {message?.length}</div>

      
    </center>
   

    </>
  )

}
export default WhatUi;

