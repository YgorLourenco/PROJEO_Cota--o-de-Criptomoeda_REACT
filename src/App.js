import styled from '@emotion/styled'
// eslint-disable-next-line 
import { css, jsx } from '@emotion/react' // Corrigi o bug do @emotion
import image from './cryptomonedas.png'
import Formulario from './components/Formulario'

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

        <Formulario/>
      </div>
    </Concatenador>
  );
}

export default App;
