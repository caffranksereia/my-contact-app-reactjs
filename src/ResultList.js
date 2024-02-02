import styled from "styled-components";
import { SearchResult } from "./SearchResult";

export const ContainerSearchResultsList = styled.div`
    width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 8px #ddd;
  border-radius: 10px;
  margin-top: 1rem;
  max-height: 300px;
  overflow-y: auto;
`
export const SearchResultsList = ({ results }) => {
  return (
    <ContainerSearchResultsList >
      {results.map((result, id) => {
        return <SearchResult result={result.name} key={id} />;
      })}
    </ContainerSearchResultsList>
  );
};