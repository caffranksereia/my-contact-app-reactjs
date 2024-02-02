import styled from "styled-components"
import { ContactServices } from "./services"
import { Link } from "react-router-dom"

export const Container = styled.div`
display:flex;
width:500px;
height:2.5rem;
border-radius:10px;
margin:6px 2px 2px 15%;
box-shadow:0px 0px 8px #ddd;
jsutify-content:center;

:hover{
    background-color: #efefef;
  }
`

export const ContainerContact = styled.div`
display:flex;
width:300px;
height:25px;
margin:12px 20px 20px 5%;

`

export const TextP = styled.p`
margin:1px 1px 1px 1px;
font-size:1.25rem;
`

export const ButtonContainer = styled.div`
display: flex;
width:250px;
height:35px;
justify-content:center;
margin:2px 2px 2px 1px;`

export const Button = styled.button`
width:70px;
height:30px;
color: white;
background:#BF4F74;
    font-size: 20px;
  margin: 3px 2px 2px 5px;
  padding: 1px1px;
  border: 2px solid ;
  border-radius: 3px;`;
export const Contacts = ({id,name}) =>{

    const onUpdate =()=>{
        // const response = ContactServices.getUser(id);
        console.log(id)
    }


    const onDelete =()=>{
        ContactServices.deleteUser(id)
    }

    return( 
        <Container>
            <ContainerContact>
                <TextP>{id}:{name}</TextP>
            </ContainerContact>
            <ButtonContainer>
                <Link to={`/${id}/edit`}>
                     <Button onClick={()=>onUpdate(id)}>Edit</Button>
                </Link>
                    
                    <Button onClick={()=>onDelete(id)}>Delete</Button>
                </ButtonContainer>
        </Container>
    )
}