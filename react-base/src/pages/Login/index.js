import React from 'react';
import { FaEnvelope, FaKey } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/globalStyles';
import { Title, Form } from './styled';
import { clickBtnRequest } from '../../store/modules/exemple/actions';

export default function Login() {
  const dispach = useDispatch();
  function handleClick(e) {
    e.preventDefault();

    dispach(clickBtnRequest());
  }

  return (
    <Container>
      <Title> Login </Title>
      <Form>
        <div>
          <FaEnvelope className="inputIcon" />
          <input required type="email" name="email" placeholder="Email" />
        </div>

        <div>
          <FaKey className="inputIcon" />
          <input required type="password" name="password" placeholder="Senha" />
        </div>

        <button type="submit" onClick={handleClick}>
          Entrar
        </button>
      </Form>
    </Container>
  );
}
