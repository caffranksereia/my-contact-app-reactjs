import { Header } from "./Header";
import styled from "styled-components";
import { ContactsList } from "./ContactList";


export const Wrapper = styled.div`
display:grid;
width:100%;
height: 100px;

`

export const Container = styled.div`
background: transparent;
margin-left:5px;
width:100%;
height: 400;
border:none;
font-size:1.25rem;

`


export const Home = () =>{
    return (
      <Wrapper>
        <Header/>
        <ContactsList/>
      </Wrapper>
    );
  }