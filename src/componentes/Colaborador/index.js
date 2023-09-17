import {AiFillCloseCircle} from 'react-icons/ai'
import './Colaborador.css'

//Recebendo de forma desestruturada
const Colaborador = ({nome, imagem, cargo, corDeFundo, aoDeletar, id}) => {

  const css = { backgroundColor: corDeFundo }

  return (<div className='colaborador' >

    <AiFillCloseCircle size={23} className='deletar' onClick={() => aoDeletar(id)} />
    <div className='cabecalho' style={css}>
      <img src={imagem} alt='' />
    </div>
    <div className='rodape'>
      <h4>{nome}</h4>
      <h5>{cargo}</h5>
    </div>
  </div>)
}


export default Colaborador;
