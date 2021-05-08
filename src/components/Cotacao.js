import React from 'react'
import styled from '@emotion/styled'

const ResultadoDiv = styled.div`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
`
const Paragrafo = styled.p`
    font-size: 18px;
    span{ // Selecionar a tag span que esta dentro de Paragrafo
        font-weight:bold;
    }
`
const Preco = styled.p`
    font-size: 30px;
    span{ // Selecionar a tag span que esta dentro de Paragrafo
        font-weight:bold;
    }
`

// props resultado veio do 'App.js'
const Cotacao = ({resultado}) => {

    if(Object.keys(resultado).length === 0) return null; // Se o objeto vier vazio, não vai executar nada

    console.log(resultado)

    return ( 
        <ResultadoDiv>
            <Preco>O preço é: <span>{resultado.PRICE}</span></Preco>
            <Paragrafo>Preço mais alto do dia: <span>{resultado.HIGHDAY}</span></Paragrafo>
            <Paragrafo>Preço mais baixo do dia: <span>{resultado.LOWDAY}</span></Paragrafo>
            <Paragrafo>Variação nas últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}%</span></Paragrafo>
            <Paragrafo>Última atualização: <span>{resultado.LASTUPDATE}</span></Paragrafo>
        </ResultadoDiv>
     );
}
 
export default Cotacao;