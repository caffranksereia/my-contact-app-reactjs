import styled from "styled-components"
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
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


export const EditContact = ({id}) =>{
    const [age, setAge] = useState();
    const [name, setName] = useState();
    const [phone, setPhone] = useState([]);

    const onUpdate =(e) =>{
        e.preventDefault();
        const data = [name, age]
        const phone_data =[ phone]
        try{
             ContactServices.createUser(data);
            
        }catch(error){
            console.log(error)
        }
        console.log(age,name)
        console.log(phone_data)
    }

    const onUpdateId =() =>{
        console.log(id)
    }
    const { contact } = useLoaderData();
    return(
        <WrapperModal>
            <ButtonContainerClose>
                <Link to={`/`}>
                <Button>X</Button>
                </Link>
                
                </ButtonContainerClose>
                <ContainerTitle>
                    <TextP>Name: </TextP>
                    <Div >
                    <InputName  defaultValue={contact.name}/>
                    </Div>
                    
                </ContainerTitle>
                 <ContainerP>
                    <TextP>idade: </TextP>
                    <Input  defaultValue={contact.age}/>
                </ContainerP>
                <Wrapper>
                    <ContainerPhoneTitule>
                        <TextPhone>Phones:</TextPhone>
                    </ContainerPhoneTitule>
                    <ContainerPhones>
                        <InputPhone  defaultValue={contact.phone}></InputPhone>
                    </ContainerPhones>
                </Wrapper>
                <ButtonContainer>
                    <Button onClick={(e) => onUpdateId(id) }>Save</Button>

                    
                </ButtonContainer>
        </WrapperModal>
    )
}