import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif, Arial, Helvetica, sans-serif;
    list-style: none;
    margin: 0;
    padding: 0;
}
body, #root{
  height: 100vh;
}
#root{
  background:  #262626
}
button{
  cursor:pointer
}
`;
export const Container = styled.main`
  max-width: 400px;
  margin: 50px auto;
  background: #FEFEFE;
  box-shadow: 4px 4px 4px #000a
`;
