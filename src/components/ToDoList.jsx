import { Typography } from '@material-ui/core';
import React, { useContext } from 'react'
import { ToDo } from '../components/ToDo'
import { Context } from '../globalState/context'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Fade from '@material-ui/core/Fade';

export const ToDoList = ({classes}) => {

    const {state} = useContext(Context);
    const {todos} = state;
    
    return (
        <div className="overflow">
            {
                todos && todos.length === 0 && 
                <Fade in={true}>
                    <div className="center">
                        <Typography variant="h5" className={classes.black}>
                            No hay tareas pendientes
                        </Typography>
                        <AddCircleIcon fontSize="large" htmlColor="#5E5E5E"/>
                    </div>
                </Fade>
            }
            {
                todos && todos.map( (todo) => (
                    <ToDo key={todo.id} title={todo.title} description={todo.description} importance={todo.importance} id={todo.id}/>
                ))
            }
        </div>
    )
}
