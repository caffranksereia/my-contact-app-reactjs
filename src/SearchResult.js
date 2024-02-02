import styled from "styled-components"


export const ContainerSearchResult = styled.div`
padding: 10px 20px;

:hover{
    background-color: #efefef;
}

`
export const SearchResult = ({result}) =>{
    return (
            <ContainerSearchResult 
            onClick={(e) => alert(`You selected ${result}!`)}>
                {result}
            </ContainerSearchResult>
    )
}