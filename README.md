# Lista de Tarefas

Este é um aplicativo de lista de tarefas simples construído com React. Ele permite que os usuários adicionem, editem e removam tarefas. Além disso, inclui duas tarefas fixas que não podem ser alteradas ou removidas.

## Funcionalidades

- Adicionar uma nova tarefa.
- Editar uma tarefa existente.
- Remover uma tarefa.
- Exibir duas tarefas fixas que não podem ser personalizadas.

## Instalação

1. Clone o repositório para a sua máquina local:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
Navegue até o diretório do projeto:
bash

cd nome-do-repositorio
Instale as dependências do projeto:
bash

npm install
Uso
Inicie o aplicativo:
bash

npm start
Abra o seu navegador e vá para http://localhost:3000 para ver o aplicativo em ação.
Estrutura do Projeto
src/
components/
Formulario.js - Componente responsável pelo formulário de adição de tarefas.
ListaDeTarefas.js - Componente responsável pela lista de tarefas.
Tarefa.js - Componente responsável por exibir uma tarefa individual.
App.js - Componente principal do aplicativo.
App.css - Arquivo de estilos para o componente principal.
ListaDeTarefas.css - Arquivo de estilos para o componente ListaDeTarefas.
Formulario.css - Arquivo de estilos para o componente Formulario.
public/ - Arquivos públicos.
package.json - Arquivo de configuração do npm.
Exemplo de Código
Componente App.js
jsx

import React, { useState } from 'react';
import ListaDeTarefas from './components/ListaDeTarefas';
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
Componente ListaDeTarefas.js
jsx

import React from 'react';
import Tarefa from './Tarefa';
import './ListaDeTarefas.css';

const ListaDeTarefas = ({ tarefas, removerTarefa, editarTarefa }) => {
  const tarefasFixas = [
    { id: 'static-task-1', texto: 'Ilha de Bora Bora na Polinésia Francesa' },
    { id: 'static-task-2', texto: 'Cidade do Cabo - África do Sul' }
  ];

  return (
    <div className="lista">
      {tarefasFixas.map((tarefaFixa) => (
        <Tarefa
          key={tarefaFixa.id}
          tarefa={tarefaFixa}
          removerTarefa={() => {}}
          editarTarefa={() => {}}
        />
      ))}

      {tarefas.map((tarefa) => (
        <Tarefa
          key={tarefa.id}
          tarefa={tarefa}
          removerTarefa={removerTarefa}
          editarTarefa={editarTarefa}
        />
      ))}
    </div>
  );
}

export default ListaDeTarefas;
Estilos
App.css
css

body {
  font-family: 'Arial', sans-serif;
  background-color: #f0f2f5;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
}

h1 {
  font-size: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}
ListaDeTarefas.css
css

.lista {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  background-color: #f4f4f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.tarefa {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: box-shadow 0.3s ease;
}

.tarefa:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.tarefa .conteudo {
  flex: 1;
  margin-right: 10px;
  font-size: 16px;
}

.tarefa .acoes {
  display: flex;
  gap: 10px;
}

.button {
  padding: 8px 12px;
  background-color: #5cb85c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #4cae4c;
}
Formulario.css
css

.form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.input {
  flex: 1;
  padding: 12px 16px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.input:focus {
  border-color: #5cb85c;
  box-shadow: 0 0 8px rgba(92, 184, 92, 0.2);
  outline: none;
}

.button {
  padding: 12px 20px;
  background-color: #5cb85c;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.button:hover {
  background-color: #4cae4c;
  box-shadow: 0 4px 8px rgba(76, 174, 76, 0.3);
}