// Esse Hook 'useMoeda' e um Custom Hook que serve para criar um useState customizavel para uma determinada tarefa
import React, {Fragment, useState} from 'react'

const useMoeda = () => {

    // State do custom hook
    const [state, atualizarState] = useState('');

    const Selecionar = () => {
        <Fragment>
            <label>Moeda</label>
            <select>
                <option value='MXN'>Peso Mexicano</option>
                <option value='BRL'>Real Brasileiro</option>
            </select>
        </Fragment>
    }

    // Retornar State, interface que modifica o state
    return [state, Selecionar, atualizarState];
}
export default useMoeda;