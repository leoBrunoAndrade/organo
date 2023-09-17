import './BotaoExpandir.css'

const BotaoExpandir = ({expandir}) => {
  return (
    
    <div className='botaoExpandir'>
      <label>Minha organização:</label>
      <img  src="/imagens/botaoExpandir.png" alt="Expandir" onClickCapture={ evento => { expandir(evento) }} />
    </div>

  );
}

export default BotaoExpandir;