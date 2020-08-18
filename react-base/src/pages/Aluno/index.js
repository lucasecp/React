import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { FaUserCircle, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/globalStyles';
import { Title, Form, ProfilePicture } from './styled';
import axios from '../../services/axios';
import Loading from '../../components/Loading';
import history from '../../services/history';

export default function Aluno(props) {
  const { id } = props.match.params;
  const [name, setName] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [loading, setLoading] = useState(false);
  const [foto, setFoto] = useState('');

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    async function getData() {
      try {
        const response = await axios.get(`/alunos/${id}`);
        const photos = response.data.Photos;
        setName(response.data.nome);
        setSobrenome(response.data.sobrenome);
        setEmail(response.data.email);
        setAge(response.data.idade);
        setFoto(photos[photos.length - 1].url || '');
        setLoading(false);
      } catch (err) {
        const error = get(err, 'response.data.errors', []);
        const status = get(err, 'response.status', []);
        setLoading(false);
        if (status === 401) {
          toast.error('Usuário não autorizado');
         return history.push('/');
        }
         if (error.length > 0) error.map((errors) => toast.error(errors));
      }
    }
    getData();
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const nome = name;
    const idade = Number(age);
    if (!name.trim() || !sobrenome.trim() || !email.trim() || !age) {
      return toast.warning('Campo(s) vazio(s)');
    }
    if (name.length < 3 || sobrenome.length < 3) {
      return toast.warning('campo nome ou sobrenome faltando');
    }
    if (age > 110 || age < 1) {
      return toast.warning('Idade inválida');
    }
    try {
      if (id) {
        setLoading(true);
        await axios.put(`/alunos/${id}`, { nome, email, idade, sobrenome });
        setLoading(false);
        toast.success('aluno editado com sucesso.');
        return history.push('/');
      }
      setLoading(true);
      await axios.post('/alunos', { nome, email, idade, sobrenome });
      setLoading(false);
      toast.success('aluno cadastrado com sucesso.');
      return history.push('/');
    } catch (e) {
      const error = get(e, 'response.data.errors', []);
      setLoading(false);
      error.map((err) => toast.error(err));
      return history.push('/');
    }
  };

  return (
    <Container width="500px">
      <Loading isLoading={loading} />
      <Title> {id ? 'Editar aluno' : 'Novo aluno'} </Title>
      {id &&
        <ProfilePicture>
          {foto ? (
            <>
              <img src={foto} alt={`foto de ${name}`} />
              <Link to={`/foto/${id}`}>
                {' '}
                <FaEdit size={25} />
              </Link>
            </>
          ) : (
            <>
              <FaUserCircle size={100} />
              <Link to={`/foto/${id}`}>
                {' '}
                <FaEdit size={25} />{' '}
              </Link>
            </>
          )}
        </ProfilePicture>
}
      <Form action="/" method={id ? 'put' : 'post'} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name || ''}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Sobrenome"
          value={sobrenome || ''}
          onChange={(e) => setSobrenome(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email || ''}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Idade"
          value={age || ''}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">{id ? 'Editar' : 'Cadastrar'}</button>
      </Form>
    </Container>
  );
}
