import './CampoTexto.css'
const CampoTexto = (props) => {

  /* const placeholderModif = `${props.placeholder}...` */

  /*
  1 - O React executa o JSX apenas uma vez por declaração
  2 - Desse modo qualquer atribuição de valores nos inputs, por padrão terão sempre o mesmo valor sendo exibido
  3 - Os eventos atribuidos aos inputs, por padrão, não farão o recarregamento do jsx */


  /* Usando useState - Um Hook (gancho)
  1 - Primeiramente o evento é executado, ou seja, a função definida no evento é chamada;
  2 - Dentro da funçào, o target já terá o valor informado ao digitar, porém a variável informada no useState, terá o seu valor inicial;
  3 - Após o setValor ter sido chamado, o react entende que o componente deverá ser reexecutado, pois houve mudança de estado
  , incluíndo o JSX. Isso para que o useState passe o valor digitado no setValor para a variável valor.
  obs: no React.StrictMode o react reprocessa o componente duas vezes;
  */


  /* Quando o componente de input é genérico - Estados
  1 - O controle da mudança do estado, geralmente é colocado no componente que chama este, ou seja, o formulário.
      Isso porque, colocando dentro do componente do input, teríamos que identificar qual componente exato (nome, imagem, cargo..),
      terá a mudança de estado realizada (ciclo de setar o valor e recuperar o mesmo);
  2 - O componente do input terá o papel de possuir o evento e atribuir o valor digitado à props (no caso atualizar) especificada no form;
  3 - No Form, existirá a declaração do controle de estados (useState) para cada "instância" do componente (nome, cargo, imagem..)
  4 - Além disso, para cada chamada do componente input, a declaração das props atualizar e valor(que será responsável por passar 
    o valor atualizado da variável da mudança de estado)
    
  5 - Caso o estado inicie com um valor, por exemplo useState('Bruno'), a props valor, estará exibindo para o input, esse valor.
  */

  //const [valor, setValor] = useState('Bruno');
  console.log('Inicio');
  const aoDigitar = (evento) => {
    props.atualizar(evento.target.value);
    console.log(`Evento - ${evento.target.value}`);

  }
  console.log(`Fim CampoTexto`);
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input value={props.value} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder} />
      {/* <input required={props.obrigatorio} placeholder={placeholderModif} /> */}
    </div>
  )


}

export default CampoTexto
