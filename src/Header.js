import styled from "styled-components"
import { Search } from "./Search"
import { SearchResult } from "./SearchResult"
import { useState } from "react"
import { Link } from "react-router-dom"

export const Wrapper = styled.div`
display:flex;
width:100%;
height: 100px;
`
export const Title = styled.h1`
font-size:30px;
`

export const ContainerTitle = styled.div`
display:flex;
width:300px;
height: 35px;
margin-top:20px;
justify-content:center;
`;

export const ButtonContainer = styled.div`
display: flex;
width:50px;
height:40px;
justify-content:center;
margin:25px 2px 2px 70px;`

export const Button = styled.button`
width:25px;
height:25px;
color: white;
background:#BF4F74;
    font-size: 1em;
  margin: 8px 2px 2px 5px;
  padding:1px 1px 1px 1px;
  border: 2px solid ;
  border-radius: 3px;`;


export const Header =() =>{
    const [results, setResults] = useState([])
    return(
        <Wrapper>
            <ContainerTitle>
            <Title>My Contacts</Title>
            </ContainerTitle>
            <Search setResult ={setResults}/>
       {results && results.length > 0 && <SearchResult results={results} />}

       <ButtonContainer>
        <Link to={'/new'}>
            <Button >+</Button>
        </Link>
                </ButtonContainer>
        
        </Wrapper>
    )
}