import styled from 'styled-components';

export const Title = styled.h2`
  padding: 20px 10px;
  color: #0009;
  margin-left: 30px;
`;

export const Form = styled.form`
   padding: 20px 0;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   input{
     width:300px;
     height: 40px;
     border-radius:5px;
     padding:10px;
     margin: 10px 0;
     outline: none;
     border: solid #000 0.5px;
   }
   button{
    border-radius:5px;
    border: solid #dc3545 1px;
    background: #dc3545;
    color: #fff;
     outline: none;
     width: 70px;
     height: 30px;
     outline: none;

   }

`
export const ProfilePicture = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   img{
     height: 100px;
     width: 100px;
     border-radius: 50%;
   }
`