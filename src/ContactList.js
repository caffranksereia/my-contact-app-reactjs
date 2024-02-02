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
`;
export const TextP = styled.p`
padding: 2px 2px 2px 2px;
font-size:1.25rem;
`;


export const ContactsList = () =>{
    const [error, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

   
    useEffect(()=>{
        const getAllContact = async() =>{
            setLoading(true);
            try{
              const response =  await ContactServices.getAll();

        
              setUsers(response)
              setLoading(false);
              }catch(e){
                setError(e);
              }finally{
                setLoading(false)
              }
          }
          getAllContact();
    }, [])

    if(isLoading) {
        return <TextP>Loading...</TextP>
    }

    if(error) {
        return <TextP>Algo esta errado que Nao esta certo...</TextP>
    }
    
    return(
        <Container>
        {
          (users || []).lenght === 0? (
                <TextP>Sem contato.</TextP>

            ):( users.map((user) =>(
                    <Contacts key={user.id} name={user.name} id={user.id}/>
                ))
            )
        }
                  
                
            
            
        </Container>
    )
}