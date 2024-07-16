import React, { useState } from 'react';
import './Formulario.css';

const Formulario = ({ adicionarTarefa }) => {
  const [texto, setTexto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim()) {
      adicionarTarefa({ id: Date.now(), texto });
      setTexto('');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Adicionar nova tarefa"
        className="input"
      />
      <button type="submit" className="button">Adicionar</button>
    </form>
  );
}

export default Formulario;
