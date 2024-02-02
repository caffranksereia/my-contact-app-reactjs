import styled from "styled-components"
import { Contacts } from "./Contacts"
import { useEffect, useState } from "react";
import { ContactServices } from "./services";

export const Container = styled.div`
display:grid;
width:700px;
height:60%;
border-radius:10px;
margin:20px 20px 20px 25%; 
jsutify-content:center;
`


export const ContactsList = () =>{
    const [users, setUsers] = useState([]);

    const getAllContact = async() =>{
      try{
        const response =  await ContactServices.getAll();
        console.log(response)
  
        setUsers(response)
        }catch(e){
          console.log(e);
        }
    }
    useEffect(()=>{
        getAllContact()
    }, [])
    
    return(
        <Container>
            {
                users.length === 0 ? <p>Carregando...</p>:(
                    users.map((user) =>(
                        <Contacts key={user.id} name={user.name} id={user.id}/>
                    ))
                )
            }
            
        </Container>
    )
}