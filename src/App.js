import React, { useState } from 'react';
import ListaDeTarefas from './components/ListadeTarefas';
import Formulario from './components/Formulario';
import './App.css';

const App = () => {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (tarefa) => {
    setTarefas([...tarefas, tarefa]);
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  };

  const editarTarefa = (id, novoTexto) => {
    setTarefas(tarefas.map(tarefa => (tarefa.id === id ? { ...tarefa, texto: novoTexto } : tarefa)));
  };

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <Formulario adicionarTarefa={adicionarTarefa} />
      <ListaDeTarefas tarefas={tarefas} removerTarefa={removerTarefa} editarTarefa={editarTarefa} />
    </div>
  );
}

export default App;
