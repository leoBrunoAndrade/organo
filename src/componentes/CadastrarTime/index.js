import './CadastrarTime.css'
import CampoTexto from '../CampoTexto';
import Botao from '../Botao';
import { useState } from 'react';

const CadastrarTime = ({enviarTime}) => {

  console.log(enviarTime);
  const [nomeTime, setNomeTime] = useState('');
  const [cor, setCor] = useState('');

  const aoCadastrarTime = (evento) => {
    evento.preventDefault();
    
    const time = {
      nome: nomeTime,
      cor: cor
    }
    enviarTime(time);
  }

  return (

    <section className="cadastrarTime">
      <form onSubmit={aoCadastrarTime}>
      <h2>Crie um novo time</h2>
      <CampoTexto
        label="Nome"
        valor={nomeTime}
        atualizar={valor => setNomeTime(valor)}
        placeholder="Digite o nome" 
      />
      <input type='color' value={cor} onChange={evento => {
        setCor(evento.target.value)
      }} />
      <Botao>
        Criar Time
      </Botao>
      </form>
    </section>
  )

}

export default CadastrarTime;