import { useEffect, useState } from 'react';


export const useLocalStorage = () => {

    const [state, setState] = useState();

    useEffect(() => {

        if( !JSON.parse(localStorage.getItem('TODOS')) ) {
            localStorage.setItem('TODOS', JSON.stringify( {
                todos: [],
                complete: 0,
                incomplete: 0
            } ));
        }

        const parsed = JSON.parse(localStorage.getItem('TODOS'));
        state && parsed.todos.unshift( state );
        state && parsed.incomplete++;
        localStorage.setItem('TODOS', JSON.stringify( parsed ));

    }, [state])

    const deleteFromLS = (id) => {
        const currentLS = JSON.parse(localStorage.getItem('TODOS'));
        const filter = currentLS.todos.filter( todo => todo.id !== id );
        currentLS.todos = filter;
        currentLS.complete++;
        currentLS.incomplete--;
        localStorage.setItem('TODOS', JSON.stringify( currentLS ));
    }

    return { ls: state, setLocalStorage: setState, deleteFromLS }

}