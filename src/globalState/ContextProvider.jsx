import React, { useReducer } from 'react'
import { useEffect } from 'react'
import { Context } from './context'
import { reducer } from './reducer'

const initialState = {
    todos: [],
    complete: 0,
    incomplete: 0
}

export const ContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        
        dispatch({
            type: 'INIT',
            payload: JSON.parse(localStorage.getItem('TODOS'))
        })

    }, [])

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}
