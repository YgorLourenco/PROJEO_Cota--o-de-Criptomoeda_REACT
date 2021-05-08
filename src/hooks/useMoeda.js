// Esse Hook 'useMoeda' e um Custom Hook que serve para criar um useState customizavel para uma determinada tarefa
import React, {Fragment, useState} from 'react'

const useMoeda = (label, stateinicial, opcoes) => {

    // State do custom hook
    const [state, atualizarState] = useState(stateinicial);

    const Selecionar = () => {
        <Fragment>
            <label>{label}</label>
            <select>
                <option value=''>Selecione</option>
                {opcoes.map(opcao => (
                    <option key={opcao.codigo} value={opcao.codigo}>{opcao.nome}</option>
                ))}
            </select>
        </Fragment>
    }

    // Retornar State, interface que modifica o state
    return [state, Selecionar, atualizarState];
}
export default useMoeda;