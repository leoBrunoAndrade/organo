import {v4 as uuidv4} from 'uuid'
import { useState } from 'react';
import './App.css';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import CadastrarTime from './componentes/CadastrarTime';
import BotaoExpandir from './componentes/BotaoExpandir';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA',
    },
    {
      id: uuidv4(),
      nome: 'Data Sciense',
      cor: '#A6D157',
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69',
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#D86EBF',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FEBA05',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    }
  ])


  const [colaboradores, setColaborador] = useState([]);

  /*
  
  Ao solicitar mudança de estado do colaborador, ao renderizar o componente Time, é passado a lista por props.
  */
  function adicionarColaborador(colaborador) {
    setColaborador([...colaboradores, colaborador]);

  }

  function adicionarTime(time) {
    console.log(time.cor)
    setTimes([...times, time])

  }


  function deletarColaborador(id) {
    setColaborador(colaboradores.filter(p => p.id !== id))
    
  }

  function mudarCorTime(cor, id) {
    setTimes(times.map(t => {
      if(t.id === id) {
        t.cor = cor;
      }
      return t;
    
    }));
  }


  const [expandirValue, setExpandirValue] = useState(true);
  function expandirTimes(evento) {
    console.log(expandirValue)
    if(expandirValue){
      setExpandirValue(false);
    }else {
      setExpandirValue(true);
    }
  }
 
  return (
    <div className="app">
      <Banner />
      {expandirValue && 
        <div className='principal'>
          <Formulario times={times.map(time => time.nome)} enviarColaborador={adicionarColaborador} />
          <CadastrarTime enviarTime={adicionarTime} />
        </div>
      }
        <BotaoExpandir expandir={expandirTimes}/>
        {times.map(time => 
              <Time
                mudarCorTime={mudarCorTime}
                colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                key={time.nome} nome={time.nome}
                cor={time.cor}
                id={time.id}
                aoDeletar={deletarColaborador} 
              />
            )}
      <Rodape />
    </div>
  );
}

export default App;