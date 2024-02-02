
import {  useParams } from "react-router-dom";
import React from 'react';

import { EditComponent } from "./EditComponent";


export const EditContact = () =>{
    const {id} = useParams();
    return(
        <div>
           <EditComponent id={id ? Number.parseInt(id, 10):null }/>
        </div>
    )
}