// Importando o atributo {useState} no import do react no App.js
import React, {useState} from 'react';
import api from './services/api';
import './App.css';

import logo from './assets/logo.svg';
//Função submit para Api
function App() {
  // Aplicando desestroturização no useState 
  const [email, setEmail] = useState('');

  // OBS. Componente em estado, é qualquer informação armazenada no componente 
  async function handleSubmit(event) {
    // evento que não permite refresh na pagina
    event.preventDefault();
    
    const response = await api.post('/sessions', { email });

    const { _id } = response.data;

    //Gravando o id do usuário no localStorage
    localStorage.setItem('user', _id);
    
  }

  return (
    <div className="container">
      <img src={logo} alt="AirCnc"/>
      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
        </p>

          {/* evento JavaScipt recebendo a função handleSubmit embutida no hml
           em forma da variável */}
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-Mail *</label>
            <input type="email" id="email" placeholder="Seu melhor email"
            value={email}
            onChange={event => setEmail(event.target.value)}/>
            <button className="btn" type="submit">Entrar</button>
          </form>

      </div>
    </div>
  );
}

export default App;
