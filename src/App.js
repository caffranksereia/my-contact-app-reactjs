import GlobalStyled from "./globalStyled";
import { Header } from "./Header";
import styled from "styled-components";
import { ContactsList } from "./ContactList";
import { Outlet } from "react-router-dom";


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

const App = () =>{
  return (
    <Wrapper>
     <Outlet/>
    </Wrapper>
  );
}

export default App;
