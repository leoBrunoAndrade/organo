import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

  
  function aoSelecionar (evento) {
    props.atualizar(evento.target.value);
  }

  //JSX  
  return (
    <div className='listaSuspensa'>
      <label>{props.label}</label>
      <select required={props.obrigatorio} value={props.value} onChange={aoSelecionar}>
        {props.items.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}

export default ListaSuspensa;