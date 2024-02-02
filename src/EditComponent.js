import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import { ContactServices } from "./services";

export const WrapperModal = styled.div`
display:flex;
width:500px;
height:500px;
border-radius:10px;
margin-top:20px;
margin-left: 30%;
box-shadow:0px 0px 8px #ddd;
align-item: center
`;
export const Wrapper = styled.div`
display:flex;
width:100%;
height:2.5rem;
border-radius:10px;
margin-top:5%;
align-item: center
background:green;
position:fixed;
`;

export const Title = styled.h1`
align-item:center
width:100%;
font-size:20px;
`

export const ContainerTitle = styled.div`
display:flex;
width:400px;
height:1.6rem;
margin:50px 1px 1px 25px;
justify-content:center;
position:fixed;
`;

export const TextP = styled.p`
margin:1px 1px 1px 1px;
font-size:1.25rem;
`;


export const ContainerP = styled.div`
display:flex;
width:400px;
height:1.6rem;
margin:120px 1px 1px 25px;
justify-content:center;
position:fixed;
`
export const ContainerPhones = styled.div`
display: grid;
width:300px;
height:200px;
margin:140px 2px 2px 7%;
justify-content:center;
align-item:center;
position:fixed;
`;
export const ButtonContainer = styled.div`
display: flex;
width:100%;
height:70px;
justify-content:center;
margin:85% 2px 2px;`

export const Button = styled.button`
color: white;
background:#BF4F74;
    font-size: 1em;
  margin: 1rem 2px 2px 5px;
  padding: 0.25em 1em;
  border: 2px solid ;
  border-radius: 3px;
`;

export const ButtonContainerClose =styled.div`
width:100%;
height: 30px;
`;
export const Input = styled.input`
margin-top:1px;
margin-left:5px;
width:100%;
height: 30px;
border:none;
font-size:1.25rem;
box-shadow:0px 0px 8px #ddd;
input:focus {
    outline: none;
  }
  

`; 
export const InputPhone=styled.input`
background: transparent;
margin-top:20px;
margin-left:5px;
padding:4px 2px 2px 2px;
width:220px;
height: 100%;
border:none;
font-size:1.25rem;
box-shadow:0px 0px 8px #ddd;
input:focus {
    outline: none;
  }
  

`; 

export const Div = styled.div`
width: 100%;
height:30px;`;

export const ContainerPhoneTitule = styled.div`

display:flex;
width:400px;
height:1.6rem;
margin:120px 1px 1px 25px;
justify-content:center;
position:fixed;
`;
export const TextPhone = styled.p`
margin:1px 1px 1px 1px;
font-size:1.25rem;
`;

export const InputName = styled.input`
margin-top:1px;
margin-left:5px;
width:100%;
height: 30px;
border:none;
font-size:1.25rem;
box-shadow:0px 0px 8px #ddd;
input:focus {
    outline: none;
  }
  

`; 

export const TextPMessage = styled.p`
margin:1px 1px 1px 60px;
padding:1px 1px 1px 1px;
font-size:1.25rem;
`;
export const DivMessageCreated = styled.div`
background:#4CD973;
height: 25px;
width:100%;

`;

export const DivMessageError = styled.div`
background:#EA220F;
height: 25px;
width:100%;

`;


export const EditComponent = ({id}) =>{
    const [data, setData] = useState();
    const [age, setAge] = useState();
    const [name, setName] = useState();
    const [phone_number, setPhone] = useState([])
    const [message, setMessage] = useState();
    const [errorMessage, setErrorMenssage] = useState(false);
    const [viewMessage , setViewMessage ] = useState(false)

    const findId = async ()=>{
        let data = await ContactServices.getUser(id);
    
        return setData(data);
    }
    const updataData =async (e) =>{
        e.preventDefault();
        
        try{
        
            const data = await ContactServices.updateUser(id,name, age,phone_number);
            console.log(phone_number)
            setViewMessage(true)
            return setMessage(data)
        
            
        }catch(e){
            setViewMessage(true)
            return setErrorMenssage(e);
        }
    }

    useEffect(()=>{
        findId()
    })
    return(
        <WrapperModal>
             <ButtonContainerClose>
        <Link to={`/`}>
        <Button>X</Button>
        </Link>
        
        </ButtonContainerClose>
        
        <ContainerTitle>
        {
                viewMessage || viewMessage === null ?    <DivMessageCreated >
                <TextPMessage>{message}</TextPMessage>
                </DivMessageCreated>: <DivMessageError >
                <TextPMessage>{errorMessage}</TextPMessage>
                </DivMessageError>
            }
            <TextP>Name: </TextP>
            <Div >
            <InputName  onChange={(e) => setName(e.target.value)} />
            </Div>
            
        </ContainerTitle>
         <ContainerP>
            <TextP>idade: </TextP>
            <Input onChange={(e) => setAge(e.target.value)}/>
        </ContainerP>
        <Wrapper>
            <ContainerPhoneTitule>
                <TextPhone>Phones:</TextPhone>
            </ContainerPhoneTitule>
            <ContainerPhones>
                <InputPhone onChange={(e) => setPhone(e.target.value)} />
            </ContainerPhones>
        </Wrapper>
        <ButtonContainer>
            <Button onClick={(e)=> updataData(e) }>Save</Button>
        </ButtonContainer>
        </WrapperModal>
       
    )
}