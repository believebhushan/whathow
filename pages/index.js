
import { useState } from "react"
import QRCode from "react-qr-code";
import Navigations from "../components";
import axios from "axios";
import envVariables from "../components/appenv";
import Login from "../components/login";

export default function Home() {
 const [state,setState]=useState({isloggedIn:null,qrText:"",isauthorised:false});

  console.log(state.isloggedIn);
  if(!state.isloggedIn){
    setTimeout(()=>{
      axios.get(envVariables.domain+"/getqr").then((res)=>{
        console.log(res?.data);
        console.log(new Date())
    setState({isloggedIn:res?.data?.isReady,qrText:res.data?.qrText})
  
       }).catch((err)=>{
         console.log("Error",err);
       })
    },2000);

  }


 
  return (
    <>
    <center>
      {state.isauthorised?<Login></Login>:null}
      <br></br>
      <br></br>

   
   
    { !state.isloggedIn?<QRCode value={state.qrText}></QRCode>:null}
    {state.isloggedIn?<Navigations></Navigations>:<><br></br> Scan the Qr Code to Connect</>}

    </center>
   
    </>
  
  );
}
