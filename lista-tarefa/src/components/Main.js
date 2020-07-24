import React, { Component } from 'react';
import './Main.css';
import edit from '../assets/fonts/edit.png';
import lixo from '../assets/fonts/download.png';

export default class Main extends Component {
    state = {
      novaTarefa: '',
      tarefas: [],
      index: -1,
    };

  handleSubmit=(e) => {
    e.preventDefault();
    const input = document.querySelector('input[type="text"]');
    const { novaTarefa, tarefas, index } = this.state;

    if (!novaTarefa) return;

    const alreadyExists = tarefas.filter((tarefa) => tarefa === novaTarefa);
    if (alreadyExists.length) {
      input.classList.add('equalError');
      return;
    }
    input.classList.remove('equalError');

    const novasTarefas = [...tarefas];
    if (index === -1) {

      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: '',
      });
    } else {

      novasTarefas[index] = novaTarefa;
      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  handleDelete = (index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    this.setState({
      tarefas: [...novasTarefas],
    });
  }

  handleEdit = (index) => {
    const { tarefas } = this.state;
    const input = document.querySelector('input[type="text"]');
    input.focus()
    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  }

  render() {
    const { tarefas, novaTarefa } = this.state;
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <form action="#" onSubmit={this.handleSubmit}>
          <input type="text" value={novaTarefa} onChange={this.handleChange} placeholder="Tarefa" />
          <button type="submit">Adicionar</button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <span className="img">
                <img src={edit} alt="img" height="30px" onClick={(e) => this.handleEdit(index)} />
                <img src={lixo} alt="img" height="30px" onClick={(e) => this.handleDelete(index)} />
              </span>
            </li>
          ))}

        </ul>
      </div>
    );
  }
}
