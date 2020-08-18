import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 22px;
  margin: 20px 10px;
  color: #0009;
  display: inline-block;
`;
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  .login {
    color: #007bff;
    font-size: 15px;
    text-decoration: underline;
    margin: 0;
  }
`;

export const Form = styled.form`
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    height: 40px;
    padding-left: 20px;
    margin: 10px auto;
    outline: none;
    width: 300px;
  }
  input:focus {
    border: solid #dc3545 0.5px;
  }
  .inputIcon {
    font-size: 13px;
    position: relative;
    right: -19px;
    color: #dc3545;
  }
  button {
    border-radius: 3px;
    background: #dc3545;
    color: #fff;
    margin: 10px auto;
    display: block;
    padding: 5px;
    outline: none;
    border: solid #dc3545 1px;
    width: 70px;
    transition: 0.1s;
  }
  button:hover {
    background: #a60522;
  }
`;
