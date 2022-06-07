import axios from 'axios';
import { useState } from 'react';
import envVariables from '../appenv';
function SendMessage() {
  const [numbers,setNumbers]=useState(null);
  const [message,setMessage]=useState("");
  const [links,setLinks]=useState('');
  const [isdocs,setDocs]=useState(false);
  const [isSelecetd,setSelected]=useState(false);
  const [fileData,setFileData]=useState(null);
  const [showLinks,setShowLinks]=useState(false);

  console.log(isdocs,"dbhjv");
  const handleChange=(event)=>{
      console.log("files",event);
   
  }
  const handleLink=(event)=>{
    console.log(event.target.value);
    setLinks(links);

  }

  const DocsInput=()=>{
      return (<>
         <input type={"file"} onChange={(e)=>handleChange(e)}></input>
      </>)
  };
  const LinkForm=()=>{
    return (<>
       <textarea type={"url"}  value={links} cols="50" rows="10" placeholder='Add Links of Files seperated by comma' onChange={(e)=>setLinks(e.target.value)}></textarea>
    </>)
};



  const handleSend=()=>{
   console.log(encodeURIComponent(message));

    let numbersArray=numbers.split(",");
    let linksArray=links.split(",");
    let linksString="";
    let numberString="";
    numbersArray.forEach(element => {
      numberString=numberString+"91"+element;
    });
    linksArray.forEach((element)=>{
        linksString=linksString+element;
    })
    let data={
        message:message,
        numbersArray:numbersArray,
        links:linksArray
    };
  
    
    const urls = envVariables.domain+"/send/alltype/";
    console.log("URL DATA",urls);
   axios.post(urls,data).then((response)=>{
       console.log(response);
   })


    }

  

  return(
    <>

    <center>
      <h1>Send Anything </h1>
 <textarea cols="50" rows="10" type={'text'} placeholder='Numbers seperwtd by comma without country code' value={numbers} onChange={(e)=>setNumbers(e.target.value)}></textarea>
<textarea  cols="50" rows="10" type={'text'} placeholder='Messages' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
<br></br>

{/* <div> <button onClick={()=>setDocs(true)}>Add Documents</button> {isdocs?<DocsInput></DocsInput>:null} </div> */}
<div><button onClick={()=>setShowLinks(true)}>Add files from Links </button>
<br></br>
{showLinks?<LinkForm></LinkForm>:null}
 </div>

<button onClick={()=>handleSend()}>Send Mesagae</button>
<div>MessageLength: {message?.length}</div>

      
    </center>
   

    </>
  )

}
export default SendMessage;

