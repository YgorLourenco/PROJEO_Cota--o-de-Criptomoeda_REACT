import React, {useState, useEffect} from 'react'
import styled from '@emotion/styled'
import useMoeda from '../hooks/useMoeda'
import useCriptomoeda from '../hooks/useCriptomoeda'
import axios from 'axios' // Axios e um estilo de promisse para fazer requisições de maneira mais legivel com Async e Await
import Error from './Error'

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
// guardarMoeda, guardarCriptomoeda são do 'App.js'
const Formulario = ({guardarMoeda, guardarCriptomoeda}) => {


    // State de lista de criptomoedas
    const [listacripto, guardarCriptomoedas] = useState([])
    const [error, guardarError] = useState(false)

    const MOEDAS = [
        {codigo: 'USD', nome: 'Dolar dos Estados Unidos'},
        {codigo: 'MXN', nome: 'Peso Mexicano'},
        {codigo: 'EUR', nome: 'Euro'},
        {codigo: 'GBP', nome: 'Libra Esterlina'},
        {codigo: 'BRL', nome: 'Real Brasileiro'}
    ]

    // Utilizar useMoeda
    const [moeda, Selecionar] = useMoeda('Escolher sua moeda', '', MOEDAS);

    // Utilizar useCriptomoeda
    const [criptomoeda, SelectCripto] = useCriptomoeda('Escolha a sua criptomoeda', '', listacripto)

    // Executar chamando a API
    useEffect(() => {
        const consultaAPI = async () => { // Vai fazer a requisição na API
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const resultado = await axios.get(url) // Vai segurar o valor 
            guardarCriptomoedas(resultado.data.Data)
        }
        consultaAPI()
    }, [])

    // Quando o usuário fazer um submit
    const cotacaoMoeda = e => {
        e.preventDefault()

        // Validar se em ambos campos estão lendo
        if(moeda === '' || criptomoeda === '') {
            guardarError(true)
            return;
        }

        // Passar os dados do componente principal
        guardarError(false)
        guardarMoeda(moeda)
        guardarCriptomoeda(criptomoeda)
    }
    
    return ( 
        <form
            onSubmit={cotacaoMoeda}
        >

            {error
            ? <Error mensagem='Todos os campos são obrigatórios!' />
            : null}

            <Selecionar />

            <SelectCripto />

            <Botao 
                type='submit'
                value='Calcular'
            />
        </form>
     );
}
 
export default Formulario;