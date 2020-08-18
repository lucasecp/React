import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  label {
    height: 180px;
    width: 180px;
    position: relative;
    border-radius: 50%;
    border: dashed 4px #dc3545;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #eee;
  }
  h1 {
    margin-bottom: 20px;
    font-size: 20px;
    color: #0009;
  }

  img {
    height: 100%;
    width: 100%;
  }
  input {
    display: none;
    height: 100%;
  }
`;
