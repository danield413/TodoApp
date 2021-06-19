

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                todos: [action.payload, ...state.todos],
                incomplete: state.incomplete + 1
            }
        case 'COMPLETE':
            return {
                ...state,
                todos: state.todos.filter( todo => todo.id !== action.payload ),
                complete: state.complete + 1,
                incomplete: state.incomplete - 1
            }
        case 'INIT': 
            return {
                ...state,
                todos: action.payload.todos,
                complete: action.payload.complete,
                incomplete: action.payload.incomplete
            }
        default:
            return state;
    }
}