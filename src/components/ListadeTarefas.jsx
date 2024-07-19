import React from 'react';
import Tarefa from './tarefa';
import './ListaDeTarefas.css';
 
const ListaDeTarefas = ({ tarefas, removerTarefa, editarTarefa }) => {
  const tarefaFixa = {  texto: 'Read Dead Redemption 2' };
  const tarefaFixa2 = { texto: 'Ea Fc 24' };
 
  return (
    <div className="lista">
      <Tarefa tarefa={tarefaFixa} removerTarefa={() => {}} editarTarefa={() => {}} />
      <Tarefa tarefa={tarefaFixa2} removerTarefa={() => {}} editarTarefa={() => {}} />
 
      {tarefas.map(tarefa => (
        <Tarefa key={tarefa.id} tarefa={tarefa} removerTarefa={removerTarefa} editarTarefa={editarTarefa} />
      ))}
    </div>
  );
}
 
export default ListaDeTarefas;
 
 