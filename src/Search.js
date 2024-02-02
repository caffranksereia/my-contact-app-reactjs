import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components"

export const Wrapper = styled.div`
display:flex;
width:100%;
height:2.5rem;
border-radius:10px;
margin-top:20px;
box-shadow:0px 0px 8px #ddd;
align-item: center;
`

export const Input = styled.input`
background: transparent;
margin-left:5px;
width:100%;
height: 100%;
border:none;
font-size:1.25rem;

input:focus {
    outline: none;
  }
  

`
export const Button = styled.button`
width:40px;
height: 20px;

`


export const Search = ({setResult})=>{
    const [input, setInput] = useState("")


    const handleChange = (value) => {
        setInput(value);
        console.log(value)
      };
    return(
        <Wrapper>
                <FaSearch id="search-icon" color="royablue" />
                <Input  placeholder="Type to search..." 
                value={input}
                onChange={(e) => handleChange(e.target.value)}></Input>
        </Wrapper>
    )
}