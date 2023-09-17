import hexToRgba from 'hex-to-rgba'
import './Time.css'
import Colaborador from '../Colaborador'

const Time = (props) => {
  const cssContainer = {backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(props.cor, 0.6)  }


  return (
    (props.colaboradores.length > 0) && <section className='time' style={cssContainer}>
      <input type='color' value={props.cor} onChange={evento => {

        props.mudarCorTime(evento.target.value, props.id)
        
        }} className='input-cor'/>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className='colaboradores'>
        {props.colaboradores.map((colaborador, indice) =>
          <Colaborador
            key={indice}
            indice={indice}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            id={colaborador.id}
            corDeFundo={props.cor} 
            aoDeletar={props.aoDeletar}/>)}
      </div>
    </section>
  )
}
export default Time;
