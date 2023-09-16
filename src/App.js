import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data Sciense',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }

  ]

  const [colaboradores, setColaborador] = useState([]);

  /*
  
  Ao solicitar mudança de estado do colaborador, ao renderizar o componente Time, é passado a lista por props.
  */
  function adicionarColaborador(colaborador) {
    console.log(`APP:`, colaborador);
    setColaborador([...colaboradores, colaborador]);

  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} enviarColaborador={colaborador => adicionarColaborador(colaborador)} />
      {times.map(time => <Time
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        key={time.nome} nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria} />)}
      <Rodape />
    </div>
  );
}

export default App;