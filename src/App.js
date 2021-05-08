import styled from '@emotion/styled'
import {useState, useEffect} from 'react'
import axios from 'axios'
// eslint-disable-next-line 
import { css, jsx } from '@emotion/react' // Corrigi o bug do @emotion
import image from './cryptomonedas.png'
import Formulario from './components/Formulario'
import Cotacao from './components/Cotacao'
import Spinner from './components/Spinner'

const Concatenador = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive ;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`

function App() {

  const [moeda, guardarMoeda] = useState('')
  const [criptomoeda, guardarCriptomoeda] = useState('')
  const [resultado, guardarResultado] = useState({})
  const [carregando, guardarCarregando] = useState(false)

  useEffect(() => { 

    const cotacaoCriptomoeda = async () => {
      
    if(moeda === '') return; // Previnir a primera execução

    // Consultar a API para obter a cotação
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoeda}&tsyms=${moeda}`

    const resultado = await axios.get(url)

    // Mostrar o Spinner
    guardarCarregando(true)

    // Ocultar o Spinner e mostrar o resultado
    setTimeout(() => { // Depois de 3 segundos vai ativar uma função que desativa o spinner e mostra o resultado
      guardarCarregando(false)
      // Guardar Cotação
      guardarResultado(resultado.data.DISPLAY[criptomoeda][moeda])
    }, 3000)

    
    }
    cotacaoCriptomoeda()
    
  }, [moeda, criptomoeda])

  // Mostrar Spinner o resultado
  const componente = (carregando) ? <Spinner /> : <Cotacao resultado={resultado}/> // Se o carregando for verdadeiro mostrar o componente Spinner, se não o resultado
  // Mostrar o resultado em {componente} dentro de return abaixo do componente Formulário

  return (
    <Concatenador>
      <div>
        <Image 
          src={image}
          alt='imagem cripto'
        />
      </div>
      <div>
        <Heading>Cotação de Criptomoeda em um Instante</Heading>

        <Formulario 
          guardarMoeda={guardarMoeda}
          guardarCriptomoeda={guardarCriptomoeda}
        />
        {componente}

      </div>
    </Concatenador>
  );
}

export default App;
