import React from 'react';
import Tarefa from './tarefa';
import './ListaDeTarefas.css';

const ListaDeTarefas = ({ tarefas, removerTarefa, editarTarefa }) => {
  return (
    <div className="lista">
      {tarefas.map(tarefa => (
        <Tarefa key={tarefa.id} tarefa={tarefa} removerTarefa={removerTarefa} editarTarefa={editarTarefa} />
      ))}
    </div>
  );
}

export default ListaDeTarefas;
