import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {


  /* Quando o componente de input é genérico - Estados
  1 - O controle da mudança do estado, geralmente é colocado no componente que chama este, ou seja, o formulário.
      Isso porque, colocando dentro do componente do input, teríamos que identificar qual componente exato (nome, imagem, cargo..),
      terá a mudança de estado realizada (ciclo de setar o valor e recuperar o mesmo);
  2 - O componente do input terá o papel de possuir o evento e atribuir o valor digitado, à props (no caso atualizar) especificada no form;
  3 - No Form, existirá a declaração do controle de estados (useState) para cada "instância" do componente (nome, cargo, imagem..)
  4 - Além disso, para cada chamada do componente input, a declaração das props atualizar e valor(que será responsável por passar 
    o valor atualizado da variável da mudança de estado)
    
  5 - Caso o estado inicie com um valor, por exemplo useState('Bruno'), a props valor, estará exibindo para o input, esse valor.


  Formulario : {controla mudança de estados} -> 
  Componentes : {Possuí eventos}, {Repassam valores por meio das próprias props recebidas do form} ->
  Formulario : {Recarrega próprio componente, o que também recarrega seus filhos (campo texto, botão etc)} ->
  Componentes : {Exibem o que receberam do formulario por meio das props, por exemplo value};

  */

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('https://github.com/');
  const [time, setTime] = useState('');


  /* 
   O formulário utiliza a mesma props recebida do App, para setar o colaborador, na função enviarColaborador.
   Dessa forma, lá no App.js, que contém o setColaborador, irá solicitar a atualização de estado 
   do nível acima do formuálirio, que é o App.js
  
  */
  function salvar(evento) {
    evento.preventDefault();
    const colaborador = {
      nome: nome,
      cargo: cargo,
      imagem: imagem,
      time: time
    }
    props.enviarColaborador(colaborador);
    

    setNome('');
    setCargo('');
    setTime('');
  }

  return (
    <section className="formulario">
      <form onSubmit={salvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          value={nome}
          atualizar={valor => setNome(valor)}
          obrigatorio={true} label="Nome"
          placeholder="Digite seu nome" />
        <CampoTexto
          value={cargo}
          atualizar={valor => setCargo(valor)}
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo" />
        <CampoTexto
          value={imagem}
          atualizar={valor => setImagem(valor)}
          obrigatorio={false}
          label="Imagem"
          placeholder="Informe o endereço da imagem" />
        <ListaSuspensa
          value={time}
          atualizar={valor => setTime(valor)}
          obrigatorio={true}
          label="Time" items={props.times} />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  )

}

export default Formulario;