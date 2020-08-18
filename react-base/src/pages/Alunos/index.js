import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import {
  FaEdit,
  FaWindowClose,
  FaUserCircle,
  FaPlusCircle,
} from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Container } from '../../styles/globalStyles';
import { Title, ContainerAluno, Modal, MyLink } from './styled';
import axios from '../../services/axios';
import Loading from '../../components/Loading';

export default function Login() {
  const [alunos, setAlunos] = useState([]);
  const [currentAluno, setAluno] = useState([]);
  const [index,setIndex] = useState(-1)
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await axios.get('/alunos');
      setAlunos(response.data);
      setLoading(false);
    }
    getData();
  }, []);
  const handleClickAsk = (e, index, aluno) => {
    e.preventDefault();
    setAluno(aluno);
    setModal(true);
    setIndex(index)
  };
  const handleClickWindow = (e) => {
    const modalContainer = document.querySelector('.modal');
    const modalX = document.querySelector('.modalContent > span');
    const modalCancel = document.querySelector('.modalFooter').lastChild;
    const element = e.target;

    if (
      element === modalContainer ||
      element === modalX ||
      element === modalCancel
    ) {
      setModal(false);
    }
  };
  const handleDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/alunos/${currentAluno.id}`);
      const novosAlunos = [...alunos];
      novosAlunos.splice(index, 1);
      setAlunos(novosAlunos);
      setLoading(false);
      setModal(false);
    } catch (e) {
      const erro = get(e, 'response.data.errors', []);
      erro.map((err) => toast.error(err));
      setLoading(false);
      setModal(false);
    }
  };

  return (
    <Container width="80%">
      <Loading isLoading={loading} />
      <Modal
        className="modal"
        display={modal ? 'block' : 'none'}
        onClick={(e) => handleClickWindow(e)}
      >
        <div className="modalContent">
          <span>&times;</span>
          <div className="modalBody">
            <span>Tem certeza que deseja excluir {currentAluno.nome}?</span>
          </div>
          <div className="modalFooter">
            <button type="button" onClick={handleDelete}>
              Confirmar
            </button>
            <button type="button">Cancelar</button>
          </div>
        </div>
      </Modal>

      <Title> Alunos </Title>
      <MyLink to="/aluno">
        <FaPlusCircle size={20} />
        aluno
      </MyLink>
      <ContainerAluno>
        {alunos.map((aluno, index) => (
          <div key={aluno.id}>
            {get(aluno, 'Photos[0].url', false) ? (
              <img
                src={aluno.Photos[aluno.Photos.length - 1].url}
                alt="foto"
              />
            ) : (
              <FaUserCircle size="40px" color="#000d" />
            )}
            <span> {aluno.nome}</span>
            <span> {aluno.email}</span>
            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit size="25px" color="#007bff" />
            </Link>
            <Link
              to={`/aluno/${aluno.id}/delete`}
              onClick={(e) => handleClickAsk(e, index, aluno)}
            >
              <FaWindowClose size="25px" color="#dc3545" />
            </Link>
          </div>
        ))}
      </ContainerAluno>
    </Container>
  );
}
