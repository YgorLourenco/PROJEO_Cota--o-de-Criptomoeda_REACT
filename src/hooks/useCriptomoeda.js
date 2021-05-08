// Esse Hook 'useMoeda' e um Custom Hook que serve para criar um useState customizavel para uma determinada tarefa
import React, {Fragment, useState} from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`

const useCriptomoeda = (label, stateinicial, opcoes) => {

    // console.log(opcoes)

    // State do custom hook
    const [state, atualizarState] = useState(stateinicial);

     const SelectCripto = () => {
        return (
          <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => atualizarState(e.target.value)} // Vai pegar as opções de moeda e armazenar
                value={state}
            >
              <option value="">Selecione</option>
              {opcoes.map((opcao) => ( // Vai entrar dentro do objeto CoinInfo e pegar as informações abaixo, pra criar a lista
                <option key={opcao.CoinInfo.Id} value={opcao.CoinInfo.Name}>
                  {opcao.CoinInfo.FullName}
                </option>
              ))}
            </Select>
          </Fragment>
        );
      };  

    // Retornar State, interface que modifica o state
    return [state, SelectCripto, atualizarState];
}
export default useCriptomoeda;