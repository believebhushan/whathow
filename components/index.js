
import WhatUi from "../home"
import navigationData from "../utils/config/navigationConfig";
import { useState } from "react";
import {ListGroup,ListGroupItems,Title} from "./styles";
import Contacts from "./contacts";
import SendMessage from "./sendMessage";
import Stats from "./stats";

const Navigations=()=>{
    const [navigation,setNavigation]=useState("sendBM");
    const handleClickNav=(navigation)=>{
        console.log(navigation.value);
        setNavigation(navigation?.value);

    }


    const  navigationItem=(navigation)=>{
        if(navigation==="sendBM"){
            return <WhatUi></WhatUi>;
        }else if(navigation==="sendBMC"){
            return <Contacts></Contacts>
        }
        else if(navigation==="sendBMM"){
            return <SendMessage></SendMessage>
        }
        else if(navigation==="STATS"){
            return <Stats></Stats>
        }
        
    }


    // window.addEventListener('beforeunload', function (e) {
    //    e.preventDefault();
    //     e.returnValue = '';
    //     console.log("can be leved ");
    // });
    const renderNavigation= navigationData.options.map((navigation)=><>
    <ListGroupItems>
    <tr onClick={()=>handleClickNav(navigation)}>{navigation.name}</tr>

    </ListGroupItems>
    
    </>);
    return (
        <>
         <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <div> 
             <ListGroup>
                {renderNavigation}
             </ListGroup>           
             </div>
            <div >
            {navigationItem(navigation)}
            </div>
            <div></div>

         </div>
     
        </>
    )

   


}
export default Navigations;
