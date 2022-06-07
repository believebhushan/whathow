import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {Row,ListContacts} from './styles';
import envVariables from '../appenv';

const Contacts = ()=>{
    const domain=envVariables.domain;

    const [contacts,setContacts]=useState(null);
    useEffect(()=>{
   axios.get(domain+"/home/get/contacts").then((response)=>{
        const res=response;
        setContacts(response?.data.contacts);
   })

    },[])
    return (
        <ListContacts>
            {contacts?contacts.map((item)=><><Row>{item?.name}{"      "}{item?.number}</Row></>):null}
            
        </ListContacts>
    );
}


export default Contacts;