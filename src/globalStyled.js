import { createGlobalStyle } from "styled-components";


export  default  createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    scrollbar-width: thin;          /* "auto" or "thin" */
    scrollbar-color:white;   /* scroll thumb and track */
   };

   ::-webkit-scrollbar   {
    width: 6px;
    background:white;
   }
`