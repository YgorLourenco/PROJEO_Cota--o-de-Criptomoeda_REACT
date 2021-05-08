import React from 'react'
import styled from '@emotion/styled'

import useMoeda from '../hooks/useMoeda'

const Botao = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326AC0;
        cursor: pointer;
    }
`

const Formulario = () => {

    const MOEDAS = [
        {codigo: 'USD', nome: 'Dolar dos Estados Unidos'},
        {codigo: 'MXN', nome: 'Peso Mexicano'},
        {codigo: 'EUR', nome: 'Euro'},
        {codigo: 'GBP', nome: 'Libra Esterlina'},
        {codigo: 'BRL', nome: 'Real Brasileiro'}
    ]

    // Utilizar useMoeda
    const [moeda, Selecionar] = useMoeda('Escolher sua moeda', '', MOEDAS);

    return ( 
        <form>

            <Selecionar />

            <Botao 
                type='submit'
                value='Calcular'
            />
        </form>
     );
}
 
export default Formulario;