import { useState } from "react";
import styled from "styled-components"

export const WrapperModal = styled.div`
display:flex;
width:500px;
height:30rem;
border-radius:10px;
margin-top:20px;
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
padding: 2px 2px 2px 2px;
font-size:1.25rem;
`;


export const ContainerP = styled.div`
display:flex;
width:400px;
height:1.6rem;
margin:80px 1px 1px 25px;
justify-content:center;
position:fixed;
`
export const ContainerPhones = styled.div`
display: grid;
width:250px;
height:120px;
background:green;
margin:120px 2px 2px 7%;
justify-content:center;
align-item:center;
position:fixed;
`;
export const ButtonContainer = styled.div`
display: flex;
width:100%;
height:70px;
justify-content:center;
margin:65% 2px 2px;`

export const Button = styled.button`
color: white;
background:#BF4F74;
    font-size: 1em;
  margin: 1rem 2px 2px 5px;
  padding: 0.25em 1em;
  border: 2px solid ;
  border-radius: 3px;`;

export const ButtonContainerClose =styled.div`
width:100%;
height: 30px;
`;

export const  Modal = ({id}) =>{
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [phone, setPhone] = useState();
    return(
        <WrapperModal>
            <ButtonContainerClose>
                    <Button>X</Button>
                </ButtonContainerClose>
                <ContainerTitle>
                    <Title>{name}</Title>
                </ContainerTitle>
                 <ContainerP>
                    <TextP>idade: {age}</TextP>
                </ContainerP>
                <Wrapper>
                    <ContainerP>
                        <TextP>Phones</TextP>
                    </ContainerP>
                    <ContainerPhones>
                        <TextP>{phone}</TextP>
                    </ContainerPhones>
                </Wrapper>
        </WrapperModal>
    )
}