import React from 'react';
import { FaEnvelope, FaKey } from 'react-icons/fa';
import { Container } from '../../styles/globalStyles';
import { Title, Form } from './styled.js';

export default function Login() {
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

        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
}
